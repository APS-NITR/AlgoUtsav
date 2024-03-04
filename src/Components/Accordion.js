import React, {useState} from 'react'
import { TECollapse } from "tw-elements-react";

function Accordion({key,title, content}) {
    const [show, setShow] = useState({
        collapse1: false,
        collapse2: false,
        collapse3: false,
      });
    
      const toggleShow = (value) => {
        setShow({ ...show, ...value });
      };
  return (
    <div className="footer rounded-lg border w-3/4" key={key}>
          <h2 className="accordion-header mb-0">
            <button
              className={`${
                show.collapse3
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-[12px] sm:text-sm text-yellow-400 font-pusab transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
              type="button"
              onClick={() => toggleShow({ ...show, collapse3: !show.collapse3 })}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {title}
              <span
                className={`${
                  show.collapse3
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse show={show.collapse3} className="!mt-0 !shadow-none text-white">
            <div className="px-5 py-4">
              {content}
            </div>
          </TECollapse>
        </div>
  )
}

export default Accordion
