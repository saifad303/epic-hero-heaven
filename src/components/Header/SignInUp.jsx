import React from "react";
import { useNavigate } from "react-router-dom";

const SignInUp = () => {
  const navigate = useNavigate();

  const signInHandler = () => {
    navigate("/sign-in");
  };

  const signUpHandler = () => {
    navigate("/sign-up");
  };

  return (
    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
      <button
        onClick={signInHandler}
        className="flex items-center justify-center gap-x-1 py-2 px-[0.25rem] text-[#EA6067] border-2 border-[#EA6067] font-medium  rounded-full md:inline-flex w-28 hover:bg-[#EA6067] hover:text-white"
      >
        Sign in
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={signUpHandler}
        className={`flex items-center justify-center gap-x-1 py-2 px-[0.25rem] text-[#EA6067] border-2 border-[#EA6067] font-medium  rounded-full md:inline-flex w-28 hover:bg-[#EA6067] hover:text-white`}
      >
        Sign up
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default SignInUp;
