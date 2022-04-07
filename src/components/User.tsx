import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const { user } = useContext(UserContext);
  return <>{user && <div>connected as {user.name}</div>}</>;
};

export default User;
