import React, { useContext } from "react";
import User from "../components/User";
import Message from "../components/User";
import { UserContext } from "../contexts/UserContext";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User />
    </div>
  );
};

export default About;
