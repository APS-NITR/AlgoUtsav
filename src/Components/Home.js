import React from 'react'
import head from '../assets/AlGoUTsaV.png'
import greenplanet from '../assets/Home assets/Green Planet.png'
import spaceshuttle from '../assets/Home assets/Space Shuttle.png'
import shootingstar from '../assets/Home assets/Shooting star.png'
import shuttle from '../assets/Home assets/Shuttle.png'
export default function Home() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", alignItems: "center" }}>
        <img
          src={head}
          alt="heading"
          style={{ marginTop: "70px", width: "auto", maxHeight: "140px" }}
        />
      </div>
      <div >
        <img
          alt='green planet'
          src={greenplanet}
          style={{ position: "absolute", bottom: "0", right: "0", left: "0", maxWidth: "35%" }}
        />
      </div>
      <div >
        <img
          alt='Space Shuttle'
          src={spaceshuttle}
          style={{ position: "absolute", bottom: "10px", right: "100px", maxWidth: "23%" }}
        />
      </div>
      <div >
        <img
          alt='Shooting Star'
          src={shootingstar}
          style={{ position: "absolute", top: "0", right: "0", maxWidth: "16%" }}
        />
      </div>
      <div >
        <img
          alt='Space Shuttle-2'
          src={shuttle}
          style={{ position: "absolute", top: "0", left: "0", maxWidth: "16%" }}
        />
      </div>
    </div>
  )
}
