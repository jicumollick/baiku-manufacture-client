import React from "react";
import bike from "../../Assets/images/bike.png";
const Banner = () => {
  return (
    <div style={{ backgroundColor: "lightblue", padding: "20px 40px" }}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <div>
              <h1>
                Welcome to <br />
                <span className="primary-color"> Baiku Manufacture</span>{" "}
              </h1>
              <p>
                <small>Your trusted Bike House</small>
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6">
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
