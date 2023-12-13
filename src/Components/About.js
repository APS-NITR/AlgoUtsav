import React from 'react'
import about from '../Images/Aboutus.png';

export default function About() {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center" }}>
        <img
          src={about}
          alt="sponsor_heading"
          style={{ maxWidth: "582px", maxHeight: "58px" }}
        />
      </div>
      <div className='flex justify-evenly border-2 border-white '>
        <div className='text-white border-2 border-white'>HeLLO</div>
        <div className='text-white border-2 border-white'>HIII</div>
      </div>
    </div>
    
  )
}
