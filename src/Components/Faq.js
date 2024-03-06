import React from 'react'
// import questions from "../assets/Images/questions.png";
import Accordion from './Accordion';
import uuid4 from 'uuid4';

export default function Faq() {
  let faqs = [
    {
      title:"What are the dates for AlgoUtsav?",
      content:"AlgoUtsav will be held on 16th and 17th March, 2024."
    },
    {
      title:"Why should I participate in AlgoUtsav?",
      content:"You will get the opportunity to build a network with like-minded people and have the chance to win prizes and goodies."
    },
    {
      title:"How can I register for the contest?",
      content:"You can register for the contest by clicking on the register button on the website. You will be redirected to the Unstop registration page. Fill in the details, and you are good to go."
    },
    {
      title:"What is the mode of the event?",
      content:"The event is completely online for pan India students, however the event will be offline for NIT Rourkela students."
    },
    {
      title:"What is the participation fee?",
      content:"The contest is completely free and without monetary charges."
    },
    {
      title:"Who can participate?",
      content:"All School students, engineering students, MBA students, undergraduates, and postgraduates enrolled in any Indian institution are eligible to participate."
    }
  ];

  return (
    <div className="pt-2" id="faq">
      <div
        className="flex justify-center align-middle ml-[11%] sm:ml-0 w-4/5 sm:w-full my-4 sm:my-8 sm:mt-20 z-30"
      >
        <img
          src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361364/AlgoUtsav/Images/questions_jhjqsu.png"
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