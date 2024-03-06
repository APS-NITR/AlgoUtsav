import React from "react";
import SponsorCard from "./SponsorCard";
import "../Styles/Sponsors.css";
export default function Sponsor() {
  return (
    <div className="mb-20" id="sponsor">
      <div className="z-1 astro_img flex justify-end">
        <img
          alt="_blue_planet"
          src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361346/AlgoUtsav/Images/blueplanet2_dsxyel.png"
          className="w-1/2 lg:w-[280PX] "
          draggable={false}
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
          src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361375/AlgoUtsav/Images/Sponsors_so1y2r.png"
          alt="sponsor_heading"
          draggable={false}
          style={{ maxWidth: "100%", maxHeight: "58px" }}
        />
      </div>
      <div className="flex justify-center gap-10 flex-wrap mt-[100px]">
        <SponsorCard
          image="https://res.cloudinary.com/di6wzocr9/image/upload/v1709746501/tc7jzvvdgcw67uqsarfd.png"
          title="Fastech Fashion Pvt. Ltd."
        />
        <SponsorCard
          image="https://res.cloudinary.com/di6wzocr9/image/upload/v1709744975/wnjy1icmr9gn6djlnj7g.png"
          title="AlgoZenith"
        />
      </div>
    </div>
  );
}
