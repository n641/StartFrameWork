import React from "react";
import { FaStar } from "react-icons/fa6";

function About() {
  return (
    <div className="bg-green flex flex-col justify-center align-middle items-center h-60Vh gap-5">
      <h1 className="text-white text-5xl font-bold uppercase">
        about component
      </h1>

      <div className="flex gap-3 items-center">
        <div className="w-32 h-1 bg-white" />
        <FaStar color="white" />
        <div className="w-32 h-1 bg-white" />
      </div>

      <div className="flex flex-wrap gap-10 items-center self-center justify-center ">
        <p className="text-left text-white max-w-xl">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="text-left text-white max-w-xl">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}

export default About;
