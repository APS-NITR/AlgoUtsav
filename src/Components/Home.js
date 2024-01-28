import React from "react";
import head from "../assets/AlGoUTsaV.png";
import register from "../assets/Home assets/Union.png";
export default function Home() {
  return (
    <div className="" id="home">
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
        {/* put green planet */}
      </div>
      <div>
        {/* put space shuttl3-1 */}
      </div>
      <div>
        {/* put shooting star */}
      </div>
      <div>
        {/* put space shuttle-2 */}
      </div>
    </div>
  );
}
