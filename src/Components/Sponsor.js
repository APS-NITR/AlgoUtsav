import React from "react";
import Carroussel from "./Carroussel";
import OracleLogo from "../Images/OracleLogo.png";
import BNYLogo from "../Images/BNYLogo.jpg";
import LiciousLogo from "../Images/LiciousLogo.webp";
import SponsorCard from "./SponsorCard";
import uuid4 from "uuid4";
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
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <h1
        id="sponsor-head"
        class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-text-gr-1 to-text-gr-2 mb-8"
      >
        SPONSORS
      </h1>
      <Carroussel
        showArrows={false}
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={4}
      />
    </div>
  );
}
