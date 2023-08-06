import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'
import food1 from '../images/food_1.png'
import dreamdoor from '../images/dreamdoor.png'
import todo from '../images/todo.png'
import BottomLine from "../components/atoms/BottomLine/index";

function Projects() {

  const ctext = 'Github'
  const btext = 'Preview'

  return (
  <>
     <div className="bg-[#000b18] min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#00E8F8]">
        <div className="text-center">
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            My<span className="text-primary"> Projects</span>
          </h1>
          <BottomLine />
        </div>
        <div className="container">
            <div className="card bg-[#000b18] border-4 border-[#00E8F8]" style={{clr: '#009688'}}>
                <div className="img-box">
                    <img src={food1} alt='FoodLab'/>
                </div>
                <div className="content">
                    <h2>Food Lab</h2>
                    <p>
                        This Is Foodlab Webpage, it was Make In Only HTML5 And CSS3, Foodlab Is Fully Responsive Webpage, Foodlab Is My First Project in Web Development.
                    </p>
                    <div className='flex flex-row justify-around mb-5'>
                <Link target='blank' to="https://github.com/Ganesh212001/FoodLab.github.io">
                  <button className="primary-button mx-auto">
                    <span>{ctext}</span>
                  </button>
                </Link>
                <Link target='blank' to="https://foodlabdemoproject.netlify.app/">
                  <button className="primary-button mx-auto">
                    <span>{btext}</span>
                  </button>
                </Link>
              </div>
                </div>
            </div>
            <div className="card bg-[#000b18] border-4 border-[#00E8F8]" style={{clr: "#FF3E7F"}}>
                <div className="img-box">
                    <img src={dreamdoor} alt='DramDoor'/>
                </div>
                <div className="content">
                    <h2>DreamDoor</h2>
                    <p>
                        DreamDoor Is Real-Estet Website,It Is My First MERN Project In My Web Development Journy, DreamDoor Is Completaly Responsive Project, And It's Work Verry Well
                    </p>
                    <div className='flex flex-row justify-around mb-5'>
                <Link target='blank' to="https://github.com/Ganesh212001/DreamDoor">
                  <button className="primary-button mx-auto">
                    <span>{ctext}</span>
                  </button>
                </Link>
                <Link to="https://404-not-found-one-ashen.vercel.app/">
                  <button className="primary-button mx-auto">
                    <span>{btext}</span>
                  </button>
                </Link>
              </div>
                </div>
            </div>
            <div className="card bg-[#000b18] border-4 border-[#00E8F8]" style={{clr: "#03A9F4"}}>
                <div className="img-box">
                    <img src={todo}  alt='Todo-App'/>
                        
                </div>
                <div className="content">
                    <h2>Todo-App</h2>
                    <p>
                        This Is Todo App It Was pure React App A to-do app, also known as a task manager or task list, This Is Fully Responsive Website You can use In Any Device
                    </p>
                    <div className='flex flex-row justify-around mb-5'>
                <Link target='blank' to="https://github.com/Ganesh212001/Todo_App">
                  <button className="primary-button mx-auto">
                    <span>{ctext}</span>
                  </button>
                </Link>
                <Link target='blank' to="https://todo-app-git-master-ganesh212001.vercel.app/">
                  <button className="primary-button mx-auto">
                    <span>{btext}</span>
                  </button>
                </Link>
              </div>
                </div>
            </div>
        </div>
      </div>
    </div> 
  </>
  );
}

export default Projects