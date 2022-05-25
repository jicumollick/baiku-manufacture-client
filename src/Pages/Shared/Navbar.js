import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            Baiku Manufacture
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-4 mb-lg-0 ">
              <li class="nav-item px-lg-2 py-3 py-lg-2">
                <CustomLink to={"/"}>Home</CustomLink>
              </li>
              <li class="nav-item px-lg-2 py-3 py-lg-2">
                <CustomLink to={"/blogs"}>Blogs</CustomLink>
              </li>
              <li class="nav-item px-lg-2 py-3 py-lg-2">
                <CustomLink to={"/portfolio"}>Portfolio</CustomLink>
              </li>
              <li class="nav-item px-lg-2 py-3 py-lg-2">
                <CustomLink to={"/dashboard"}>Dashboard</CustomLink>
              </li>

              {user ? (
                <li
                  class="nav-item px-lg-2 py-3 py-lg-2"
                  onClick={() => logout()}
                >
                  <CustomLink to={"/login"}>Logout</CustomLink>
                </li>
              ) : (
                <li class="nav-item px-lg-2 py-3 py-lg-2">
                  <CustomLink to={"/login"}>Login</CustomLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
