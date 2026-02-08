import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
const Header = () => {
  // abc
  return (

    <>
      <div
        className="min-w-full bg-green-800 py-2 px-0 md:px-30 lg:px-50 flex justify-between 
                text-[9px] md:text-[10px] lg:text-[15px]
                transition-[padding,font-size] duration-300 ease-in-out text-amber-50"
      >
        <div className="flex items-center gap-1 md:gap-4 xl:gap-4">
          <span className="flex items-center gap-1">
            <CiMail /> rpkk123@gamil.com
          </span>
          <span className="flex items-center gap-1">
            <IoCall /> +91 7319554070
          </span>
          <span className="flex items-center gap-1">
            <FaUserShield />
            Co-Ordination Login
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaLinkedinIn />
          </div>
          <div>
            <FaWhatsapp />
          </div>
 <button className="btn bg-amber-700 text-white border-0 h-7 shadow-md shadow-black/30 hover:shadow-lg">
  Login
</button>

        </div>
      </div>
      <div className="w-full text-center">
        <img src="topuponbanner.png" alt="Description" className="h-auto px-10 md:px-30 lg:px-50 transition-[padding,font-size] duration-300 ease-in-out"/>
      </div>

    </>
  );
};

export default Header;
