import React, { useContext } from "react";
import User from "../components/User";
import Message from "../components/User";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const user = {
    name: "Bob",
  };
  return (
    <div>
      <User />
      <button onClick={() => setUser(user)}> Login</button>
    </div>
  );
};

export default Login;
