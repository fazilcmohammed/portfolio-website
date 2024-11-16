import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Skills/>
     <Experience/>
     <AboutMe/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
