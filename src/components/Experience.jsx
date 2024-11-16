import React from "react";
import { educations } from "../assets/constant";
import { IoMdBook } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";




const Experience = () => {
  return (
    <section className="px-6 md:px-28 py-40 bg-black">
      <div className="">
        <h1 className="text-[40px] text-center text-white">
          My <b>Education</b>
        </h1>
        <div>
          {educations.map((education, index) => (
            <div
              key={index}
              className=" flex items-start text-white hover:text-black hover:bg-white cursor-pointer ease-in-out duration-300 border-2 border-white my-10 rounded-md p-5"
            >
              <div className="flex flex-col text-xl gap-1">
              
              
              
              
              </div>
              <div className="">
                <h1 className="flex items-center gap-2 text-xl font-semibold my-1"><education.icon />{education.level}</h1>
                <h2 className="flex items-center gap-3 text-sm font-normal my-1"><IoMdBook />{education.subject}</h2>
                <h2 className="flex items-center gap-3 text-sm font-normal my-1"><FaUniversity />{education.university}</h2>
                <h2 className="flex items-center gap-3 text-sm font-normal my-1"><FaRegCalendarCheck />{education.year}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
