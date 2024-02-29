import React from 'react'
import blue_planet from '../assets/Images/blueplanet1.png';
import timeline from '../assets/Images/Timeline.png';
function Timeline() {
  return (
    <div>
      <div
        className="my-4 sm:my-8 z-30"
        style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center",}}
      >
        <img
          src={timeline}
          alt="_about_us"
          style={{ maxWidth: "70%", maxHeight: "58px" }}
        />
      </div>
      <div className='z-10 astro_img flex justify-end'>
      <img
           alt='_blue_planet'
           src={blue_planet}
           className="w-1/2 lg:w-[280PX] "
          />
      </div>
    </div>
  )
}

export default Timeline
