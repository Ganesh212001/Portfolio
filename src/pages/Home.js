import React from 'react'
// import About from '../pages/About1'
import Projects from './Projects'
import Contact from './Contact'
import Footer from '../components/Footer'
import TypeJS from '../components/TypeJS'
import resume from '../images/Resume.pdf'
// import BackgroundVideo from '../components/Background';
import './Home.css'
import { Link } from 'react-router-dom'
import About from '../pages/About'

const Home = () => {
  return (
    <>
      <div className='text-black h-screen gap-8 flex flex-col justify-center home relative back'>
        {/* <BackgroundVideo/> */}
        <div className="flex flex-col justify-normal items-center">
        
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-2">This is my personal portfolio website built with React.</p>
          <p className="text-lg mb-4">Feel free to explore my projects and learn more about me.</p> <br />
          <TypeJS/>
          <Link to={resume} download>
          <button className="backt px-4 flex gap-2 items-center py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mt-10 border-2">
          Download Resume
          </button>
          </Link>  
        </div>
      </div>
      <About/>
      <Projects/>
      <Contact/>
      <Footer />
    </>
  )
}

export default Home