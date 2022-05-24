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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Baiku Manufacture
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-4 mb-lg-0 ">
              <li className="nav-item px-lg-2 py-3 py-lg-2">
                <CustomLink to={"/"}>Home</CustomLink>
              </li>
              <li className="nav-item px-lg-2 py-3 py-lg-2">
                <CustomLink to={"/blogs"}>Blogs</CustomLink>
              </li>
              <li className="nav-item px-lg-2 py-3 py-lg-2">
                <CustomLink to={"/portfolio"}>Portfolio</CustomLink>
              </li>
              <li className="nav-item px-lg-2 py-3 py-lg-2">
                <CustomLink to={"/dashboard"}>Dashboard</CustomLink>
              </li>

              {user ? (
                <li
                  className="nav-item px-lg-2 py-3 py-lg-2"
                  onClick={() => logout()}
                >
                  <CustomLink to={"/login"}>Logout</CustomLink>
                </li>
              ) : (
                <li className="nav-item px-lg-2 py-3 py-lg-2">
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
