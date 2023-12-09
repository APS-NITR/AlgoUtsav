import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import Ellipse from "../Images/Ellipse.png";
import LeftArrow from "../Images/LeftArrow.png";
import RightArrow from "../Images/RightArrow.png";
import uuid4 from "uuid4";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return {
      ...element,
      onClick: () => {
        setGoToSlide(index);
      },
    };
  });

  const mark_table = [];

  for (let i = 0; i < table.length; i++) {
    mark_table.push({
      key: uuid4(),
      content: (
        <img
          src={Ellipse}
          alt="circle"
          style={{ minHeight: 27, minWidth: 27, maxHeight: 27, maxWidth: 27 }}
        />
      ),
    });
  }

  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  const [circles] = useState(mark_table);

  useEffect(() => {
    const repeat = setInterval(() => {
      setGoToSlide(goToSlide + 1);
    }, 5000);
    return () => clearInterval(repeat);
  }, [goToSlide]);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div className="px-8" style={{overflow: "clip"}}>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setGoToSlide(goToSlide - 1);
          }}
        >
          <img src={LeftArrow} alt="left_arrow" />
        </button>
        <div
          style={{
            width: props.width,
            height: props.height,
            margin: props.margin,
          }}
        >
          <Carousel
            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showArrows}
            animationConfig={config.gentle}
          />
        </div>
        <button
          onClick={() => {
            setGoToSlide(goToSlide + 1);
          }}
        >
          <img src={RightArrow} alt="left_arrow" />
        </button>
      </div>
      <div style={{ width: "15vw", height: "27px", margin: "0 auto" }}>
        <Carousel
          slides={circles}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
}
