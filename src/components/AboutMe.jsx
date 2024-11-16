import React from "react";
import aboutImg from '../assets/images/aboutme_img.svg'

const AboutMe = () => {
  return (
    <section className="px-10 md:px-28 my-40 ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div>
            <img src={aboutImg} alt="" className="w-[400px] z-10"/>
        </div>
        <div className="md:w-[50%] text-left">
          <h1 className="text-[40px] text-black">
            About <b>Me</b>
          </h1>
          <p className="text-zinc500 text-sm my-5">
          I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
          <br />
          <br />
          I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
          <br />
          <br />
          When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;