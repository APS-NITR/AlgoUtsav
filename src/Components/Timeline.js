import React from 'react'
import blue_planet from '../assets/Images/blueplanet1.png';
import timeline from '../assets/Images/Timeline.png';
function Timeline() {
  let event = [
    {
      name:"Event 1",
      time:"10:00 AM",
      date:"January 1, 2024"
    },
    {
      name:"Event 1",
      time:"10:00 AM",
      date:"January 1, 2024"
    },
    {
      name:"Event 1",
      time:"10:00 AM",
      date:"January 1, 2024"
    },
    {
      name:"Event 1",
      time:"10:00 AM",
      date:"January 1, 2024"
    }
  ]
  return (
    <div>
      <div
        className="my-16 sm:my-8 z-30"
        style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center",}}
      >
        <img
          src={timeline}
          alt="_about_us"
          style={{ maxWidth: "70%", maxHeight: "58px" }}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-8 gap-4">
        {event.map((eve) => {
          return (
            <div className="w-3/4 border-2 border-[rgba(167,31,252,0.5)] footer text-white rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">{eve.name}</h3>
              <p className="text-sm">Time: {eve.time}</p>
              <p className="text-sm">Date: {eve.date}</p>
            </div>
          );
        })}
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

