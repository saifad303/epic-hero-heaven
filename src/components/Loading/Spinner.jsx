import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-96 my-20">
      {/* <div
        style={{ borderTopColor: "transparent" }}
        className=" w-40 h-40 border-4 border-red-400 border-double rounded-full animate-spin"
      ></div> */}
      <img src="/img/LyTN6md.gif" className="w-[250px]" alt="" />
    </div>
  );
};

export default Spinner;
