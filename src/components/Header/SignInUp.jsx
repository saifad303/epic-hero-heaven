import React from "react";
import { useNavigate } from "react-router-dom";

const SignInUp = () => {
  const navigate = useNavigate();

  const signInHandler = () => {
    navigate("/sign-in");
  };

  return (
    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
      <button
        onClick={signInHandler}
        className="flex items-center justify-center gap-x-1 py-2 px-[0.25rem] text-[#EA6067] border-2 border-[#EA6067] font-medium  rounded-full md:inline-flex w-28 hover:bg-[#EA6067] hover:text-white"
      >
        Sign in
      </button>
    </div>
  );
};

export default SignInUp;
