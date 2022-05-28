import React from "react";
import { toast } from "react-toastify";

const AddReview = () => {
  const addReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const rating = e.target.rating?.value;
    const message = e.target.message?.value;

    const review = { name, rating, message };

    // adding a single review to database
    fetch("https://immense-dawn-63493.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Review Added Successfully");
        } else {
          toast.error("Failed to add Review");
        }
      });
    console.log(review);
  };
  return (
    <div>
      <h2>Add Your Review</h2>

      {/* review adding form  */}
      <div className="w-50 mx-auto">
        <form onSubmit={(e) => addReview(e)}>
          <div class="form-group">
            <label for="name">Your Name</label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
            />
          </div>
          <div class="form-group py-3">
            <label for="rating">Rating</label>
            <input
              name="rating"
              type="text"
              class="form-control"
              id="rating"
              aria-describedby="emailHelp"
              placeholder="Enter Your rating betwen ( 1 - 5)"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Your Message</label>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              class="form-control"
              placeholder="Write your comment"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary my-5">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
