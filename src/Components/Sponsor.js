import React from "react";
import Carroussel from "./Carroussel";
import OracleLogo from "../assets/Images/OracleLogo.png";
import BNYLogo from "../assets/Images/BNYLogo.jpg";
import LiciousLogo from "../assets/Images/LiciousLogo.webp";
import SponsorCard from "./SponsorCard";
import uuid4 from "uuid4";
import SponsorHead from "../assets/Images/Sponsors.png";
import mountain from "../assets/mountain.jpg";
import "../Styles/Sponsors.css";
import backgroundImage from '../assets/HomePage.png';
export default function Sponsor() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding:4,
  };
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
    <div className="bg-cover bg-fixed bg-no-repeat" style={containerStyle} id="sponsor">
      <div className="meteor">
        {/* put meteor */}
      </div>
      <div
        className="my-4 sm:my-8 z-30"
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
        background={backgroundImage}
        
      />
      <div className='z-10'>
        {/* put blueplanet */}
      </div>
      <div className='z-10 mt-[-400px]'>
        {/* put mountain */}
        <img src={mountain} alt="_the_mountain" />
      </div>
    </div>
  );
}
