import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import BottomLine from "../components/atoms/BottomLine/index";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from "../images/Resume.pdf";
import img from "../assets/profile.png";

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
              src={img}
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
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              Ganesh Mahajan
            </h1>
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
                  2000,
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
                <span className="mr-2 text-primary">Phone : </span>+91
                9724158961
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                ganeshmahajan21062001@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>
                Surat,Gujarat,India
              </h2>
              <Link to={resume} target="blank">
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
    </div>
  );
};

export default About1;
