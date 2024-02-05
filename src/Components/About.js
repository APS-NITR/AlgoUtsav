import React from 'react'
import about from '../assets/Images/Aboutus.png';
import astronomer from '../assets/Images/astronomer.png';
import green_planet from '../assets/Images/greenplanet1.png';
import blue_planet from '../assets/Images/blueplanet1.png';
//import backgroundImage from '../assets/Images/HomePage2.png'
export default function About() {
  /*const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
   style={containerStyle} 
  };*/
  return (
    <div id="about" >
      <div className='z-10'>
      <img
           alt='_green_planet'
           src={green_planet}
           className="w-1/2 lg:w-auto"
          />
      </div>
      <div
        className="my-4 sm:my-8 z-30"
        style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center",}}
      >
        <img
          src={about}
          alt="_about_us"
          style={{ maxWidth: "70%", maxHeight: "58px" }}
        />
      </div>
      <div className='flex justify-between about_cont'>
        <div className='flex justify-center astro' style={{ maxWidth: "10%",maxHeight:"auto" }}>
          <img
           alt='_the_astromnomer'
           src={astronomer}
           
          />
        </div>
        <div className='p-14 pl-10 pr-48 astro_content'>
          <h1 className="text-base  text-yellow-400 font-pusab">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque, nisl nec interdum venenatis, nisl nibh gravida
            ligula, id facilisis mauris tortor ut nisl. Sed non nisl
            aliquam, ultricies dui quis, fermentum nibh. Nam auctor
            ullamcorper ante, ac tincidunt nisl. Nulla facilisi. Sed
            pellentesque, nisl nec interdum venenatis, nisl nibh gravida
            ligula, id facilisis mauris tortor ut nisl. Sed non nisl
            aliquam, ultricies dui quis, fermentum nibh. Nam auctor
            ullamcorper ante, ac tincidunt nisl. Nulla facilisi.
          </h1>
        </div>
      </div>
      <div className='z-10 astro_img flex justify-end'>
      <img
           alt='_blue_planet'
           src={blue_planet}
           className="w-1/2 lg:w-auto "
          />
      </div>
    </div>
    
  )
}
