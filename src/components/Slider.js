import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import html from '../assets/html.png';
import css3 from '../assets/css3.jpg';
import javascript from '../assets/Javascript.jpg';
import python from '../assets/python.png';
import node from '../assets/node js.png';
import express from '../assets/express js.png';
import react from '../assets/react js.png';
import mongodb from '../assets/mongodb.png';
import git from '../assets/git.jpg';
import github from '../assets/gitHub.png';
import tailwindcss from '../assets/tailwindcss.jpg';

const Slider = () => {
  return (
    <div className="max-w-full mx-auto h-screen border-4 mr-10 ml-10  sm:(min-width: 576px) bg-red">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={1500}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={html} alt="html" className='h-screen'/>
        </div>
        <div>
          <img src={css3} alt="css3" className='h-screen'/>
        </div>
        <div>
          <img src={tailwindcss} alt="tailwindcss" className='h-screen'/>
        </div>
        <div>
          <img src={javascript} alt="javascript" className='h-screen'/>
        </div>
        <div>
          <img src={python} alt="python" className='h-screen'/>
        </div>
        <div>
          <img src={node} alt="node js" className='h-screen'/>
        </div>
        <div>
          <img src={express} alt="express" className='h-screen'/>
        </div>
        <div>
          <img src={mongodb} alt="react" className='h-screen'/>
        </div>
        <div>
          <img src={react} alt="mongodb" className='h-screen'/>
        </div>
        <div>
          <img src={git} alt="git" className='h-screen'/>
        </div>
        <div>
          <img src={github} alt="github" className='h-screen'/>
        </div>
      </Carousel>
    </div>


  )
}

export default Slider;
