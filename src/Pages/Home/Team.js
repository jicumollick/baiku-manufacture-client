import React from "react";

const Team = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "Lavender" }}>
      <div class="container">
        <h1 className="primary-color pb-5">Meet The Team</h1>
        <div class="row">
          <div class="col-sm">
            <div
              class="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <img
                src="http://demo.themecanyon.org/html/primax/images/team-1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Jonathon Silva</h5>
                <p class="card-text">CEO & Founder</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <img
                src="http://demo.themecanyon.org/html/primax/images/team-2.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Michel Santner</h5>
                <p class="card-text">Technical Lead</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              class="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <img
                src="https://demo.themecanyon.org/html/primax/images/team-3.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Mika Singa</h5>
                <p class="card-text">Chief Advisor & executive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
