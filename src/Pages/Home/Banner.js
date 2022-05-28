import React from "react";
import bike from "../../Assets/images/bike.png";
const Banner = () => {
  return (
    <div style={{ backgroundColor: "lightblue", padding: "20px 40px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div>
              <h1>
                Welcome to <br />
                <span className="primary-color"> Baiku Manufacture</span>{" "}
              </h1>
              <p>
                <small>Your Trusted Bike Manufacture Partner</small>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div>
              <img src={bike} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
