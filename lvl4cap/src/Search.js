import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [meals, setMeals] = useState([]);
  const [displayedMeals, setDisplayedMeals] = useState([])
  const [showMore, setShowMore] = useState(false)
  const [showLess, setShowLess] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [showIngredients, setShowIngredients] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const foundMeals = response.data.meals || []
      setMeals(foundMeals);
      setDisplayedMeals(foundMeals.slice(0, 6)) // show the first 6 meals
      setShowMore(foundMeals.length > 6) // show the more option if there are more than 6
      setShowLess(false); // hide the show less option
      setSelectedMeal(null); // reset selected meal when a new search is performed
      setShowIngredients(false); // hide the ingredients when a new search is performed
    } catch (error) {
      console.error(error)
    }
  }

  const handleShowMore = () => {
    setDisplayedMeals(meals) // displays all meals
    setShowMore(false) // hides the more option
    setShowLess(true) // shows the show less option
  }

  const handleShowLess = () => {
    setDisplayedMeals(meals.slice(0, 6)) // Displays the first 6 meals
    setShowMore(true); // Shows the more option
    setShowLess(false); // Hides the show less option
  }

  const handleShowIngredients = (meal) => {
    setSelectedMeal(meal); // Set the selected meal
    setShowIngredients(true); // Shows the ingredients for the selected meal
  }

  const handleHideIngredients = () => {
    setShowIngredients(false); // Hides the ingredients
  };

  return (
    <div>
    <form>
        <input
            className='search-input-box'
            placeholder='Find Meals'
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button"onClick={handleSearch}>Search</button>
    </form>
      <ul>
        {displayedMeals.map((meal) => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img className="meal-img" src={meal.strMealThumb} alt={meal.strMeal} />
            <button onClick={() => handleShowIngredients(meal)}>Show Ingredients</button>
          </li>
        ))}
      </ul>
      {showMore && (
        <button onClick={handleShowMore}>More</button>
      )}
      {showLess && (
        <button onClick={handleShowLess}>Show Less</button>
      )}
      {selectedMeal && showIngredients && (
        <div>
          <h3>{selectedMeal.strMeal}</h3>
          <img className="meal-img" src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
          <h4>Ingredients:</h4>
          <ul>
            {Object.entries(selectedMeal) //turning the selectedMeal into an array of key value pairs
              .filter(([key, value]) => key.startsWith('strIngredient') && value) //checks each pair to see if the key starts with the string strIngredient and if the value is truthy 
              .map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
          </ul>
          <button onClick={handleHideIngredients}>Hide Ingredients</button>
        </div>
      )}
    </div>
  );
};

export default Search;

