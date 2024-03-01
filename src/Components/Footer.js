import React from 'react'
import { BsFillThreadsFill } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedin, FaYoutube  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
function Footer() {
  return (
    <footer className="footer text-center py-20 mt-40">
      <div className="container mx-auto flex flex-wrap items-center justify-around">
        {/* Left side: Contact Us */}
        <div className="text-white">
          <h3 className="text-base  text-yellow-400 font-pusab mb-2">Contact Us</h3>
          <div className="flex flex-col">
            <div className="flex mb-1">
              <span className="text-base"><IoIosMail size='30px'/></span>
              <a href='mailto:apsociety.nitr@gmail.com' className="text-[20px] hover:underline ml-2">apsociety.nitr@gmail.com</a>
            </div>
          </div>
        </div>
        {/* Right side: Social Links */}
        <div className="text-white pt-4 sm:p-0">
          <h3 className="text-base  text-yellow-400 font-pusab mb-2">Follow Us</h3>
          <div className="flex">
            <a href="https://www.threads.net/@aps.nitr" className=" hover:text-gray-400 text-white mr-4">
              <BsFillThreadsFill size='30px'/>
            </a>
            <a href="https://twitter.com/ApsocietyNitr" className="hover:text-gray-400 text-white mr-4">
              <FaSquareXTwitter size='30px'/>
            </a>
            <a href="https://www.instagram.com/aps.nitr/" className="hover:text-gray-400 text-white mr-4">
              <FaInstagramSquare size='30px'/>
            </a>
            <a href="https://www.linkedin.com/company/aps-nitr/mycompany/" className="hover:text-gray-400 mr-4 text-white">
              <FaLinkedin size='30px'/>
            </a>
            <a href="https://www.youtube.com/@APSNITR" className="hover:text-gray-400 text-white">
              <FaYoutube size='35px'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer