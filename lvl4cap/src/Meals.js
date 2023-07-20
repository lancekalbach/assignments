import React, { useState, useEffect } from 'react';

function Meals() {
  const [categories, setCategories] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState(15);

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

  const handleShowMore = () => {
    setVisibleCategories(prevVisibleCategories => prevVisibleCategories + 15);
  };

  const handleShowLess = () => {
    setVisibleCategories(prevVisibleCategories => prevVisibleCategories - 15);
  };

  return (
    <div className='category-back'>
      <h1 className='category-title'>Category List</h1>
      <div className="category-container">
        {categories.slice(0, visibleCategories).map(category => (
      <div key={category.strCategory} className="category-item">
        <img src={category.strCategoryThumb} alt={category.strCategory} width="200" height="200" />
        <div className="category-name">{category.strCategory}</div>
      </div>
  ))}
</div>

      <div>
        {visibleCategories < categories.length && (
          <button onClick={handleShowMore}>Show More</button>
        )}
        {visibleCategories > 15 && (
          <button onClick={handleShowLess}>Show Less</button>
        )}
      </div>
    </div>
  );
}

export default Meals;
