import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../context/datacontext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function SingleProduct() {
  const { id } = useParams();
  const { data } = useData();
  const { addToCart } = useCart();

  const product = data.find((eachObj) => eachObj.id === parseInt(id));

  //   console.log(product);

  return (
    <>
      <Navbar />

      <div className="each-product-container">
        <div className="each-product-center wrapper">
          <div className="each-product two-column-layout">
            <div className="each-product-image-container">
              <img src={product.image} alt="lala"></img>
            </div>
            <div className="each-product-image-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{`PRICE: ${product.price}$`}</p>
              <div className="price">
                <FontAwesomeIcon icon={faStar} />
                {product.rating.rate}
              </div>
              <button
                className="button-yellow"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SingleProduct;
