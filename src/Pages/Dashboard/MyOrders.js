import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://immense-dawn-63493.herokuapp.com/order?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2>My Orders </h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Your Email</th>
            <th scope="col">Payment</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{o.name}</td>
              <td>{o.price}</td>
              <td>{o.userEmail}</td>
              <td>
                {o.price && o.paid && (
                  <Link to={`/dashboard/payment/${o._id}`}>
                    <button className="btn btn-sm btn-success">Pay Now</button>
                  </Link>
                )}

                {o.price && !o.paid && (
                  <span className="text-success">Paid</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
