import React from "react";
// import head from "../assets/AlGoUTsaV.png";
// import register from "../assets/Home assets/Union.png";
// import green_planet from '../assets/Home assets/Green Planet.png';
// import space_shuttle from '../assets/Home assets/Space Shuttle.png';
export default function Home() {
 return (
    <div className="" id="home" >
      <div
        className="algo_heading sm:mt-28"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          height: "20em",
        }}
      >
        <img
          src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361404/AlgoUtsav/AlGoUTsaV_yg4ftm.png"
          alt="heading"
          style={{  width: "auto", maxHeight: "140px" ,maxWidth:"80%"}}
          draggable={false}
        />
      </div>
      <a href="https://unstop.com/hackathons/algoutsav-2024-nit-rourkela-905708" target="_blank" rel="noopener noreferrer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361297/AlgoUtsav/Home%20assets/Union_hsgfhm.png"
            alt="heading"
            style={{ width: "auto", maxWidth:"90%",maxHeight: "140px", position: "relative" }}
            draggable={false}
          />
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p className="text-yellow-400 text-[13px] md:text-[17px] font-normal font-pusab curs">
              register on unstop
            </p>
            
          </div>
        </div>
      </a>
      <div className="flex pt-14 justify-between">
        <img
           alt='_green_planet'
           src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361310/AlgoUtsav/Home%20assets/Green_Planet_fc92qh.png"
           className="w-1/2 lg:w-[320px]"
           draggable={false}
        />
        <img 
           alt='_space_shuttle'
           src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361312/AlgoUtsav/Home%20assets/Space_Shuttle_kovwvy.png"
           className="mx-2 w-1/3 hidden sm:block lg:w-[230px]"
           draggable={false}
         />
      </div>
      
    </div>
  );
}

