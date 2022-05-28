import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    fetch("https://immense-dawn-63493.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(products);

  const handleDelete = async (e, product) => {
    isLoading(true);
    e.preventDefault();

    const agree = window.confirm("Do you want to delete? ");
    console.log(agree);
    if (agree) {
      await fetch(
        `https://immense-dawn-63493.herokuapp.com/product/${product._id}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`${product.name} deleted sucessfully`);
            setIsLoading(false);
          }
        });
    }
  };

  return (
    <div>
      <h2>All Products</h2>

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
                <p className="card-text"> Minimum Qty: {product.minimumQty}</p>
                <p className="card-text">
                  {" "}
                  Available Qty: {product.availableQty}
                </p>
                <p className="card-text">Price: {product.availableQty}</p>

                <button
                  className="btn myButton"
                  onClick={(e) => handleDelete(e, product)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
