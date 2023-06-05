import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6 space-x-12">
          <Link
            className="inline-block mx-2"
            to="https://www.facebook.com/ganesh.mahajan.92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-blue-600" />
          </Link>
          <Link
            className="inline-block mx-2"
            to="https://www.linkedin.com/in/ganesh-mahajan-8553b3224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </Link>
          <Link
            className="inline-block mx-2"
            to="https://github.com/Ganesh212001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </Link>
          <Link
            className="inline-block mx-2"
            to="https://www.instagram.com/ganesh.m_2106/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </Link>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://linkedin.com/in/gilberthutapea"
              className="text-primary hover:underline"
              target="blank"
            >
              Ganesh Mahajan
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
