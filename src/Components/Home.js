import React from "react";
import head from "../assets/AlGoUTsaV.png";
import register from "../assets/Home assets/Union.png";
import green_planet from '../assets/Home assets/Green Planet.png';
import space_shuttle from '../assets/Home assets/Space Shuttle.png';
import shooting_star from '../assets/Home assets/Shooting star.png';
import shuttle from '../assets/Home assets/Shuttle.png'
//import backgroundImage from '../assets/HomePage.png';
export default function Home() {
 /* const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    style={containerStyle}
  };*/
 return (
    <div className="" id="home" >
      <div className="flex justify-between">
      <img
           alt='shuttle'
           src={shuttle}
           className="w-1/3  lg:w-auto"
          />
      <img
           alt='_shooting_star'
           src={shooting_star}
           className="w-1/3 h-1/2 lg:w-auto"
          />
      
      
      </div>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          
        }}
      >
        <img
          src={head}
          alt="heading"
          style={{  width: "auto", maxHeight: "140px" ,maxWidth:"80%"}}
        />
      </div>
      <a href="https://unstop.com/" target="_blank" rel="noopener noreferrer">
        <div
          style={{
            marginTop: "70px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src={register}
            alt="heading"
            style={{ width: "auto", maxWidth:"90%",maxHeight: "140px", position: "relative" }}
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
            <p className="text-yellow-400 text-[13px] md:text-[17px] font-normal  font-pusab curs">
              register on unstop
            </p>
          </div>
        </div>
        
      </a>
      

      <div className="flex justify-between">
      <img
           alt='_green_planet'
           src={green_planet}
           className="w-1/2 lg:w-auto"
          />
      
      
      <img
           alt='_space_shuttle'
           src={space_shuttle}
           className="mx-2 w-1/3 lg:w-auto"
          />
      </div>
      
    </div>
  );
}
