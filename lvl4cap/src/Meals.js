import React, { useState, useEffect } from 'react';

function Meals() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setCategories(data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className='category-back'>
      <h1 className='category-title'>Category List</h1>
      <div className="category-container">
        {categories.map(category => (
          <div key={category.strCategory} className="category-item">
            <img src={category.strCategoryThumb} alt={category.strCategory}/>
            <div className="category-name">{category.strCategory}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;

