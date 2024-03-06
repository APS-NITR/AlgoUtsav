import React from 'react'
// import blue_planet from '../assets/Images/blueplanet1.png';
// import timeline from '../assets/Images/Timeline.png';
function Timeline() {
  let event = [
    {
      name:"Registration",
      time:"1st March 2024 to 15th March 2024",
      detail:"Registration period for AlgoUtsav at Unstop"
    },
    {
      name:"Guest Session of Mr. Vivek Gupta",
      time:"8th March 2024, 06:30 PM to 07:30 PM IST",
      detail:"Session on \"Competitive Programming for Internships and Placements\""
    },
    {
      name:"Guest Session of Mr. Jaskaran Singh",
      time:"11th March 2024, 06:30 PM to 07:30 PM IST",
      detail:"Session on \"Journey to ICPC World Finals\""
    },
    {
      name:"Guest Session of Mr. Pranav Mehta",
      time:"13th March 2024, 06:30 PM to 07:30 PM IST",
      detail:"Session on \"Topic Will be Updated\""
    },
    {
      name:"Registration at Codeforces",
      time:"16th March 2024, 08:00 AM to 01:55 PM IST",
      detail:"Team registrations start at Codeforces"
    },
    {
      name:"ICPC Style Coding Contest",
      time:"16th March 2024, 02:00 PM to 05:00 PM IST",
      detail:"Contest will commence at Codeforces"
    },
    {
      name:"Individual Coding Contest (Only for NIT Rourkela Students)",
      time:"17th March 2024, 04:00 PM to 06:00 PM IST",
      detail:"Contest will commence at Codeforces"
    },
    {
      name:"Prize Distribution Ceremony",
      time:"17th March 2024, 06:30 PM IST",
      detail:"Prize Distribution and Closing Ceremony"
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
          draggable={false}
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
           draggable={false}
          />
      </div>
    </div>
  )
}

export default Timeline

