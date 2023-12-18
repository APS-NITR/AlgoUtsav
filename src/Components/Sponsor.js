import React from "react";
import Carroussel from "./Carroussel";
import OracleLogo from "../assets/Images/OracleLogo.png";
import BNYLogo from "../assets/Images/BNYLogo.jpg";
import LiciousLogo from "../assets/Images/LiciousLogo.webp";
import SponsorCard from "./SponsorCard";
import uuid4 from "uuid4";
import SponsorHead from "../assets/Images/Sponsors.png";
import "../Styles/Sponsors.css";

export default function Sponsor() {
  let cards = [
    {
      key: uuid4(),
      content: <SponsorCard image={OracleLogo} title="Company 1" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={BNYLogo} title="Company 2" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={LiciousLogo} title="Company 3" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={OracleLogo} title="Company 4" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={BNYLogo} title="Company 5" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={LiciousLogo} title="Company 6" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={OracleLogo} title="Company 7" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={BNYLogo} title="Company 8" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={LiciousLogo} title="Company 9" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={OracleLogo} title="Company 10" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={BNYLogo} title="Company 11" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={OracleLogo} title="Company 12" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={BNYLogo} title="Company 13" />,
    },
    {
      key: uuid4(),
      content: <SponsorCard image={LiciousLogo} title="Company 14" />,
    },
  ];

  return (
    <div className="bg-cover bg-fixed bg-no-repeat" style={{ padding: 4 }}>
      <div
        className="my-4 sm:my-8"
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
      <Carroussel
        showArrows={false}
        cards={cards}
        height="420px"
        width="90vw"
        margin="auto"
        offset={4}
      />
    </div>
  );
}
