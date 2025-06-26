import React from "react";
import "./CatogeryProduct.scss";

const categories = [
  { name: "Electronics", items: "2.5k+ items", icon: "📱" },
  { name: "Fashion", items: "1.8k+ items", icon: "👕" },
  { name: "Home & Garden", items: "1.2k+ items", icon: "🏠" },
  { name: "Beauty", items: "950+ items", icon: "✨" },
  { name: "Sports", items: "780+ items", icon: "🏋️" },
  { name: "Books", items: "650+ items", icon: "📘" },
  { name: "Gaming", items: "420+ items", icon: "🎮" },
  { name: "Baby & Kids", items: "380+ items", icon: "👶" },
];

const CatogeryProducts = () => {
  return (
    <div className="category-section">
      <h2>Shop by Category</h2>
      <p>
        Discover amazing products across all categories with unbeatable prices and quality
      </p>
      <div className="category-grid container mt-3">
        {categories.map((cat, idx) => (
          <div className="category-card" key={idx}>
            <div className="category-icon">{cat.icon}</div>
            <h3>{cat.name}</h3>
            <p>{cat.items}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatogeryProducts;
