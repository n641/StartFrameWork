import React from "react";
import Avatar from "../../assets/imgs/avatar.svg";
import { FaStar } from "react-icons/fa6";

function Home() {
  return (
    <div className="bg-green flex flex-col justify-center align-middle items-center h-60Vh gap-5">
      <img src={Avatar} width={300} className="self-center" alt="" />
      <h1 className="text-white text-5xl font-bold">Start Framework</h1>

      <div className="flex gap-3 items-center">
        <div className="w-32 h-1 bg-white" />
        <FaStar color="white"/>
        <div className="w-32 h-1 bg-white" />
      </div>

      <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}

export default Home;
