import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className='flex justify-end'>
        <div className="flex flex-col space-y-4 fixed mt-5">
            <Link
              className="inline-block mx-2"
              to="https://www.facebook.com/ganesh.mahajan.92"
              target="_blank"
              rel="noopener noreferrer"> 
              <div className="text-4xl text-blue-500 animate-bounce">
                <i className="bi bi-facebook"></i>
              </div>
            </Link>
            <Link
              className="inline-block mx-2"
              to="https://www.linkedin.com/in/ganesh-mahajan-8553b3224/"
              target="_blank"
              rel="noopener noreferrer"> 
              <div className="text-4xl text-blue-600 animate-bounce">
                <i className="bi bi-linkedin"></i>
              </div>
            </Link>
            <Link
              className="inline-block mx-2"
              to="https://github.com/Ganesh212001"
              target="_blank"
              rel="noopener noreferrer"> 
              <div className="text-4xl text-black animate-bounce">
                <i className="bi bi-github"></i>
              </div>
            </Link>
            <Link
              className="inline-block mx-2"
              to="https://www.instagram.com/ganesh.m_2106/"
              target="_blank"
              rel="noopener noreferrer"> 
              <div className="text-4xl text-pink-700 animate-bounce">
                <i className="bi bi-instagram"></i>
              </div>
            </Link>
          </div>
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