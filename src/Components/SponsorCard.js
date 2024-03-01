import React from "react";
import "../index.css";

const SponsorCard = (props) => {
  return (
    <div
      className="rounded-3xl w-48 sm:w-60 p-4 shadow-md bg-[rgba(167,31,252,0.5)] shadow-[rgba(167,31,252,0.5)]"
      style={{ textAlign: "center", alignItems: "center", justifyContent: 'center' }}
    >
      <div className="Image-container opacity-100">
      <img
        className="rounded-3xl p-2 bg-gradient-to-br from-black h-40 w-40 max-w-[160px] min-w-[160px] sm:h-52 sm:w-52 sm:max-w-[208px] sm:min-w-[208px]"
        
        src={props.image}
        alt={props.title}
        style={{opacity: 1}}
      />
      </div>
      <h1 className="text-lg mt-8 mb-10 text-yellow-300 font-pusab opacity-100">
        {props.title}
      </h1>
    </div>
  );
};

export default SponsorCard;
