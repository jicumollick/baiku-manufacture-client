import React from "react";
import { FaBeer } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaFlagCheckered } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { SiProducthunt } from "react-icons/si";
const BusinessSummary = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "Thistle" }}>
      <div class="container">
        <h1 className="primary-color pb-5">Business Overview</h1>
        <div class="row">
          <div class="card rounded my-3 col-12 col-md-3">
            <div class="counter-box colored">
              <i class="">
                {" "}
                <IoIosPeople />
              </i>{" "}
              <br />
              <span class="counter h1">1293</span>
              <p>Happy Customers</p>
            </div>
          </div>
          <div class="card rounded my-3 col-12 col-md-3">
            <div class="counter-box colored">
              <i class="">
                {" "}
                <FaFlagCheckered></FaFlagCheckered>
              </i>{" "}
              <br />
              <span class="counter h1">21</span>
              <p>Countries</p>
            </div>
          </div>
          <div class="card rounded my-3 col-12 col-md-3">
            <div class="counter-box colored">
              <i class="">
                {" "}
                <VscFeedback />
              </i>{" "}
              <br />
              <span class="counter h1">1023</span>
              <p>FeedBacks</p>
            </div>
          </div>
          <div class="card rounded my-3 col-12 col-md-3">
            <div class="counter-box colored">
              <i class="">
                {" "}
                <SiProducthunt />
              </i>{" "}
              <br />
              <span class="counter h1">2391</span>
              <p>Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
