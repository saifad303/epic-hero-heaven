import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Menu = () => {
  return (
    <ul className="justify-center font-bold items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
      <li className="text-gray-700 ">
        <ActiveLink to={"/"} className="block">
          Home
        </ActiveLink>
      </li>
      <li className="text-gray-700 ">
        <ActiveLink to={"/toys"} className="block">
          All Toys
        </ActiveLink>
      </li>
      <li className="text-gray-700 ">
        <ActiveLink to={"/my-toys"} className="block">
          My Toys
        </ActiveLink>
      </li>
      <li className="text-gray-700 ">
        <ActiveLink to={"/add-toy"} className="block">
          Add Toy
        </ActiveLink>
      </li>
      <li className="text-gray-700 ">
        <ActiveLink to={"/blogs"} className="block">
          Blogs
        </ActiveLink>
      </li>
    </ul>
  );
};

export default Menu;
