import React from "react";
import { useAuthProvider } from "../../context/AuthProvider";
import { auth } from "../../../firebase.config";
import "./header.css";

const LoggedInUser = () => {
  const { signOutProviderHandler, setSignedInUser, signedInUser } =
    useAuthProvider();

  const signOutHandler = () => {
    signOutProviderHandler().then(() => {
      setSignedInUser(null);
    });
  };

  return (
    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
      <button
        data-title={signedInUser.displayName}
        className="custom-tooltip-btn w-10 h-10 outline-none rounded-full ring-offset-2 ring-[#EA6067] ring-2 "
      >
        <img
          src={signedInUser.photoURL || `/img/dummy-image.png`}
          className="w-full h-full rounded-full"
        />
      </button>
      <button
        onClick={signOutHandler}
        className="flex items-center justify-center gap-x-1 py-2 px-[0.25rem] text-[#EA6067] border-2 border-[#EA6067] hover:bg-[#EA6067] hover:text-white font-medium  rounded-full md:inline-flex w-28"
      >
        Sign out
      </button>
    </div>
  );
};

export default LoggedInUser;
