import React from "react";
import { FaPlus } from "react-icons/fa";

function PortofolioItem({ Image, setShowModal, setActiveImg }) {
  return (
    <div
      className="relative group flex justify-center"
      onClick={() => {
        setActiveImg(Image);
        setShowModal(true);
      }}
    >
      <div className="relative">
        <img src={Image} alt="" className="w-96 h-80 rounded-lg" />
        <div className="absolute top-0 right-0 left-0 bottom-0 rounded-lg bg-green-1 bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="flex items-center justify-center h-full text-white">
            <FaPlus size={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortofolioItem;
