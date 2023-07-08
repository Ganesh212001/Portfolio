import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import Footer from '../components/Footer'
import TypeJS from '../components/TypeJS'
import './Home.css'
import About from '../pages/About'
import Skill from './Skill'

const Home = () => {
  return (
    <>
      <div className='text-white h-screen gap-8 flex flex-col justify-center back'>
        <div className="flex flex-col justify-normal items-start ml-11 back2">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-2">This is my personal portfolio website built with React.</p>
          <p className="text-lg mb-4">Feel free to explore my projects and learn more about me.</p> <br />
          <TypeJS/>
        </div>
      </div>
      <About/>
      <Projects/>
      <Skill />
      <Contact/>
      <Footer />
    </>
  )
}

export default Home