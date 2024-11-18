import React from 'react'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="px-8 md:px-28 py-10 bg-black">
        <div className='flex items-center justify-between text-white'>
        <h1 className="font-bold text-3xl text-white cursor-pointer"><Link activeClass="active "
              className=""
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}>Fazil.</Link></h1>
        <p className='text-end text-[12px]'>© Copyright 2024. <br />Created by Fazil Mohammed</p>
        </div>

    </footer>
  )
}

export default Footer