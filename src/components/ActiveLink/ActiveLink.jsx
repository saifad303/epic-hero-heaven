import React from "react";
import { NavLink } from "react-router-dom";
import "./active.css";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "border-b-2 border-[#EA6067]" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
