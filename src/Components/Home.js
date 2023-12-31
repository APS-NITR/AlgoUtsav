import React from "react";
import head from "../assets/AlGoUTsaV.png";
import greenplanet from "../assets/Home assets/Green Planet.png";
import spaceshuttle from "../assets/Home assets/Space Shuttle.png";
import shootingstar from "../assets/Home assets/Shooting star.png";
import register from "../assets/Home assets/Union.png";
import shuttle from "../assets/Home assets/Shuttle.png";
export default function Home() {
  return (
    <div className="">
      <div
        className="mt-[50%] md:mt-[80px] "
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
          style={{  width: "auto", maxHeight: "140px" }}
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
            style={{ width: "auto", maxHeight: "140px", position: "relative" }}
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
      

      <div>
        <img
          alt="green planet"
          src={greenplanet}
          className="max-w-[45%] md:max-w-[35%]"
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            left: "0",
            
          }}
        />
      </div>
      <div>
        <img
          alt="Space Shuttle"
          src={spaceshuttle}
          className="max-w-[35%] md:max-w-[23%]"
          style={{ position: "absolute", bottom: "10px", right: "0px" }}
        />
      </div>
      <div>
        <img
          alt="Shooting Star"
          src={shootingstar}
          className="max-w-[23%] md:max-w-[16%]"
          style={{ position: "absolute", top: "0", right: "0" }}
        />
      </div>
      <div>
        <img
          alt="Space Shuttle-2"
          src={shuttle}
          className="max-w-[23%] md:max-w-[16%]"
          style={{ position: "absolute", top: "0", left: "0" }}
        />
      </div>
    </div>
  );
}
