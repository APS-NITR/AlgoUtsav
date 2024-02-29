import React from "react";
// import Carroussel from "./Carroussel";
import OracleLogo from "../assets/Images/OracleLogo.png";
import SponsorCard from "./SponsorCard";
import SponsorHead from "../assets/Images/Sponsors.png";
import blue_planet from '../assets/Images/blueplanet2.png';
import "../Styles/Sponsors.css";
export default function Sponsor() {
  return (
    <div className="mb-20" id="sponsor">
      <div className='z-1 astro_img flex justify-end'>
        <img
           alt='_blue_planet'
           src={blue_planet}
           className="w-1/2 lg:w-[280PX] "
        />
      </div>
      <div
        className="my-4 sm:my-8 sm:mt-[-6em] z-30"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <img
          src={SponsorHead}
          alt="sponsor_heading"
          style={{ maxWidth: "100%", maxHeight: "58px" }} 
        />
      </div>
      <div className="flex justify-center gap-10 flex-wrap mt-[100px]">
        <SponsorCard image={OracleLogo} title="Company 9"/>
        <SponsorCard image={OracleLogo} title="Company 9"/>
        <SponsorCard image={OracleLogo} title="Company 9"/>
        <SponsorCard image={OracleLogo} title="Company 9"/>
      </div>
    </div>
  );
}
