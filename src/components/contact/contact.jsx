import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import PulsingButton from "../PulsingButton/PulsingButton";
import CustomeInput from "../CustomeInput/CustomeInput";

function Contact() {
  return (
    <div className="flex flex-col items-center my-10 mt-40 h-[80vh]">
      <h1 className="text-blue text-5xl font-bold">Contact Section</h1>
      <div className="flex gap-3 items-center mt-4">
        <div className="w-32 h-1 bg-blue" />
        <FaStar color="#1A252F" />
        <div className="w-32 h-1 bg-blue" />
      </div>

      <div className="mt-28 w-[45%] flex flex-col gap-10">
        <CustomeInput label="userName :" placeholder={"userName"} />
        <CustomeInput label="userAge :" placeholder={"userAge"} />
        <CustomeInput label="userEmail :" placeholder={"userEmail"} />
        <CustomeInput label="userPassword :" placeholder={"userPassword"} />

        <PulsingButton />
      </div>
    </div>
  );
}

export default Contact;
