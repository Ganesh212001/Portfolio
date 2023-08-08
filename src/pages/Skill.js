import React from 'react'
import BottomLine from '../components/atoms/BottomLine'
import { FaHtml5 , FaCss3Alt , FaJsSquare , FaReact, FaFontAwesome, FaBootstrap, FaGitAlt,
         FaGithub, FaPython, FaNodeJs } from "react-icons/fa";
import { SiPostman , SiExpress , SiMongodb , SiTailwindcss , SiVercel , SiNetlify } from 'react-icons/si'
import './Skill.css'

const Skill = () => {
  return (
    <>
        <div className=' bg-[#000b18] py-16'>
          <div className='pb-16'>
            <h1 className="text-4xl font-semibold drop-shadow-md text-center">
                <span className="text-primary text-[#00E8F8]">Skills</span>
            </h1>
            <BottomLine />
            </div>
            <div className='flex flex-row mt-16 justify-center space-x-20 section-div'>
              <div className="flex space-x-20 section-one">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaHtml5 className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>HTML5</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaCss3Alt className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>CSS3</span>
                  </div>
                </div>
                </div>
                <div className="flex space-x-20 section-two sm:mx-auto">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaJsSquare className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>JavaScript</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaReact className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>React</span>
                  </div>
                </div>
                </div>
            </div>
            <div className='flex flex-row mt-16 justify-center space-x-20 section-div'>
              <div className="flex space-x-20 section-three">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    < FaFontAwesome className='w-24 h-24 mx-auto icon'/>
                    <span className='text-lg text-icon mx-auto'>Font-Awesome</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaBootstrap className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>Bootstrap</span>
                  </div>
                </div>
                </div>
                <div className="flex space-x-20 section-four">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaGitAlt className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>Git VCS</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaGithub className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>GitHub</span>
                  </div>
                </div>
                </div>
            </div>
            <div className='flex flex-row mt-16 justify-center space-x-20 section-div'>
              <div className="flex space-x-20 section-five">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    < FaPython className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>Python</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaNodeJs className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>Node.JS</span>
                  </div>
                </div>
                </div>
                <div className="flex space-x-20 section-six">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <SiExpress className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>ExpressJS</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                   <SiMongodb className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>MongoDB</span>
                  </div>
                </div>
                </div>
            </div>
            <div className='flex flex-row mt-16 justify-center space-x-20 section-div'>
              <div className="flex space-x-20 section-seven">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <SiTailwindcss className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>TailwindCSS</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <SiVercel className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>Vercel</span>
                  </div>
                </div>
                </div>
                <div className="flex space-x-20 section-eight">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <SiNetlify className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon mx-auto'>Netlify</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    < SiPostman className='w-20 h-20 icon' />
                    <span className='text-lg text-icon mx-auto'>Postman</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Skill
