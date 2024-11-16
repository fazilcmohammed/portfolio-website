import React from 'react';
import { skillIcons } from '../assets/constant';

const Skills = () => {
  return (
    <section className='px-6 md:px-28 my-40' id='skills'>
        <div>
            <h1 className='text-[40px] text-center'>My <b>Skills</b></h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-5 my-20'>
                {
                    skillIcons.map((icon, index) => (
                        <div key={index} className='flex flex-col items-center justify-center border-black rounded-md border-2 w-36 h-36 hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer'>
                            <span className='m-0'><icon.icon className='w-10 h-10'/></span>
                            <h3 className='text-md font-medium mt-2'>{icon.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  );
}

export default Skills;
