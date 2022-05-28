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
      <div className="container">
        <h1 className="primary-color pb-5">Our Bike Parts</h1>
        <div className="row ">
          {products.map((product) => (
            <div className="col-sm-4 my-3" key={product._id}>
              <div
                className="card"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <div className="p-3">
                  <img
                    className="card-img-top img-fluid"
                    src={product.img}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Name: {product.name}</h5>
                  <p className="card-text">{product.ShortDescription}</p>
                  <p className="card-text">
                    {" "}
                    Minimum Qty: {product.minimumQty}
                  </p>
                  <p className="card-text">
                    {" "}
                    Available Qty: {product.availableQty}
                  </p>
                  <p className="card-text">Price: {product.availableQty}</p>

                  <button
                    className="btn myButton"
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
