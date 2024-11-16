import React from "react";
import { socialIcons } from "../assets/constant";

const Contact = () => {
  return (
    <section className="px-10 md:px-28 my-20">
      <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
        <div className="flex flex-col gap-3 md:w-[60%]">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-black p-3 outline-none rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-black p-3 outline-none rounded-md"
          />
          <input
            type="text"
            placeholder="Your Website (If exists)"
            className="border-2 border-black p-3 outline-none rounded-md"
          />
          <textarea
            name="message"
            id=""
            className="border-2 border-black p-3 outline-none rounded-md"
            placeholder="How can I help?"
          ></textarea>
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 md:items-center">
            <button className=" bg-black text-white rounded-md py-3 px-6 w-full md:  cursor-pointer hover:bg-secondary ease-in-out duration-300">
              Get In Touch
            </button>
            <div className="flex items-center justify-center  text-4xl gap-5">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 border-2 border-black rounded-md items-center justify-center flex hover:bg-black hover:text-white duration-300"
                >
                  <span className="">
                    <icon.icon className="w-5" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-[40px]">
            <b>Let's </b>
            <span className="text-outline font-black text-[42px] ">talk</span>
            <b>
              {" "}
              for <br /> something special
            </b>
          </p>
          <p className="text-zinc500 text-sm my-5">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
