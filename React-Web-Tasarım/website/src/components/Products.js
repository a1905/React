import React from "react";
import { Link } from "react-router-dom";

export const Products = ({ products, addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <div className="productspage-list">
        {products.map((item, index) => (
          <li key={index} className="productpage-item-card cursor-pointer">
            <Link
              to={`/productspage/${item.id}`}
              className="pp-card-image-wrapper"
            >
              <img src={item.images[0]} alt={`${item.name} image`} />
              <img
                className="image-hover"
                src={item.images[1]}
                alt={`${item.name} image hover`}
              />
            </Link>
            <div className="pp-card-info">
              <p>{item.name}</p>
              <span>{item.price} USD</span>
              <button
                className="pp-buy-btn"
                onClick={() => handleAddToCart(item)}
              >
                Sepete Ekle
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};
