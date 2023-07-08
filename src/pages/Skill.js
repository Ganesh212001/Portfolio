import React from 'react'
import BottomLine from '../components/atoms/BottomLine'
import { FaHtml5 , FaCss3Alt , FaJsSquare , FaReact, FaFontAwesome, FaBootstrap, FaGitAlt,
         FaGithub, FaPython, FaNodeJs } from "react-icons/fa";
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
                    <span className='text-lg text-icon'>HTML5</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaCss3Alt className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon'>CSS3</span>
                  </div>
                </div>
                </div>
                <div className="flex space-x-20 section-two sm:mx-auto">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaJsSquare className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon'>JavaScript</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaReact className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon'>React</span>
                  </div>
                </div>
                </div>
            </div>
            <div className='flex flex-row mt-16 justify-center space-x-20 section-div'>
              <div className="flex space-x-20 section-three">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    < FaFontAwesome className='w-24 h-24 mx-auto icon'/>
                    <span className='text-lg text-icon'>Font-Awesome</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaBootstrap className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon'>Bootstrap</span>
                  </div>
                </div>
                </div>
                <div className="flex space-x-20 section-four">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaGitAlt className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon'>Git VCS</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaGithub className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon'>GitHub</span>
                  </div>
                </div>
                </div>
            </div>
            <div className='flex flex-row mt-16 justify-center space-x-20 section-div'>
              <div className="flex space-x-20 section-five">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    < FaPython className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon'>Python</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <FaNodeJs className='w-24 h-24 icon'/>
                    <span className='text-lg text-icon'>Node.JS</span>
                  </div>
                </div>
                </div>
                <div className="flex space-x-20 section-six">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="90" height="90" viewBox="0 0 50 50" className='icon'>
                      <path fill="#00E8F8" d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                    </svg>
                    <span className='text-lg text-icon'>ExpressJS</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <svg  xmlns="http://www.w3.org/2000/svg" width='90' height='90'  viewBox="0 0 24 24" className='icon'><path fill="#00E8F8" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
                    <span className='text-lg text-icon'>MongoDB</span>
                  </div>
                </div>
                </div>
            </div>
            <div className='flex flex-row mt-16 justify-center space-x-20 section-div'>
              <div className="flex space-x-20 section-seven">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="90" height="90" viewBox="0 0 48 48" className='icon mx-auto'>
                      <path fill="#00E8F8" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                    </svg>
                    <span className='text-lg text-icon'>TailwindCSS</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width='90' height='90' className='icon'>
                      <path fill="#00E8F8" d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
                    <span className='text-lg text-icon'>Vercel</span>
                  </div>
                </div>
                </div>
                <div className="flex space-x-20 section-eight">
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="90" height="90" className='icon'><path fill="#00E8F8"  d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z"/></svg>
                    <span className='text-lg text-icon'>Netlify</span>
                  </div>
                </div>
                <div className='flex w-40 h-40 rounded-2xl icon-section'>
                  <div className="flex flex-col my-auto mx-auto">
                  < FaHtml5 className='w-24 h-24 icon' />
                    <span className='text-lg text-icon'>Blank</span>
                  </div>
                </div>
              </div>
              </div>
        </div>
    </>
  )
}

export default Skill
