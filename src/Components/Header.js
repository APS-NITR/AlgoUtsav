import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import Mobnav from "./Mobnav";
export default function Header() {
  const [isMenuActive, setActive] = useState(false);
  function toggleActive() {
    if (window.innerWidth < 768) {
      if (isMenuActive) {
        setActive(false);
      } else {
        setActive(true);
      }
    }
  }

  useEffect(() => {
    document.body.className = isMenuActive ? "overflow-hidden" : "";
  }, [isMenuActive]);

  return (
    <>
      <Mobnav isMenuActive={isMenuActive} toggleActive={toggleActive}/>
      <nav className="flex justify-around items-center gap-2 pt-4 pb-4 schd">
        <div className="z-20">
          <NavLink to="/"><img src={logo} alt="the_logo" className="curs"/></NavLink>
        </div>
        <div className="flex gap-10 pl-[40rem] z-20 schd1">
          <NavLink to="/"><h1 className="text-sm text-yellow-300 font-pusab curs menu">HOME</h1></NavLink>
          <NavLink to="about"><h1 className="text-sm text-yellow-300 font-pusab curs menu">ABOUT US</h1></NavLink>
          <NavLink to="sponsor"><h1 className="text-sm text-yellow-300 font-pusab curs menu">SPONSOR</h1></NavLink>
        </div>
      </nav>
    </>
    
  );
}
