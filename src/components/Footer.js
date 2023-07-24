import React from "react";
// import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const year = new Date();

  return (
    <>
      <div className="main"></div>
      <div className="footer">
        <div className="bubbles">
      </div> 
      <div className="content">
        <footer className="w-full text-center p-6 bg-accent">
          <div className="flex items-center justify-center mb-6 space-x-12">
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
          <div className="w-full h-[2px] bg-[#00E8F8]"></div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8">
            <p>Ganesh Mahajan &copy; Copyright All Rights Reserved {year.getFullYear()}</p>
            <p>
              Developed by{" "}
              <Link
                to="https://linkedin.com/in/gilberthutapea"
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

export default Footer;