import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm col-sm-2 col-md-3  align-items-center "
            style={{ backgroundColor: "LightGoldenrodYellow" }}
          >
            {/* sidebar  */}
            <div className="sidebarContainer p-5">
              <div className="dashboardItem" style={{ padding: "10px" }}>
                <Link to={"/dashboard"}>Dashboard</Link>
              </div>
              <div className="dashboardItem">
                <Link to={"/dashboard/profile"}>My Profile</Link>
              </div>
              {!admin && (
                <div className="dashboardItem">
                  <Link to={"/dashboard/review"}>Add Review</Link>
                </div>
              )}
              {!admin && (
                <div className="dashboardItem">
                  <Link to={"/dashboard/orders"}>My Orders</Link>
                </div>
              )}

              {admin && (
                <div className="dashboardItem">
                  <Link to={"/dashboard/users"}> All Users</Link>
                </div>
              )}
              {admin && (
                <div className="dashboardItem">
                  <Link to={"/dashboard/manageOrders"}> Manage Orders</Link>
                </div>
              )}
              {admin && (
                <div className="dashboardItem">
                  <Link to={"/dashboard/manageProducts"}> Manage Products</Link>
                </div>
              )}
              {admin && (
                <div className="dashboardItem">
                  <Link to={"/dashboard/addProduct"}> Add Product</Link>
                </div>
              )}
            </div>
          </div>
          <div
            className="col-sm col-sm-10 col-md-9"
            style={{ backgroundColor: "lightblue" }}
          >
            {/* body  */}
            <h2 className="py-3">
              Welcome to Your Dashboard {user?.displayName}{" "}
            </h2>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
