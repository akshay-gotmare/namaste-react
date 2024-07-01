import React, { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "./UserContext";

const About = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h1>About Page</h1>
      <h4>Welcome to the About Page</h4>
      <UserClass name={data.loggedInUser} location="Pune" />
    </div>
  );
};

export default About;
