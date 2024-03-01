import React from 'react'
import questions from "../assets/Images/questions.png";
import Accordion from './Accordion';
import uuid4 from 'uuid4';

export default function Faq() {
  let faqs = [
    {
      title:"Item 1",
      content:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title:"item 2",
      content:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title:"item 3",
      content:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title:"item 4",
      content:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <div className="pt-2" id="faq">
      <div
        className="flex justify-center align-middle ml-14 sm:ml-0 w-4/5 sm:w-full my-4 sm:my-8 sm:mt-20 z-30"
      >
        <img
          src={questions}
          alt="sponsor_heading"
          style={{ maxWidth: "100%", maxHeight: "58px" }} 
        />
      </div>
      <div className='flex flex-wrap justify-center gap-6 align-middle'>
        {faqs.map((faq) => {
          return (
            <Accordion key={uuid4()} title={faq.title} content={faq.content} />
          );
        })}
      </div>

    </div>
  );
}