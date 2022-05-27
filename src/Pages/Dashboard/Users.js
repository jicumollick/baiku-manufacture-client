import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const Users = () => {
  //   const [users, setUsers] = useState([]);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const makeAdmin = (user) => {
    fetch(`http://localhost:5000/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed to make an admin`);
        }
        res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Admin added Successfully");
        }
      });
  };
  return (
    <div>
      <h2>All Users {users.length}</h2>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Make Admin</th>
            <th scope="col">Remove User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u._id}>
              <th scope="row">{index + 1}</th>
              <td>{u.email}</td>
              <td>
                {u.role !== "admin" && (
                  <button
                    onClick={() => makeAdmin(u)}
                    className="btn btn-sm btn-primary"
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                <button className="btn btn-sm btn-danger">Delete User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
