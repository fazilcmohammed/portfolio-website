import React from "react";
import heroimg from "../assets/images/hero_img.svg";
import { socialIcons } from "../assets/constant";


const HeroSection = () => {
  return (
    <section className="px-6 md:px-28 my-20">
      <div className="flex flex-col-reverse md:flex-row items-end gap-10">
        <div className="md:w-[50%]">
          <p className="text-[40px]">
            Hello I'am <b>Fazil.</b> <br />
            <b>Full Stack </b>
            <span className="text-outline font-black text-[42px] ">
              Developer
            </span>{" "}
            <br />
            {/* Based In <b>India</b> */}
          </p>
          <p className="text-zinc500 text-sm my-5">I'm Fazil Mohammed, a passionate Full Stack Developer dedicated to building dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I craft seamless user experiences and efficient, scalable solutions.</p>
          <div className="flex items-center text-4xl gap-5">
          {
            socialIcons.map((icon, index) => (
                <div key={index} className="w-16 h-16  border-2 flex items-center justify-center border-black rounded-md mt-8 hover:bg-black hover:text-white duration-300 cursor-pointer">
                    <a href={icon.link} target="_blank" rel="noopener noreferrer" ><icon.icon className="w-6"/></a>
                </div>
            ))
          }
          </div>
        </div>
        <div>
          <img src={heroimg} alt="" className="w-full md:w-[600px] z-10"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
