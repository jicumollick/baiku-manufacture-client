import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <h2>My profile</h2>
    </div>
  );
};

export default MyProfile;
