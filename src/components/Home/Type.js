import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Frontend Developer",
          "Backend Developer",
          "Database Manager",
          "Code Reviewer",
          "Writer",
          "Speaker",
          "Tech Enthusiast",
          "Creative Thinker",
          "Problem Solver",
          "Team Player",
          "HomeChef :)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
