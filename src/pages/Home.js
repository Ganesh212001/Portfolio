import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import Footer from '../components/Footer'
import './Home.css'
import About from '../pages/About'
import Skill from './Skill'
import Gif from '../images/drinkingWater.gif'


const Home = () => {
  return (
    <>
      <div className='text-white h-screen flex flex-col justify-center items-center back'>
        <div className="flex flex-col justify-center items-center back2">
          <span className="spantwo text-[5rem] hover:animate-waving-hand mb-14">Hello,</span>
          <div className='flex'>
            <span className='span text-[8rem] font-bold'>I</span>
            <span className='span text-[8rem] font-bold'>'</span>
            <span className='span text-[8rem] font-bold'>m</span>
            <span className='text-[11rem] font-bold -mt-11 ml-8 text-[#00E8F8] spanone'>G</span>
            <span className='span text-[8rem] font-bold'>a</span>
            <span className='span text-[8rem] font-bold'>n</span>
            <span className='span text-[8rem] font-bold'>e</span>
            <span className='span text-[8rem] font-bold'>s</span>
            <span className='span text-[8rem] font-bold'>h</span>
            <span className='span text-[8rem] font-bold ml-4'>!</span>
            <img src={Gif} alt="" className='h-[10rem] -mt-2 -ml-4 gif'/>
          </div>
          <p className='text-[2rem] mt-10 spanthree'>Welcome to my <span className='text-[#00E8F8]'>personal</span> portfolio</p>
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