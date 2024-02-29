import React from 'react'
import questions from "../assets/Images/questions.png";
import Accordion from './Accordion';
import uuid4 from 'uuid4';

export default function Faq() {
  let faqs = [
    {
      title:"Item 1",
      content:"content 1"
    },
    {
      title:"item 2",
      content:"content 2"
    },
    {
      title:"item 3",
      content:"content 3"
    },
    {
      title:"item 4",
      content:"content 4"
    }
  ];

  return (
    <div id="faq">
      <div
        className="my-4 sm:my-8 sm:mt-[-6em] z-30"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <img
          src={questions}
          alt="sponsor_heading"
          style={{ maxWidth: "100%", maxHeight: "58px" }} 
        />
      </div>
      <div className='flex flex-wrap justify-center align-middle'>
        {faqs.map((faq) => {
          return (
            <Accordion key={uuid4()} title={faq.title} content={faq.content} />
          );
        })}
      </div>

    </div>
  );
}