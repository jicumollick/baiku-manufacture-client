import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [currentuser, setCurrentUser] = useState({});

  // taking current user
  useEffect(() => {
    fetch(`https://immense-dawn-63493.herokuapp.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      });
  }, [user]);

  const updateProfile = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const education = e.target.education.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;

    const user = { email, username, education, address, phone };
    console.log(email, username, education, address, phone);

    fetch(`https://immense-dawn-63493.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfully Saved");
        }
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="container">
      <h2>My Profile</h2>
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm">
          <form onSubmit={(e) => updateProfile(e)}>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={user?.email}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="username" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Type Your Name"
                defaultValue={currentuser?.name}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="education" className="form-label">
                Education
              </label>
              <input
                type="text"
                className="form-control"
                id="education"
                placeholder="Type Your Education"
                defaultValue={currentuser?.education}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Type Your Address"
                defaultValue={currentuser?.address}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Type Your Phone"
                defaultValue={currentuser?.phone}
              />
            </div>

            <button type="submit" className="btn myButton my-3">
              Save
            </button>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
};

export default MyProfile;
