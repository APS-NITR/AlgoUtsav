import React from 'react'
import SponsorCard from './SponsorCard';
// import OracleLogo from "../assets/Images/OracleLogo.png";
import gold from "../assets/first.png"
import silver from "../assets/second.png"
import prizes from "../assets/Images/Prizes.png";
import bronze from "../assets/third.png"
function Prizes() {
  return (
    <div id="prizes">
      <div
        className="my-4 sm:my-8 z-30"
        style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center",}}
      >
        <img
          src={prizes}
          alt="_about_us"
          style={{ maxWidth: "70%", maxHeight: "58px" }}
        />
      </div>
      <div className="flex justify-evenly gap-10 flex-wrap mt-[60px]">
        <SponsorCard image={silver} title="Prizes Worth 7k"/>
        <SponsorCard image={gold} title="Prizes Worth 10k"/>
        <SponsorCard image={bronze} title="Prizes Worth 5k"/>
        
      </div>
      
    </div>
  )
}

export default Prizes
