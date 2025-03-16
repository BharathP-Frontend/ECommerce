import React from "react";
import { useData } from "../context/datacontext";
import { Link } from "react-router-dom";

function Products() {
  const { data, loading, error } = useData();
  //   console.log(useData());

  //   console.log(data);

  const sixDataProducts = data.slice(0, 6);

  return (
    <>
      <div className="products-container">
        <div className="products-center wrapper three-column-layout">
          {loading && <h1>Loading</h1>}

          {error && <h1>Something went wrong</h1>}

          {!loading &&
            !error &&
            sixDataProducts.map((eachObj) => {
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
    </>
  );
}

export default Products;
