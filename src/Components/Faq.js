import React from 'react'
// import questions from "../assets/Images/questions.png";
import Accordion from './Accordion';
import uuid4 from 'uuid4';

export default function Faq() {
  let faqs = [
    {
      title:"What is AlgoUtsav?",
      content:"It is a ICPC-style event designed to test your abilities and solve a range of competitive programming problems. In addition to the contest, there will be guest lectures, fun events, and giveaways."
    },
    {
      title:"What are the dates for AlgoUtsav?",
      content:"AlgoUtsav will be held on 16th and 17th of march 2024."
    },
    {
      title:"Why should I participate in AlgoUtsav?",
      content:"You will get the opportunity to build a network with like-minded people and have the chance to win prizes and goodies."
    },
    {
      title:"How can I register for the contest?",
      content:"You can register for the contest by clicking on the register button on the website. You will be redirected to the registration page. Fill in the details, and you are good to go."
    },
    {
      title:"What is the participation fee?",
      content:"The contest is completely free and without monetary charges; it only requires your sharp mind and enthusiasm."
    },
    {
      title:"Who can participate?",
      content:"It is open to Indian institutions."
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