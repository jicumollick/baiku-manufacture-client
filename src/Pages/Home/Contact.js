import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
    toast.success("Message Sended Succesfully");
  };
  return (
    <div className="py-5" style={{ backgroundColor: "lightcyan" }}>
      <h1 className="primary-color pb-5">Contact Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlhtmlFor="firstName" className="form-label">
                  FirstName:{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Type First Name"
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
              </div>
              <div className="mb-3">
                <label htmlhtmlFor="lastName" className="form-label">
                  LastName:{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Type Last Name"
                  {...register("lastName", { required: true, maxLength: 20 })}
                />
              </div>
              <div className="mb-3">
                <label htmlhtmlFor="email" className="form-label">
                  Email:{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Type Your Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlhtmlFor="message" className="form-label">
                  Message:{" "}
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder="Type Your Message"
                  {...register("message", { required: true, maxLength: 20 })}
                />
              </div>

              <input type="submit" className="btn myButton" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
