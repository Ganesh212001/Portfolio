import React from "react";
import profilePic from "../images/profile.jpg";
// import Footer from "../components/Footer";

const About1 = () => {
  return (
    <>
    <div className="bg-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Me
          </h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A little bit About Myself
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I'm a web developer with a passion for creating beautiful, responsive
            websites and web applications. With several month's of experience
            under my belt, I have developed a strong understanding of HTML,
            CSS, JavaScript, and various web development frameworks.
          </p>
        </div>

        <div className="mt-10">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 mt-20">
                Personal Information
              </h3>
              <div className="mt-16">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Ganesh Mahajan
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Date Of Birth
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      21/06/2001
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Phone
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      (+91) 9724158961
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      github
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                    https://github.com/Ganesh212001
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Surat,Gujarat(India)
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Freelance
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Available
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Linkedin
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Ganesh Mahajan
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Email
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      ganeshmahajan21062001@gmail.com
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile Picture
              </h3>
          <div className="mt-5">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Skills
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="text-lg font-medium text-gray-900">
              Front-end Development
            </h4>
            <ul className="mt-4 text-gray-500">
              <li className="mt-2">
                HTML5, CSS3, JavaScript, React, Tailwind CSS
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="text-lg font-medium text-gray-900">
              Back-end Development
            </h4>
            <ul className="mt-4 text-gray-500">
              <li className="mt-2">Node.js, Express.js, Python</li>
            </ul>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="text-lg font-medium text-gray-900">
              Databases
            </h4>
            <ul className="mt-4 text-gray-500">
              <li className="mt-2">MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <Footer/> */}

</>
);
}
export default About1
