import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://immense-dawn-63493.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="py-5" style={{ backgroundColor: "LightGoldenrodYellow" }}>
      <div class="container">
        <h1 className="primary-color pb-5">Client Reviews</h1>
        <div class="row">
          {reviews.map((review) => (
            <div class="col-sm-4" key={review._id}>
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">Name: {review.name} </div>
                <div class="card-body">
                  <h5 class="card-title">Rating: {review.rating}</h5>
                  <p class="card-text">{review.message} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
