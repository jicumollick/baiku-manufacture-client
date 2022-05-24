import React from "react";

const Reviews = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "LightGoldenrodYellow" }}>
      <div className="container">
        <h1 className="primary-color pb-5">Client Reviews</h1>
        <div className="row">
          <div className="col-sm-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Name: jiku Mollick </div>
              <div className="card-body">
                <h5 className="card-title">Rating: 5</h5>
                <p className="card-text">comment</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Name: jiku Mollick </div>
              <div className="card-body">
                <h5 className="card-title">Rating: 5</h5>
                <p className="card-text">comment</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Name: jiku Mollick </div>
              <div className="card-body">
                <h5 className="card-title">Rating: 5</h5>
                <p className="card-text">comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
