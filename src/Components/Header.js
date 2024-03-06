import React, {useState, useEffect} from "react";
import { Link } from 'react-scroll';
// import logo from "../assets/Logo.png";
import Mobnav from "./Mobnav";
import { FaDownload } from "react-icons/fa";
import brochure from "../assets/Algoutstav Sponsorship Brochure.pdf"
export default function Header() {
  const [isMenuActive, setActive] = useState(false);
  const [fix,setFix] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  });
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
    {
      title: "FAQ",
      path: "faq",
    }
  ];
  return (
    <div className={fix ? 'navbar perman' : 'perman'}>
    <Mobnav isMenuActive={isMenuActive} toggleActive={toggleActive}/>
      <nav className="flex justify-around items-center gap-2 pt-4 pb-4 schd" >
        <div className="z-20">
          <img src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361572/AlgoUtsav/Logo_gfndql.png" alt="the_logo" className="curs"/>
        </div>
        <div className="flex gap-10 z-20 schd1">
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
        <div className="flex gap-1">
          <a
            href={brochure}
            download="AlgoUtsavBrochure.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="flex text-sm text-yellow-300 font-pusab curs menu">
              Brochure
            </h1>
          </a>
          <FaDownload className="text-sm text-yellow-300 font-pusab curs menu" size='20px'/>
        </div>
      </nav>
    </div>
  );
}
