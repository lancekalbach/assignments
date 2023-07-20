import React, { useState } from 'react';
import axios from 'axios';

function RandomMeal() {
    const [randomMeal, setRandomMeal] = useState(null);
  
    const fetchRandomMeal = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/random.php'
        );
        setRandomMeal(response.data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <button onClick={fetchRandomMeal}>Find Random Meal</button>
        {randomMeal && (
          <div>
            <h2>{randomMeal.strMeal}</h2>
            <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
            <p>{randomMeal.strInstructions}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default RandomMeal;
  