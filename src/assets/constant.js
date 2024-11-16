import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";

import proj1 from '../assets/images/proj1.png'
import proj2 from '../assets/images/proj2.png'
import proj3 from '../assets/images/proj3.png'

import { PiStudent } from "react-icons/pi";


export const socialIcons = [
    {
        id:1,
        icon: FaFacebook,
        link: 'https://www.facebook.com/profile.php?id=61553179492452'
    },
    {
        id:2,
        icon: FaInstagram,
        link: 'https://www.instagram.com/faaz.il_/'
    },
    {
        id:3,
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/mohammedfazilc/'
    },
    {
        id:4,
        icon: FaGithub,
        link: 'https://github.com/fazilcmohammed'
    },
]

export const skillIcons = [
    {
        id: 1,
        icon: IoLogoHtml5,
        title: 'HTML'
    },
    {
        id: 2,
        icon: IoLogoCss3,
        title: 'CSS'
    },
    {
        id: 3,
        icon: IoLogoJavascript,
        title: 'Javascript'
    },
    {
        id: 4,
        icon: FaReact,
        title: 'React'
    },
    {
        id: 5,
        icon: RiTailwindCssFill,
        title: 'Tailwind'
    },
    {
        id: 6,
        icon: SiVite,
        title: 'Vite'
    },
    {
        id: 7,
        icon: FaPython,
        title: 'Python'
    },
    {
        id: 8,
        icon: SiDjango,
        title: 'Django'
    },
    {
        id: 9,
        icon: BiLogoPostgresql,
        title: 'PostgreSql'
    },
    {
        id: 10,
        icon: FaGitAlt,
        title: 'Git'
    },
]

export const projects = [
    {
      image: proj1,
      title: 'Luxury Hotel Landing Page',
      description: 'Brief description of the project.',
      link: 'https://luxuryhotelsite.netlify.app/',
    },
    {
      image: proj2,
      title: 'E-Sheba Medical Website',
      description: 'Brief description of the project.',
      link: 'https://eshebamedical.netlify.app/',
    },
    {
        image: proj3,
        title: 'Skiline Education Landing Page',
        description: 'Brief description of the project.',
        link: 'https://skilineeducation.netlify.app/',
      },
    // Add more projects as needed
  ];


export const educations = [
    {
        icon: PiStudent,
        level: 'Degree',
        subject: 'Bachelor of Computer Application',
        year: '2022-2025',
        university: 'Mysore University'
    },
    {
        icon: PiStudent,
        level: 'Plus Two',
        subject: 'Science',
        year: 2019,
        university: 'Rahmath English High School, Thrissur'
    },
    {
        icon: PiStudent,
        level: 'SSLC',
        subject: 'CBSE',
        year: 2017,
        university: 'KEMS Manjeri, Malappuram'
    }
]