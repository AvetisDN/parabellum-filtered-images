import React from "react";

const Filters = ({ filter, categories, switchFilter }) => {
  return (
    <div className="filters">
      <button
        className={`filter-btn ${filter === 0 ? "active" : ""}`}
        onClick={() => switchFilter(0)}
      >
        Show All
      </button>
      {categories.map((item) => (
        <button
          className={`filter-btn ${filter === item.id ? "active" : ""}`}
          key={item.id}
          onClick={() => switchFilter(item.id)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Filters;
