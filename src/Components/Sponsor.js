import React from "react";
import Carroussel from "./Carroussel";
import OracleLogo from "../Images/OracleLogo.png";
import BNYLogo from "../Images/BNYLogo.jpg";
import LiciousLogo from "../Images/LiciousLogo.webp";
import SponsorCard from "./SponsorCard";
import "../Styles/Sponsors.css";

export default function Sponsor() {
  let cards = [
    { content: <SponsorCard image={OracleLogo} title="Company 1" /> },
    { content: <SponsorCard image={BNYLogo} title="Company 2" /> },
    { content: <SponsorCard image={LiciousLogo} title="Company 3" /> },
    { content: <SponsorCard image={OracleLogo} title="Company 4" /> },
    { content: <SponsorCard image={BNYLogo} title="Company 5" /> },
    { content: <SponsorCard image={LiciousLogo} title="Company 6" /> },
    { content: <SponsorCard image={OracleLogo} title="Company 7" /> },
    { content: <SponsorCard image={BNYLogo} title="Company 8" /> },
    { content: <SponsorCard image={LiciousLogo} title="Company 9" /> },
    { content: <SponsorCard image={OracleLogo} title="Company 10" /> },
    { content: <SponsorCard image={BNYLogo} title="Company 11" /> },
    { content: <SponsorCard image={OracleLogo} title="Company 12" /> },
    { content: <SponsorCard image={BNYLogo} title="Company 13" /> },
    { content: <SponsorCard image={LiciousLogo} title="Company 14" /> },
  ];

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <h1
        id="sponsor-head"
        class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-text-gr-1 to-text-gr-2"
        style={{ marginBottom: 100 }}
      >
        SPONSORS
      </h1>
      <Carroussel
        showArrows={false}
        cards={cards}
        height="200px"
        width="90%"
        margin="auto"
        offset={5}
      />
    </div>
  );
}
