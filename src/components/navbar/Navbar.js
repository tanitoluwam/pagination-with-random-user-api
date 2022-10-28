import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "bold" : "none",
      color: isActive ? "Black" : "Black",
    };
  };
  return (
    <nav className="navigation">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/users">
        Users
      </NavLink>
      <NavLink style={navLinkStyles} to="/gender">
        Gender
      </NavLink>
    </nav>
  );
};
