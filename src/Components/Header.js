import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav className="flex justify-center gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="sponsor">Sponsor</NavLink>
    </nav>
  );
}
