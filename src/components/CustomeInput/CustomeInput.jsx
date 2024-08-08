import React, { useState } from "react";

const CustomeInput = ({ label, placeholder }) => {
  const [startWriting, setStartWriting] = useState(false);

  const handleInputChange = (e) => {
    setStartWriting(e.target.value.length > 0);
  };

  return (
    <div className="relative">
      <input
        id="input-field"
        placeholder={placeholder}
        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-3 font-sans text-sm font-normal 
          text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-100 focus:border-gray-300 
          text-[18px] placeholder:text-gray-500
          "
        onInput={handleInputChange}
      />
      <label
        htmlFor="input-field"
        className={`absolute left-[-20px] text-[var(--thired-Color)] text-[25px] transition-all duration-300  transform translate-x-0  ${
          startWriting
            ? "top-0 opacity-100 -translate-y-6 scale-75"
            : "top-0 opacity-0 translate-y-0 scale-75"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomeInput;
