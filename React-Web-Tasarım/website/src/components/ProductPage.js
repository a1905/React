import React from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductPage = ({ products, addToCart }) => {
  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id));

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div className="product-item-page-container">
      <div className="product-item-page-card">
        <div className="product-item-page-img-container">
          {product && (
            <img
              className="product-item-page-img"
              src={`/${product.images[0]}`}
              alt="Product Image"
            />
          )}
        </div>
        <div className="product-item-page-img-info-container">
          <div className="product-item-page-img-info">
            <div className="stars">
              {" "}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <CiStar />
            </div>
            <div className="sizes">
              <h1 className="sizes-title">Beden</h1>
              {Object.keys(product.sizes).map((size, index) => (
                <li key={index} className="size">
                  {size}
                </li>
              ))}
            </div>
            <div className="product-item-page-desc">{product.description}</div>
            <div className="product-item-page-price">{product.price} USD</div>
            <button
              onClick={() => handleAddToCart(product)}
              className="product-item-page-btn"
            >
              Sepete Ekle
            </button>
          </div>
          <div className="otherImages">
            <div className="otherImages-container">
              <img
                className="otherImage"
                src={`/${product.images[0]}`}
                alt="Product Image"
              ></img>
            </div>
            <div className="otherImages-container">
              <img
                className="otherImage"
                src={`/${product.images[1]}`}
                alt="Product Image"
              ></img>
            </div>
            <div className="otherImages-container">
              <img
                onClick={() => handleClick(id)}
                className="otherImage"
                src={`/${product.images[2]}`}
                alt="Product Image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
