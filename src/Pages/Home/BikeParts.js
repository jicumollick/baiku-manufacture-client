import React from "react";

const BikeParts = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "lightyellow" }}>
      <div className="container">
        <h1 className="primary-color pb-5">Our Bike Parts</h1>
        <div className="row">
          <div className="col-sm">
            <div
              className="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="p-3">
                <img
                  className="card-img-top img-fluid"
                  src="https://cdn.media.halfords.com/i/washford/463030/Shark-Ridill-Motorcycle-Helmet.webp?fmt=auto&qlt=default&$sfcc_tile$&w=680"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Short Description</p>
                <p className="card-text">Minimum Order Quantity</p>
                <p className="card-text">Available Quantity</p>
                <p className="card-text">Price</p>

                <a href="#" className="btn myButton">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              className="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="p-3">
                <img
                  className="card-img-top img-fluid"
                  src="https://cdn.media.halfords.com/i/washford/463030/Shark-Ridill-Motorcycle-Helmet.webp?fmt=auto&qlt=default&$sfcc_tile$&w=680"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Short Description</p>
                <p className="card-text">Minimum Order Quantity</p>
                <p className="card-text">Available Quantity</p>
                <p className="card-text">Price</p>

                <a href="#" className="btn myButton">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              className="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="p-3">
                <img
                  className="card-img-top img-fluid"
                  src="https://cdn.media.halfords.com/i/washford/463030/Shark-Ridill-Motorcycle-Helmet.webp?fmt=auto&qlt=default&$sfcc_tile$&w=680"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Short Description</p>
                <p className="card-text">Minimum Order Quantity</p>
                <p className="card-text">Available Quantity</p>
                <p className="card-text">Price</p>

                <a href="#" className="btn myButton">
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
