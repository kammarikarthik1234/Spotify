import React from "react";
import "./Sidebar.css";
import spotify from "../../assets/images/spotify.png";
const Sidebar = () => {
  return (
    <div className="w-72 h-full  ml-8 text-white flex flex-row gap-0 ">
      <div className="logo-wrapper w-14 mb-8 overflow-hidden">
        <img src={spotify} className="object-cover" />
      </div>
      <div className=" text-white spotify font-medium mt-1.5">Spotify </div>
      <div className="flex items-center justify-center w-1.5 h-1.5 mt-5 border border-white rounded-full font-bold  trademark ">
        R
      </div>
    </div>
  );
};

export default Sidebar;
