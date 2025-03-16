import React from "react";
import Navbar from "../components/Navbar";
import { useData } from "../context/datacontext";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Jewelry() {
  const { data, loading, error } = useData();

  const jewelryProducts = data.filter((eachObj) => {
    return eachObj.category === `jewelery`;
  });

  const jewelryProductsSlice = jewelryProducts.slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="products-container">
        <div className="products-center wrapper three-column-layout">
          {loading && <h1>Loading</h1>}

          {error && <h1>Something went wrong</h1>}

          {!loading &&
            !error &&
            jewelryProductsSlice.map((eachObj) => {
              const { id, title, image } = eachObj;
              return (
                <div className="single-product" key={id}>
                  <div className="single-product-image-container">
                    <img src={image} alt="product-images"></img>
                  </div>
                  <div className="single-product-image-content">
                    <div>{title}</div>

                    <Link to={`/singleproduct/${id}`}>
                      <button className="button-blue">View Deatils</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Jewelry;
