import React from "react";

function CategoryFilter({ categories, selectClass, buttonSelectClass }) {
  const categoryList = categories.map((category) => {
    const className = category === selectClass ? "selected" : null;
    return (
      <button 
      key={category}
      className={className}
      onClick={() => buttonSelectClass(category)} 
      >
      {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
