import React from "react";
import "../index.css";

const SponsorCard = (props) => {
  return (
    <div
      className="rounded-3xl p-4 bg-sponsor-pink shadow-md shadow-sponsor-pink z-10"
      style={{ textAlign: "center", alignItems: "center", justifyContent: 'center' }}
    >
      <img
        className="rounded-3xl bg-white h-40 w-40 max-w-[160px] min-w-[160px] sm:h-52 sm:w-52 sm:max-w-[208px] sm:min-w-[208px]"
        src={props.image}
        alt={props.title}
      />
      <h1 className="text-lg mt-8 mb-10 text-yellow-300 font-pusab">
        {props.title}
      </h1>
    </div>
  );
};

export default SponsorCard;
