import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import axios from "axios";

import { Contact } from "./components/Contact";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import "./App.css"; // import ifadesini buraya taşıdık
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const images = [
    "https://ktnimg2.mncdn.com/cms/2024/02/23/363fdce8-cd98-47a6-a99d-f64e9430ac47.jpg",
    "https://ktnimg2.mncdn.com/cms/2024/02/16/b5c7e236-4fa1-4be8-a0c8-ef322ab0c41a.png",
    "https://ktnimg2.mncdn.com/cms/2024/02/23/57076b56-3cd3-489f-a442-b21cdb4eb9d8.png",
  ];
  useEffect(() => {
    axios
      .get("/json/products.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      updatedItems[existingItemIndex].price =
        updatedItems[existingItemIndex].quantity * product.price;

      setCartItems(updatedItems);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, price: product.price },
      ]);
    }
  };

  const handleBasketDelete = (productId) => {
    const updatedItems = cartItems
      .map((item) => {
        if (item.id === productId) {
          // Eğer ürün bulunursa ve miktarı 1'den büyükse, miktarı azalt
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.price / item.quantity,
            };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter(Boolean);

    setCartItems(updatedItems);
  };

  return (
    <>
      <Header
        products={products}
        cartItems={cartItems}
        addToCart={addToCart}
        handleBasketDelete={handleBasketDelete}
      />
      <Routes>
        <Route
          path="/products"
          element={<Products products={products} addToCart={addToCart} />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage images={images} />} />
        <Route
          path="/productspage/:id"
          element={<ProductPage products={products} addToCart={addToCart} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
