import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Purchase from "../Purchase/Purchase";

const BikeParts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://immense-dawn-63493.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handlePurchase = (product) => {
    const id = product._id;
    navigate(`/purchase/${id}`);
  };

  return (
    <div className="py-5" style={{ backgroundColor: "lightyellow" }}>
      <div class="container">
        <h1 className="primary-color pb-5">Our Bike Parts</h1>
        <div class="row">
          {products.map((product) => (
            <div class="col-sm" key={product._id}>
              <div
                class="card"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <div className="p-3">
                  <img
                    class="card-img-top img-fluid"
                    src={product.img}
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Name: {product.name}</h5>
                  <p class="card-text">{product.ShortDescription}</p>
                  <p class="card-text"> Minimum Qty: {product.minimumQty}</p>
                  <p class="card-text">
                    {" "}
                    Available Qty: {product.availableQty}
                  </p>
                  <p class="card-text">Price: {product.availableQty}</p>

                  <button
                    class="btn myButton"
                    onClick={() => handlePurchase(product)}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeParts;
