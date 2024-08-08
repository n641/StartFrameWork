import React from "react";
import { FaFacebook } from "react-icons/fa";

const Item = ({ title }) => {
  return (
    <div className="relative group">
      <img
        src="https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D"
        alt=""
        className="w-96 h-96 rounded-lg"
      />
      <div className="absolute top-0 right-0 left-0 bottom-0 rounded-lg bg-green-1 bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
        <div className="flex items-center justify-center h-full text-white">
          <h2 className="text-xl font-bold">+</h2>
          <FaFacebook color="white"/>
        </div>
      </div>
    </div>
  );
};

function Portfolio() {
  return (
    <div className="flex flex-col items-center my-10 mt-28">
      <h1 className="text-blue text-5xl font-bold">portfolio component</h1>
      <div className="flex gap-3 items-center">
        <div className="w-32 h-1 bg-blue" />
        <p className="text-blue">*</p>
        <div className="w-32 h-1 bg-blue" />
      </div>
      <Item title="Project Title" />
    </div>
  );
}

export default Portfolio;
