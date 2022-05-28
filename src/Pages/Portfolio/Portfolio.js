import React from "react";

const Portfolio = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "Lavender" }}>
      <div className="container">
        <h1 className="primary-color pb-5"> My Portfolio</h1>
        <div className="row ">
          <div className="col-12 col-md-6 ">
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src="https://i.ibb.co/nc2pn38/IMG-20211003-212100.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            className="col-12 col-md-6 "
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div className="card px-lg-3">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  <span className="h3">Name:</span> Jicu Mollick
                </h2>{" "}
                <h5 className="card-text py-3">
                  {" "}
                  <span className="h5">Email: </span> jikumollick82@gmail.com
                </h5>
                <h5>
                  <span>Education:</span> B.Sc In CSE
                </h5>
                <h5 className="py-3">
                  <span>My Skills: </span>{" "}
                  Html5,Css3,Bootstrap5,Tailwindcss,DaisyUI,React,MongoDb,Node
                  js,Express JS.
                </h5>
                <h5>My Best 3 Proejects:</h5>
                <div className="my-3">
                  <span>
                    1) King Inventory{" "}
                    <a
                      href="https://king-inventory.web.app/"
                      className="btn btn-primary"
                      target={"blank"}
                    >
                      Visit King Inventory
                    </a>{" "}
                  </span>
                </div>
                <div className="my-3">
                  <span>
                    1) Mollick Photography{" "}
                    <a
                      href="https://mollick-photography.web.app/"
                      className="btn btn-primary"
                      target={"blank"}
                    >
                      Visit Mollick Photography
                    </a>{" "}
                  </span>
                </div>
                <div className="my-3">
                  <span>
                    1) Notes Tracker{" "}
                    <a
                      href="https://notes-tracker-1eb68.web.app/"
                      className="btn btn-primary"
                      target={"blank"}
                    >
                      Visit Notes Tracker
                    </a>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
