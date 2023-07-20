import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [displayedMeals, setDisplayedMeals] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showIngredients, setShowIngredients] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const foundMeals = response.data.meals || [];
      setMeals(foundMeals);
      setDisplayedMeals(foundMeals.slice(0, 6)); // Display only the first 6 meals
      setShowMore(foundMeals.length > 6); // Show the "more" option if there are more than 6 meals
      setShowLess(false); // Hide the "show less" option initially
      setSelectedMeal(null); // Reset selected meal when a new search is performed
      setShowIngredients(false); // Hide the ingredients when a new search is performed
    } catch (error) {
      console.error(error);
    }
  }

  const handleShowMore = () => {
    setDisplayedMeals(meals); // Display all meals
    setShowMore(false); // Hide the "more" option
    setShowLess(true); // Show the "show less" option
  }

  const handleShowLess = () => {
    setDisplayedMeals(meals.slice(0, 6)); // Display only the first 6 meals
    setShowMore(true); // Show the "more" option
    setShowLess(false); // Hide the "show less" option
  }

  const handleShowIngredients = (meal) => {
    setSelectedMeal(meal); // Set the selected meal
    setShowIngredients(true); // Show the ingredients for the selected meal
  }

  const handleHideIngredients = () => {
    setShowIngredients(false); // Hide the ingredients
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
            {Object.entries(selectedMeal)
              .filter(([key, value]) => key.startsWith('strIngredient') && value)
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

