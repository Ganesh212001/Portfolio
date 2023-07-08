import React from 'react';
import { Link } from 'react-router-dom';
import food1 from '../images/food_1.png'
import dreamdoor from '../images/dreamdoor.png'
import todo from '../images/todo.png'
import BottomLine from "../components/atoms/BottomLine/index";

function Projects() {

  const ctext = 'Code'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-[#000b18] border-4 border-[#00E8F8] shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={food1} alt="Project 1" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#00E8F8]">Food Lab</h3>
                <p className="mt-2 text-[#00E8F8]">This Is Foodlab Webpage, it was Make In Only HTML5 And CSS3, Foodlab Is Fully Responsive Webpage, Foodlab Is My First Project In Web Development Journy.</p>
              </div>
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
          <div className="bg-[#000b18] border-4 border-[#00E8F8] shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={dreamdoor} alt="Project 2" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#00E8F8]">Dream Door</h3>
                <p className="mt-2 text-[#00E8F8]">DreamDoor Is Real-Estet Website,It Is My First MERN Project In My Web Development Journy, DreamDoor Is Completaly Responsive Project, And It's Work Verry Well </p>
              </div>
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
          <div className="bg-[#000b18] border-4 border-[#00E8F8] shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={todo} alt="Project 3" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#00E8F8]">Todo-App</h3>
                <p className="mt-2 text-[#00E8F8]">This Is Todo App It Was pure React App A to-do app, also known as a task manager or task list, This Is Fully Responsive Website You can use In Any Device</p>
              </div>
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
  </>
  );
}

export default Projects