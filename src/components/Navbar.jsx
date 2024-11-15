import React, { useState } from 'react';
import { LuDownload } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <nav className="px-10 md:px-28 my-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Fazil.</h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-bold">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Contact Me</a></li>
        </ul>

        {/* Resume Button visible only on larger screens */}
        <div className="hidden lg:flex items-center gap-1 bg-black text-white rounded-md py-3 px-6 cursor-pointer hover:bg-secondary ease-in-out duration-300">
          <h3>Resume</h3>
          <LuDownload />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? <IoClose className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default on desktop) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-5 mt-5 transition-all ease-in-out duration-300">
          <ul className="flex flex-col items-center gap-5 font-bold">
            <li><a href="#">About Me</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact Me</a></li>
          </ul>

          {/* Resume Button inside mobile menu */}
          <div className="flex items-center gap-1 bg-black text-white rounded-md py-3 px-6 cursor-pointer hover:bg-secondary ease-in-out duration-300 mt-5">
            <h3>Resume</h3>
            <LuDownload />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
