import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="cart-product-container">
        <div className="cart-product-center wrapper">
          {cartItems.length > 0 ? (
            cartItems.map((eachObj) => {
              const { id, image, title, price } = eachObj;
              return (
                <div className="cart-product two-column-layout" key={id}>
                  <div className="cart-product-image-container">
                    <img src={image} alt="cart Image"></img>
                  </div>
                  <div className="cart-product-image-content">
                    <h4>{title}</h4>
                    <p>{`PRICE: ${price}$`}</p>
                    <div>
                      <button
                        className="button-blue"
                        onClick={() => removeFromCart(eachObj)}
                      >
                        Remove from Cart
                      </button>
                      <button className="button-yellow">Buy Now</button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Cart is Empty</h1>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
