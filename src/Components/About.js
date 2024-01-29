import React from 'react'
import about from '../assets/Images/Aboutus.png';
import astronomer from '../assets/Images/astronomer.png';
export default function About() {
  return (
    <div id="about">
      <div className='z-10'>
        {/* put green planet */}
      </div>
      <div
        className="my-4 sm:my-8 z-30"
        style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center",}}
      >
        <img
          src={about}
          alt="_about_us"
          style={{ maxWidth: "100%", maxHeight: "58px" }}
        />
      </div>
      <div className='flex justify-between about_cont'>
        <div className='astro'>
          <img
           alt='_the_astromnomer'
           src={astronomer}
          />
        </div>
        <div className='p-14 pl-10 pr-48 astro_content'>
          <h1 className="text-base text-yellow-400 font-pusab">
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
      <div className='z-10 astro_img'>
        {/* put blue planet */}
      </div>
    </div>
    
  )
}
