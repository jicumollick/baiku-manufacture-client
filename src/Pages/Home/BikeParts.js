import React from "react";

const BikeParts = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "lightyellow" }}>
      <div class="container">
        <h1 className="primary-color pb-5">Our Bike Parts</h1>
        <div class="row">
          <div class="col-sm">
            <div
              class="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="p-3">
                <img
                  class="card-img-top img-fluid"
                  src="https://cdn.media.halfords.com/i/washford/463030/Shark-Ridill-Motorcycle-Helmet.webp?fmt=auto&qlt=default&$sfcc_tile$&w=680"
                  alt=""
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Name</h5>
                <p class="card-text">Short Description</p>
                <p class="card-text">Minimum Order Quantity</p>
                <p class="card-text">Available Quantity</p>
                <p class="card-text">Price</p>

                <a href="#" class="btn myButton">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="p-3">
                <img
                  class="card-img-top img-fluid"
                  src="https://cdn.media.halfords.com/i/washford/463030/Shark-Ridill-Motorcycle-Helmet.webp?fmt=auto&qlt=default&$sfcc_tile$&w=680"
                  alt=""
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Name</h5>
                <p class="card-text">Short Description</p>
                <p class="card-text">Minimum Order Quantity</p>
                <p class="card-text">Available Quantity</p>
                <p class="card-text">Price</p>

                <a href="#" class="btn myButton">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="p-3">
                <img
                  class="card-img-top img-fluid"
                  src="https://cdn.media.halfords.com/i/washford/463030/Shark-Ridill-Motorcycle-Helmet.webp?fmt=auto&qlt=default&$sfcc_tile$&w=680"
                  alt=""
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Name</h5>
                <p class="card-text">Short Description</p>
                <p class="card-text">Minimum Order Quantity</p>
                <p class="card-text">Available Quantity</p>
                <p class="card-text">Price</p>

                <a href="#" class="btn myButton">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeParts;
