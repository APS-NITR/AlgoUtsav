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
          className="h-5 w-5 max-w-[20px] min-w-[20px] sm:h-7 sm:w-7 sm:max-w-[28px] sm:min-w-[28px]"
          src={Ellipse}
          alt="circle"
          // style={{ minHeight: 27, minWidth: 27, maxHeight: 27, maxWidth: 27 }}
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
    <div className="px-1 sm:px-4 lg:px-8" style={{ overflow: "clip" }}>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setGoToSlide(goToSlide - 1);
          }}
        >
          <img
          className="w-6 sm:w-7"
            src={LeftArrow}
            alt="left_arrow"
            style={{ zIndex: 5, position: "relative" }}
          />
        </button>
        <div
          className="h-[400px] sm:h-[420px]"
          style={{
            width: props.width,
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
          <img className="w-6 sm:w-7" src={RightArrow} alt="left_arrow" style={{ zIndex: 5, position: "relative" }}/>
        </button>
      </div>
      <div
        className="h-5 sm:h-7"
        style={{ width: "15vw", height: "28px", margin: "0 auto" }}
      >
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
