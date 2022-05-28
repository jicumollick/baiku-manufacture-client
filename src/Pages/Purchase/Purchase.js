import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [quantity, setQuantity] = useState(0);
  const [maxQty, setMaxQuantity] = useState(0);
  const [minQty, setMinQuantity] = useState(0);
  const [qtyError, setQtyError] = useState("");
  const [product, setProduct] = useState({});
  const [user, loading, error] = useAuthState(auth);
  //   console.log(user);

  const { id } = useParams();

  const url = `https://immense-dawn-63493.herokuapp.com/purchase/${id}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMaxQuantity(data?.availableQty);
        setMinQuantity(data?.minimumQty);
      });
  }, []);

  const handleQuantity = (e) => {
    // console.log(e.target.value);
    setQuantity(e?.target?.value);

    // console.log(quantity, maxQty, minQty);

    if (quantity > maxQty || quantity < minQty) {
      if (quantity < minQty) {
        setQtyError(`Order More than ${minQty - 1}`);
      } else {
        setQtyError(`Order Less than ${maxQty + 1}`);
      }
    } else {
      setQtyError("");
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const description = e?.target[1]?.value;
    const price = e.target[2].value;
    const availableQty = e.target[3].value;
    const minimumQty = e.target[4].value;
    const orderQty = e.target[5].value;
    const userName = e.target[6].value;
    const userEmail = e.target[7].value;
    const address = e.target[8].value;
    const phone = e.target[9].value;
    const order = {
      name,
      description,
      price,
      availableQty,
      minimumQty,
      orderQty,
      userName,
      userEmail,
      address,
      phone,
      paid: true,
    };

    // make a url and put this order in order table

    fetch("https://immense-dawn-63493.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Order Added Successfully");
        } else {
          toast.error("Failed to add Order");
        }
      });

    console.log(order);
  };

  return (
    <div className="py-5">
      <div className="container">
        <h1 className="primary-color">Order Now</h1>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm col-md-8">
            {/* Order form  */}

            <form onSubmit={(e) => handleOrder(e)}>
              <div className="form-group row my-2">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Name:
                </label>
                <div className="col-sm-10">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    value={product.name}
                  />
                </div>
              </div>
              <div className="form-group row my-2">
                <label
                  htmlFor="description"
                  className="col-sm-2 col-form-label "
                >
                  Description:
                </label>
                <div className="col-sm-10 ">
                  <input
                    name="description"
                    type="text"
                    className="form-control"
                    id="description"
                    value={product.ShortDescription}
                  />
                </div>
              </div>
              <div className="form-group row my-2">
                <label htmlFor="price" className="col-sm-2 col-form-label ">
                  Price:
                </label>
                <div className="col-sm-10 ">
                  <input
                    name="price"
                    type="text"
                    className="form-control"
                    id="price"
                    value={product.price}
                  />
                </div>
              </div>

              <div className="form-group row my-2">
                <label
                  htmlFor="availableQty"
                  className="col-sm-2 col-form-label "
                >
                  Available Qty:
                </label>
                <div className="col-sm-10 ">
                  <input
                    name="availableQty"
                    type="text"
                    className="form-control"
                    id="availableQty"
                    value={product.availableQty}
                  />
                </div>
              </div>
              <div className="form-group row my-2">
                <label
                  htmlFor="minimumQty"
                  className="col-sm-2 col-form-label "
                >
                  Minimum Order Qty:
                </label>
                <div className="col-sm-10 ">
                  <input
                    name="minimumQty"
                    type="number"
                    className="form-control"
                    id="minimumQty"
                    value={product.minimumQty}
                  />
                </div>
              </div>
              <div className="form-group row my-2">
                <label htmlFor="orderQty" className="col-sm-2 col-form-label ">
                  Your Order Qty:
                </label>
                <div className="col-sm-10 ">
                  <input
                    name="orderQty"
                    type="number"
                    className="form-control"
                    id="orderQty"
                    // defaultValue={product.minimumQty}
                    onChange={(e) => handleQuantity(e)}
                  />
                </div>
              </div>

              {qtyError ? <p className="text-danger">{qtyError}</p> : ""}

              {/* {quantity < product.minimumQty
                ? setQtyError(`order more than ${product.minimumQty}`)
                : ""}
              {quantity > product.availableQty
                ? setQtyError(`Order less than ${product.availableQty}`)
                : ""}
              {qtyError ? <p className="text-danger">{qtyError}</p> : ""} */}

              <div className="form-group row my-2">
                <label htmlFor="userName" className="col-sm-2 col-form-label ">
                  User Name:
                </label>
                <div className="col-sm-10 ">
                  <input
                    name="userName"
                    type="text"
                    className="form-control"
                    id="userName"
                    value={user?.displayName}
                  />
                </div>
              </div>
              <div className="form-group row my-2">
                <label htmlFor="userEmail" className="col-sm-2 col-form-label ">
                  User Email:
                </label>
                <div className="col-sm-10 ">
                  <input
                    name="userEmail"
                    type="text"
                    className="form-control"
                    id="userEmail"
                    value={user?.email}
                  />
                </div>
              </div>
              <div className="form-group row my-2">
                <label htmlFor="address" className="col-sm-2 col-form-label ">
                  Address:
                </label>
                <div className="col-sm-10 ">
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    id="address"
                    required
                  />
                </div>
              </div>
              <div className="form-group row my-2">
                <label htmlFor="phone" className="col-sm-2 col-form-label ">
                  Phone:
                </label>
                <div className="col-sm-10 ">
                  <input
                    name="phone"
                    type="text"
                    className="form-control"
                    id="phone"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`
                 ${
                   quantity < product.minimumQty ||
                   (quantity > product.availableQty &&
                     quantity !== product.minimumQty)
                     ? "disableBtn"
                     : "btn myButton"
                 }
                `}
              >
                Place Order
              </button>
            </form>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
