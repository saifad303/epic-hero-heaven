import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Menu = () => {
  return (
    <ul className="justify-center font-semibold items-center space-y-6 md:flex md:space-x-4 md:space-y-0">
      <li className="text-slate-700 ">
        <ActiveLink to={"/"} className="block">
          Home
        </ActiveLink>
      </li>
      <li className="text-slate-700 ">
        <ActiveLink to={"/toys"} className="block">
          All Toys
        </ActiveLink>
      </li>
      <li className="text-slate-700 ">
        <ActiveLink to={"/my-toys"} className="block">
          My Toys
        </ActiveLink>
      </li>
      <li className="text-slate-700 ">
        <ActiveLink to={"/add-toy"} className="block">
          Add Toy
        </ActiveLink>
      </li>
      <li className="text-slate-700 ">
        <ActiveLink to={"/blogs"} className="block">
          Blogs
        </ActiveLink>
      </li>
    </ul>
  );
};

export default Menu;
