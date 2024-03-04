import React from 'react'
// import blue_planet from '../assets/Images/blueplanet1.png';
// import timeline from '../assets/Images/Timeline.png';
function Timeline() {
  let event = [
    {
      name:"Registration Begins",
      time:"1 Mar 24 to 15 Mar 2024 11:59 PM IST",
      detail:"Regitration are open at unstop"
    },
    {
      name:"Contest 1",
      time:"16 Mar 24, 02:00 PM to 05:00 PM IST",
      detail:"contest will comence and begin in unstop"
    },
    {
      name:"contest 2",
      time:"17 Mar 24, 02:00 PM to 05:00 PM IST",
      detail:"contest will comence and begin in codeforces"
    },
    {
      name:"Guest Lecture",
      time:"17 mar 24, 06:00 PM to 07:00 PM IST",
      detail:"Guest lecture will be conducted by xyz"
    }
  ]
  return (
    <div>
      <div
        className="my-16 sm:my-8 z-30"
        style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center",}}
      >
        <img
          src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361367/AlgoUtsav/Images/Timeline_weadwb.png"
          alt="_about_us"
          style={{ maxWidth: "70%", maxHeight: "58px" }}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-8 gap-4">
        {event.map((eve) => {
          return (
            <div className="w-3/4 border-2 border-[rgba(167,31,252,0.5)] footer text-white rounded-lg p-4 mb-4">
              <h3 className="text-sm text-yellow-300 font-pusab mb-2">{eve.name}</h3>
              <p className="text-sm sm:text-base">Duration : {eve.time}</p>
              <p className="text-sm sm:text-base">{eve.detail}</p>
            </div>
          );
        })}
      </div>
      <div className='z-10 astro_img flex justify-end'>
      <img
           alt='_blue_planet'
           src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361346/AlgoUtsav/Images/blueplanet1_d6ofhd.png"
           className="w-1/2 lg:w-[280PX] "
          />
      </div>
    </div>
  )
}

export default Timeline

