import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
export default function Header() {
  return (
    <nav className="flex justify-around items-center gap-2 pt-4 pb-4">
      <div className="z-20">
        <NavLink to="/"><img src={logo} alt="the_logo" className="curs"/></NavLink>
      </div>
      <div className="flex gap-10 pl-[40rem] z-20">
        <NavLink to="/"><h1 className="text-sm text-yellow-300 font-pusab curs">HOME</h1></NavLink>
        <NavLink to="about"><h1 className="text-sm text-yellow-300 font-pusab curs">ABOUT</h1></NavLink>
        <NavLink to="sponsor"><h1 className="text-sm text-yellow-300 font-pusab curs">SPONSOR</h1></NavLink>
      </div>
    </nav>
  );
}
