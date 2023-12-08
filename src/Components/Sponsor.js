import React from "react";
import Carroussel from "./Carroussel";
import Image from "../Images/logo192.png"
import '../Styles/Sponsors.css'

export default function Sponsor() {

  let cards = [{content: <img src={Image}/>}, {content: <img src={Image}/>}, {content: <img src={Image}/>}, {content: <img src={Image}/>}]

  return (
    <div style={{textAlign: "center"}}>
      <h1 class="text-5xl font-bold">SPONSORS</h1>
      <Carroussel showArrows={true} cards={cards}/>
    </div>
  );
}
