import React, { useState } from "react";
import { PiBasketThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";

export default function Header({
  products,
  cartItems,

  addToCart,
  handleBasketDelete,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [basketIsOpen, setBasketIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setBasketIsOpen(false); // Modal açılınca sepeti kapat
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputClick = () => {
    openModal();
  };

  const filterMethod = (product) => {
    return product.name.toLowerCase().startsWith(value.toLowerCase());
  };

  const handleBasketButtonClick = () => {
    setBasketIsOpen(!basketIsOpen);
    setModalIsOpen(false); // Sepet açılınca modali kapat
  };

  const calculateTotalPrice = () => {
    let total = 0;

    cartItems.forEach((item) => {
      const product = products.find((product) => product.id === item.id);
      if (product) {
        total += item.quantity * product.price;
      }
    });

    return total.toFixed(2);
  };

  return (
    <div className="header">
      <nav className="bg-black bg-opacity-30 fixed top-0 left-0 w-full z-50 bg-white-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl text-extrabold">
            <img
              className="brand-logo  cursor-pointer"
              src="https://giesto.com/cdn/shop/files/giesto-logo_200x.png?v=1695128335"
            />
          </Link>
          <input
            placeholder="Click"
            className="outline-none p-2 header-input"
            onClick={handleInputClick} // inputa tıklandığında modalı aç
          />

          <ul className=" header-list flex space-x-4">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-white">
                Products
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </li>
            <li>
              <PiBasketThin
                onClick={handleBasketButtonClick}
                className="basket-btn"
              />
            </li>
          </ul>
        </div>
      </nav>
      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="outline-none p-2"
              placeholder="Text Something..."
            ></input>
            {products.filter(filterMethod).map((product, index) => (
              <div key={index} className="modal-card flex cursor-pointer">
                <div className=" modal-img flex-1">
                  <img src={`/${product.images[0]}`} alt={product.name} />
                </div>{" "}
                <div className="modal-info flex-1">
                  <p>{product.name}</p> <span>{product.price} USD</span>
                  <button className="buying" onClick={() => addToCart(product)}>
                    Sepete Ekle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {basketIsOpen && (
        <div className="basket-page">
          <div className="basket-wrapper">
            <div className="basket-header">
              <p>Total Price {calculateTotalPrice()}</p>
            </div>{" "}
            {cartItems.map((item, index) => (
              <li className="basket-product flex mt-2" key={index}>
                <img src={`/${item.images[0]}`} alt={item.name} />
                <div className="basket-info">
                  <h3>{item.name}</h3> <p> {item.price.toFixed(2)} USD</p>
                  <p> {item.quantity}</p>
                  <button
                    onClick={() => handleBasketDelete(item.id)}
                    className="basket-delete-btn"
                  >
                    <MdOutlineDelete />
                  </button>
                </div>
              </li>
            ))}
            <div className="basket-bottom w-full p-2 text-center">
              {cartItems.length > 0 && <button className="buying">Buy</button>}
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
