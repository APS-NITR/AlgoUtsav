import React from "react";
// import Carroussel from "./Carroussel";
import OracleLogo from "../assets/Images/OracleLogo.png";
import SponsorCard from "./SponsorCard";
import SponsorHead from "../assets/Images/Sponsors.png";
import blue_planet from '../assets/Images/blueplanet2.png';
import "../Styles/Sponsors.css";
import uuid4 from "uuid4";
export default function Sponsor() {
  
  let spoqns = [
    {
       title:"Brand Exposure and Visibility",
       sub:"By sponsoring Algo Utsav, your company will obtain valuable exposure to our wide audience, which includes business leaders, decision-makers, and innovators. Your logo and message will be prominently displayed in our marketing materials, events, and digital platforms, increasing your brand's visibility and awareness."
    },
    {
      title : "Access to Targeted Audience",
      sub : "Our platform links you with a varied and interested audience that shares your interests and sector. By supporting Algo Utsav, you may have immediate access to a group of people who are eager to learn about and interact with your company."
    },
    {
      title :"Opportunities for Networking and Collaboration",
      sub : "Algo Utsav provides special networking opportunities and collaborations as part of our sponsorship packages. Make connections with innovators, decision-makers, and leaders in the industry to find opportunities for collaboration, establish alliances, and anticipate new trends."
    },
    {
      title :"Customised Sponsorship Offers ",
      sub : "Since every company is different, Algo Utsav provides bespoke sponsorship packages that may be tailored to your particular marketing objectives and financial constraints. Our services, which range from logo placements to exclusive event sponsorships, are designed to optimise your brand's visibility and influence."
    }
  ];
  return (
    <div className="" id="sponsor">
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
      <div className='mx-10 my-24'>
          <div className="text-lg text-yellow-400 font-pusab text-center">Why Sponsor Us ?</div><br />
          <div className="flex flex-row flex-wrap justify-center mx-28">
            {spoqns.map((spoqn) => {
              return (
                <div key={uuid4()}  className="lg:w-1/2 w-full py-4 px-4 sm:px-8 lg:py-10 lg:px-10 flex-grow flex flex-col">
                  <h1 className="text-base text-yellow-400 font-pusab mb-5">
                    {spoqn.title}
                  </h1>
                  <p className="text-lg  text-white ">
                    {spoqn.sub}
                  </p>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
}
