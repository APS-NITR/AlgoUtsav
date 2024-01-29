import React from "react";
import logo from "../assets/Logo.png";
const MobNav = ({ isMenuActive, toggleActive }) => {
  const navLinks = [
    {
      title: "HOME",
      path: "#home",
    },
    {
      title: "ABOUT US",
      path: "#about",
    },
    {
      title: "SPONSOR",
      path: "#sponsor",
    },
  ];
  return (
    <header
      className={"relative inset-x-0 top-0 z-50 py-4 md:hidden border-b border-b-white/5"}
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="z-20">
                <img src={logo} alt="the_logo" className="curs"/>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center justify-center p-2 opacity-60"
          >
            <div
              className="flex items-center justify-center p-2 opacity-100"
              onClick={toggleActive}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="inline-flex shrink-0 text-3xl text-yellow-300 font-pusab"
              >
                {isMenuActive ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8"></line>
                    <line x1="4" y1="16" x2="20" y2="16"></line>
                  </>
                )}
              </svg>
            </div>
          </button>
          <nav
            className={`duration-500 absolute inset-x-0 top-full z-10 flex-col p-6 pb-12 back downbar shadow-2xl flex transition-[opacity] ${
              isMenuActive ? "opacity-100" : "opacity-0 pointer-events-none z-20"
            }`}
          >
            <div className="flex flex-col mt-4 divide-y divide-white/5 border-y border-y-white/5">
              {navLinks.map((navLink, index) => (
                <div
                  className="flex items-center gap-2 py-4 text-xs text-yellow-300 font-pusab curs "
                  key={index}
                  onClick={toggleActive}
                >
                  <div className="menu">
                    <a href={navLink.path}>
                      {navLink.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobNav;