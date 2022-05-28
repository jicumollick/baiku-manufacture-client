import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1sMrFngQaYtiYlCt32gXz5TGhHEYEE8ApjD1e2Zr4wkMoiwI2vM9Bf4DheCekyZ7SMPwqPwCr5NoCA0Wak1GiC00iFdrNbmS"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://immense-dawn-63493.herokuapp.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <p class="card-title text-success fw-bold">
                  Hello , {order.userName}
                </p>
                <h3 class="card-title">
                  Pay For <span className="primary-color">{order.name}</span>
                </h3>
                <p class="card-text">Amount ${order.price}</p>
                <p class="card-text text-info">
                  Your Shipping Address: {order.address}
                </p>
                <p class="card-text ">Phone {order.phone}</p>
              </div>
            </div>
          </div>
          <div class="col-sm">One of three columns</div>
        </div>
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
