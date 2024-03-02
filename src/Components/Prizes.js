import React from 'react'
import SponsorCard from './SponsorCard';
// import OracleLogo from "../assets/Images/OracleLogo.png";
// import gold from "../assets/first.png"
// import silver from "../assets/second.png"
// import prizes from "../assets/Images/Prizes.png";
// import bronze from "../assets/third.png"
function Prizes() {
  return (
    <div id="prizes">
      <div
        className="my-4 sm:my-8 z-30"
        style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center",}}
      >
        <img
          src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361349/AlgoUtsav/Images/Prizes_g7ubn2.png"
          alt="_about_us"
          style={{ maxWidth: "70%", maxHeight: "58px" }}
        />
      </div>
      <div className="flex justify-center gap-10 sm:gap-20 flex-wrap mt-[60px]">
        <SponsorCard image="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361485/AlgoUtsav/first_nat0n0.png" title="Prizes Worth 10k"/>
        <SponsorCard image="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361574/AlgoUtsav/second_nt3a7f.png" title="Prizes Worth 7k"/>
        <SponsorCard image="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361577/AlgoUtsav/third_rzhofb.png" title="Prizes Worth 5k"/>
      </div>
      
    </div>
  )
}

export default Prizes
