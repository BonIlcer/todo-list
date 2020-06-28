import React from "react";
import reactLogo from "./reactLogo.png";
import routerLogo from "./routerLogo.png";

function About() {
  return (
    <div className="About">
      <h2>About project</h2>
      <p>This is my first project. It was created for studying React JS</p>
      <p>What did I use?</p>
      <p>
        React
        <img style={{ height: "25px" }} src={reactLogo} alt="React Logo"></img>
      </p>
      <p>
        React router
        <img
          style={{ height: "25px" }}
          src={routerLogo}
          alt="React Router Logo"
        ></img>
      </p>
      <p>React hooks</p>
    </div>
  );
}

export default About;
