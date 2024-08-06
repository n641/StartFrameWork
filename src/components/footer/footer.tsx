import React from "react";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="flex flex-col ">
        <div className="bg-blue-800 flex justify-between px-20 py-20 items-center">
          <div className="w-1/3">
            <p className="text-white">LOCATION</p>
            <p className="text-white">2215 John Daniel Drive</p>
            <p className="text-white">Clark, MO 65243</p>
          </div>

          <div className="w-1/3">
            <p className="text-white">AROUND THE WEB</p>
            <div>
            <i className="fa-brands fa-facebook-f"></i>asd
            </div>
          </div>

          <div className="w-1/3">
            <p className="text-white">ABOUT FREELANCER</p>
            <p className="text-white">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
              </p>
          </div>
        </div>
        <div className="bg-blue-950 py-3 pb-4">
          <p className="text-white">Copyright © Your Website 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
