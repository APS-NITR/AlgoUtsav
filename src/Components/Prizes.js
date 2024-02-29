import React from 'react'
import prizes from "../assets/Images/Prizes.png";
function Prizes() {
  return (
    <div id="prizes">
      <div
        className="my-4 sm:my-8 z-30"
        style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center",}}
      >
        <img
          src={prizes}
          alt="_about_us"
          style={{ maxWidth: "70%", maxHeight: "58px" }}
        />
      </div>
      
    </div>
  )
}

export default Prizes
