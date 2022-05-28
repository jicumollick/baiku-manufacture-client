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
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-sm col-sm-2  align-items-center "
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
            </div>
          </div>
          <div
            class="col-sm col-sm-10"
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
