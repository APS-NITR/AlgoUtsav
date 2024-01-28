import React, {useState, useEffect} from "react";
import { Link } from 'react-scroll';
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
  const navLinks = [
    {
      title: "HOME",
      path: "home",
    },
    {
      title: "ABOUT US",
      path: "about",
    },
    {
      title: "SPONSOR",
      path: "sponsor",
    },
  ];
  return (
    <>
    <Mobnav isMenuActive={isMenuActive} toggleActive={toggleActive}/>
      <nav className="flex justify-around items-center gap-2 pt-4 pb-4 schd">
        <div className="z-20">
          <img src={logo} alt="the_logo" className="curs"/>
        </div>
        <div className="flex gap-10 pl-[40rem] z-20 schd1">
          {navLinks.map((link,index) => (
            <h1 className="text-sm text-yellow-300 font-pusab curs menu" key={index}>
              <Link 
                to={link.path}
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                {link.title}
              </Link>
            </h1>
          ))}
        </div>
      </nav>
    </>
  );
}
