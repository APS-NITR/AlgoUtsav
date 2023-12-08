import React from "react";

const SponsorCard = (props) => {
  return (
    <div
      className="rounded-3xl p-4 bg-sponsor-pink bg-opacity-70 shadow-md shadow-sponsor-pink"
      style={{ textAlign: "center" }}
    >
      <img
        className="rounded-3xl bg-white"
        style={{ minHeight: 200, minWidth: 200, maxHeight: 200, maxWidth: 200 }}
        src={props.image}
        alt={props.title}
      />
      <h1 className="text-2xl my-8 font-semibold text-yellow-300">{props.title}</h1>
    </div>
  );
};

export default SponsorCard;
