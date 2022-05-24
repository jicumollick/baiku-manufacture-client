import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithGoogle, googleUser, gooleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    cretaeUser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] =
    useSignInWithEmailAndPassword(auth);
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setRegister(isChecked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const confirmPassword = e.target.confirmPassword?.value;

    setEmail(email);
    setPassword(password);
    if (register) {
      //register here
      if (password !== confirmPassword) {
        setError("Password Don't matched,, try again");
        toast.error("Registration Failed");
        return;
      } else {
        createUserWithEmailAndPassword(email, password);
        toast.success("Registration SuccessFull");
        setError("");
        setRegister(false);
        navigate("/login");
      }
      console.log("register koro");
    } else {
      //login here via email and password
      signInWithEmailAndPassword(email, password);
      console.log(email, password);
      console.log("login koro");
    }
  };

  // redirect to home after successfull login
  useEffect(() => {
    if (googleUser || loginUser) {
      toast.success("Login SuccessFull");
      navigate(from, { replace: true });
    } else {
      navigate("/login");
    }

    if (googleError || loginError) {
      toast.error("Login Failed");

      setError(googleError ? googleError.message : loginError.message);
    }
  }, [googleUser, loginUser, googleError, loginError]);

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "lightcyan",
      }}
    >
      <div class="container">
        <h1 className="primary-color pb-5">
          {" "}
          {register ? "Register" : "Login"} Form
        </h1>
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            {/* Login for  */}

            <form
              onSubmit={(e) => handleSubmit(e)}
              style={{
                boxShadow:
                  "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                padding: "20px",
              }}
            >
              <div class="form-group" style={{ textAlign: "left" }}>
                <label for="exampleInputEmail1">Email address</label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group py-3" style={{ textAlign: "left" }}>
                <label for="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              {register ? (
                <>
                  <div class="form-group" style={{ textAlign: "left" }}>
                    <label for="confirmPassword"> Confirm Password</label>
                    <input
                      name="confirmPassword"
                      type="password"
                      class="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
              <div class="form-check py-3" style={{ textAlign: "left" }}>
                <input
                  name="checkbox"
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  onChange={(e) => handleChange(e)}
                />

                <label class="form-check-label" for="exampleCheck1">
                  Don't have an account ?
                </label>
              </div>
              <div>
                <p className="text-danger">{error ? error : ""}</p>
              </div>
              <button type="submit" class="btn myButton">
                {register ? "Register" : "Login"}
              </button>
            </form>
          </div>
          <div class="col-sm"></div>

          <div class="row py-4">
            <div class="col-sm"></div>
            <div class="col ">
              <hr />
            </div>
            <div class="col-auto fw-bold">OR</div>
            <div class="col">
              <hr />
            </div>
            <div class="col-sm"></div>
          </div>
          <div>
            <button
              className="btn btn-dark"
              style={{
                display: "flex justify-content-center",
                maxWidth: "200px",
              }}
              onClick={() => signInWithGoogle()}
            >
              <FcGoogle /> Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
