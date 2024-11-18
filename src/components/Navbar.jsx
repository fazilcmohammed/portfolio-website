import React, { useState } from "react";
import { LuDownload } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import resume from '../assets/Fazil Mohammed Resume.pdf'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 px-6 md:px-28 py-3">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl cursor-pointer">
          <Link
            activeClass="active "
            className=""
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Fazil.
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-bold">
          <li className="cursor-pointer">
            <Link
              activeClass="active "
              className=""
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              activeClass="active "
              className=""
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              About Me
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              activeClass="active "
              className=""
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              activeClass="active "
              className=""
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Resume Button visible only on larger screens */}
        <a
          href={resume}
          download
          className="hidden lg:flex items-center gap-1 bg-black text-white rounded-md py-3 px-6 cursor-pointer hover:bg-secondary ease-in-out duration-300"
        >
          <h3>Resume</h3>
          <LuDownload />
        </a>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default on desktop) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center gap-5 p-5 z-50 shadow-lg transition-all ease-in-out duration-300">
          <ul className="flex flex-col items-center gap-5 font-bold">
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
            </li>

            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </Link>
            </li>
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
};

export default Navbar;
