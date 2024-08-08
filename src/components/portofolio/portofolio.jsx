import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import PortofolioItem from "../portofolioItem/portofolioItem";

const MyPortfolios = [
  {
    img: "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1721332153282-3be1f363074d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1721332153282-3be1f363074d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1721332153282-3be1f363074d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
];

function Portfolio() {
  const [ShowModal, setShowModal] = useState(false);
  const [ActiveImg, setActiveImg] = useState(null);
  return (
    <div className="flex flex-col items-center my-10 mt-28">
      <h1 className="text-blue text-5xl font-bold">Portfolio Component</h1>
      <div className="flex gap-3 items-center mt-4">
        <div className="w-32 h-1 bg-blue " />
        <FaStar color="#1A252F" />
        <div className="w-32 h-1 bg-blue" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center mt-10 mx-4">
        {MyPortfolios.map((item, index) => (
          <PortofolioItem
            Image={item.img}
            key={index}
            setShowModal={setShowModal}
            setActiveImg={setActiveImg}
          />
        ))}
      </div>

      {ShowModal && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-blue-950 bg-opacity-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div>
            <img
              src={ActiveImg}
              alt=""
              className="w-[500px] h-[500px] rounded-lg"
            />
          </div>
          <h1>hellow</h1>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
