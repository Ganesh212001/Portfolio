import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import BottomLine from "../components/atoms/BottomLine/index";
import { FaDownload } from "react-icons/fa";
import {Link} from "react-router-dom";
import resume from '../images/Resume.pdf'
import html from '../logo/frontend/html.png'
import css from '../logo/frontend/css3.png'
import javascript from '../logo/frontend/javascript.png'
import react from '../logo/frontend/react.png'
import node from '../logo/backend/node.png'
import express from '../logo/backend/express.png'
import python from '../logo/backend/python.png'
import mongo from '../logo/database/mongodb.png'
import img from '../assets/profile.png'


const About1 = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src= {img}
              alt="Ganesh Mahajan"
              className="p-12 w-96 h-full transform translate-y-[-12%]"
              title="Ganesh Mahajan"
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Ganesh Mahajan</h1>
            <div className="my-8 css">
              <TypeAnimation
                className="css text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-4 md:text-left"
                cursor={true}
                sequence={[
                  "A Mern-stack Developer",
                  2000,
                  "A Full-stack Developer",
                  2000,
                  "A Front-end Developer",
                  2000
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-70%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              As a MERN stack developer, I am committed to building high-quality
              web applications that meet the needs of my clients. With years of
              experience in full-stack web development, I specialize in using
              React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to
              create scalable and robust web applications.
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-125%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Ganesh Mahajan
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+91 9724158961
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                ganeshmahajan21062001@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>Surat,Gujarat,India
              </h2>
              <Link
                to= {resume}
                target="blank"
              >
                <div className="flex justify-center mt-8 md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>

              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <MySkill /> */}

      <div className="mt-[6.5rem]">
      <h3 className="text-4xl font-semibold drop-shadow-md text-center">
        Skills
      </h3>
      <BottomLine />
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="text-lg font-medium text-gray-900">
              Front-end Development
            </h4>
            <div className="container flex mt-4">
            <img className="flex-row w-12 h-12 mx-auto my-4" src={html} alt="Project 3" />
            <img className="flex-row w-8 h-min mx-auto my-4 ml-8" src={css} alt="Project 3" />
            <img className="flex-row w-20 h-12 mx-auto my-4" src={javascript} alt="Project 3" />
            <img className="flex-row w-10 h-auto mx-auto my-4" src={react} alt="Project 3" />
            </div>
            {/* <ul className="mt-4 text-gray-500">
              <li className="mt-2">
                HTML5, CSS3, JavaScript, React, Tailwind CSS
              </li>
            </ul> */}
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-2 sm:p-6">
            <h4 className="text-lg font-medium text-gray-900">
              Back-end Development
            </h4>
            <div className="container flex mt-4">
            <img className="flex-row w-20 h-14 mx-auto my-4" src={node} alt="Project 3" />
            <img className="flex-row w-28 h-20 mx-auto my-4 -mt-0 mr-3" src={express} alt="Project 3" />
            <img className="flex-row w-20 h-16 mx-auto my-4 space-y-1" src={python} alt="Project 3" />
            </div>
            {/* <ul className="mt-4 text-gray-500">
              <li className="mt-2">Node.js, Express.js, Python</li>
            </ul> */}
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="text-lg font-medium text-gray-900">
              Databases
            </h4>
            <div className="container flex mt-4">
            <img className="flex-row w-14 h-14 mx-auto my-4" src={mongo} alt="Project 3" />
            </div>
            {/* <ul className="mt-4 text-gray-500">
              <li className="mt-2">MongoDB</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>

      {/* <Education /> */}
    </div>
  );
};

export default About1;
