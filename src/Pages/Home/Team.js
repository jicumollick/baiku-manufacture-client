import React from "react";

const Team = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "Lavender" }}>
      <div className="container">
        <h1 className="primary-color pb-5">Meet The Team</h1>
        <div className="row">
          <div className="col-sm">
            <div
              className="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <img
                src="http://demo.themecanyon.org/html/primax/images/team-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Jonathon Silva</h5>
                <p className="card-text">CEO & Founder</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              className="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <img
                src="http://demo.themecanyon.org/html/primax/images/team-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Michel Santner</h5>
                <p className="card-text">Technical Lead</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              className="card"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <img
                src="https://demo.themecanyon.org/html/primax/images/team-3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Mika Singa</h5>
                <p className="card-text">Chief Advisor & executive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
