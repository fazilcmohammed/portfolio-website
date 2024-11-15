import React from 'react';
import { skillIcons } from '../assets/constant';

const Skills = () => {
  return (
    <section className='px-28 my-40'>
        <div>
            <h1 className='text-[40px] text-center'>My <b>Skills</b></h1>
            <div className='grid grid-cols-5 justify-center items-center gap-10 my-20'>
                {
                    skillIcons.map((icon, index) => (
                        <div key={index} className='flex flex-col items-center justify-center border-black rounded-md border-2 p-5'>
                            <span className='p-0'><icon.icon className=' w-10 h-10'/></span>
                            <h3 >{icon.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills