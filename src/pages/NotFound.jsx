import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/");
  };

  return (
    <main className=" h-screen w-full flex flex-col justify-center items-center bg-white">
      <img src="/img/batman-notfound.png" alt="" />
      <button className="mt-5" onClick={goHomeHandler}>
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <span>Go Home</span>
          </span>
        </a>
      </button>
    </main>
  );
};

export default NotFound;
