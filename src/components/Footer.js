import React from "react";
// import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Footer.css'
import { FiPhoneCall } from 'react-icons/fi'
import {MdEmail , MdLocationOn , MdDoubleArrow} from 'react-icons/md'

const Footer = () => {
  const year = new Date();

  return (
    <>
    <div className="w-full h-[1px] bg-[#00E8F8]"></div>
      <div className="footer">
        <div className="content">
          <footer className="w-full text-center p-6 bg-accent">
            <div className="flex flex-row gap-x-44 footer1">
            <div className="flex text-left flex-col text-white para1">
              <h1 className="text-[#00E8F8] text-2xl mb-4">Ganesh's Portfolio</h1>
              <span className="text-sm mb-4">Thank you for visiting my personal portfolio<br/> website. Connect with me over socials.</span>
              <span className="text-sm">Keep Rising 🚀. Connect with me over live chat!</span>
            </div>
            <div className="flex text-left flex-col para1">
              <h1 className="text-[#00E8F8] text-2xl mb-4 haed1">Quick Links</h1>
              <ul>
                <li className="flex flex-row text-[#00E8F8] gap-2 my-2">
                 <MdDoubleArrow/> <Link to='/' className="-mt-1"><span className="hover:text-[#00E8F8]">Home</span></Link>
                </li>
                <li className="flex flex-row text-[#00E8F8] gap-2 my-2">
                <MdDoubleArrow/> <Link to='/about' className="-mt-1"><span className="hover:text-[#00E8F8]">About</span></Link>
                </li>
                <li className="flex flex-row text-[#00E8F8] gap-2 my-2">
                <MdDoubleArrow/> <Link to='/skill' className="-mt-1"><span className="hover:text-[#00E8F8]">Skill</span></Link>
                </li>
                <li className="flex flex-row text-[#00E8F8] gap-2 my-2">
                <MdDoubleArrow/> <Link to='/projects' className="-mt-1"><span className="hover:text-[#00E8F8]">Projects</span></Link>
                </li>
                <li className="flex flex-row text-[#00E8F8] gap-2 my-2">
                <MdDoubleArrow/> <Link to='/contact' className="-mt-1"><span className="hover:text-[#00E8F8]">Contact</span></Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col text-[#00E8F8] text-left para1">
              <h1 className="text-2xl mb-4 haed1">Contact Info</h1>
              <div className="flex flex-row space-x-4 my-3">
                <FiPhoneCall/><span className="text-white -my-2">+91 9724158961</span>
              </div>
              <div className="flex flex-row space-x-4 text-[#00E8F8] my-3">
                <MdEmail/><span  className="text-white -mt-2">ganeshmahajan21062001@gmail.com</span>
              </div>
              <div className="flex flex-row space-x-4 text-[#00E8F8] my-3">
                <MdLocationOn className="text-[1.3rem]"/><span className="text-white -mt-1">Surat,Gujarat,India</span>
              </div>
            </div>   
            <div className="flex flex-col items-center justify-center text-center -mt-12 gap-y-3 sc1">
              <Link
                className="inline-block mx-2"
                to="https://www.facebook.com/ganesh.mahajan.92"
                target="_blank"
                rel="noopener noreferrer"> 
              <div className="sc">
                <i className="bi bi-facebook"></i>
              </div>
            </Link>
            <Link
              className="inline-block mx-2"
              to="https://www.linkedin.com/in/ganesh-mahajan-8553b3224/"
              target="_blank"
              rel="noopener noreferrer"> 
              <div className="sc">
                <i className="bi bi-linkedin"></i>
              </div>
            </Link>
            <Link
              className="inline-block mx-2"
              to="https://github.com/Ganesh212001"
              target="_blank"
              rel="noopener noreferrer"> 
              <div className="sc">
                <i className="bi bi-github"></i>
              </div>
            </Link>
            <Link
              className="inline-block mx-2"
              to="https://www.instagram.com/ganesh.m_2106/"
              target="_blank"
              rel="noopener noreferrer"> 
              <div className="sc">
                <i className="bi bi-instagram"></i>
              </div>
            </Link>
          </div>
          </div>
          <div className="w-full h-[1px] bg-[#00E8F8]"></div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 -mb-8">
            <p>Ganesh Mahajan &copy; Copyright All Rights Reserved {year.getFullYear()}</p>
            <p>
              Developed by{" "}
              <Link
                to="https://www.instagram.com/ganesh.m_2106/"
                className="text-primary hover:underline"
                target="blank">
                  Ganesh Mahajan
                </Link>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer