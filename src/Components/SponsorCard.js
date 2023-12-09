import React from "react";
import "../index.css"

const SponsorCard = (props) => {
  return (
    <div
      className="rounded-3xl p-4 bg-sponsor-pink shadow-md shadow-sponsor-pink"
      style={{ textAlign: "center" }}
    >
      <img
        className="rounded-3xl bg-white"
        style={{ minHeight: 250, minWidth: 250, maxHeight: 250, maxWidth: 250 }}
        src={props.image}
        alt={props.title}
      />
      <h1 className="text-lg mt-8 mb-10 text-yellow-300 font-pusab">{props.title}</h1>
    </div>
  );
};

export default SponsorCard;
