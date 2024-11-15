import React from "react";
import heroimg from "../assets/images/hero_img.svg";
import { socialIcons } from "../assets/constant";


const HeroSection = () => {
  return (
    <section className="px-10 md:px-28 my-20">
      <div className="flex items-end">
        <div className="w-[50%]">
          <p className="text-[40px]">
            Hello I'am <b>Fazil.</b> <br />
            <b>Full Stack </b>
            <span className="text-outline font-black text-[42px] ">
              Developer
            </span>{" "}
            <br />
            Based In <b>India</b>
          </p>
          <p className="text-zinc500 text-sm my-5">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
          <div className="flex items-center text-4xl gap-5">
          {
            socialIcons.map((icon, index) => (
                <div key={index} className="px-4 py-2 border-2 border-black rounded-md mt-8 hover:bg-black hover:text-white duration-300">
                    <span className=""><icon.icon className="w-6"/></span>
                </div>
            ))
          }
          </div>
        </div>
        <div>
          <img src={heroimg} alt="" className="w-[600px] z-10"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
