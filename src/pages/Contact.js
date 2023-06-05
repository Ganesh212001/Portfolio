import React from 'react';

function Contact() {
  return (
    <>
    <div className="bg-gray-100 h-screen flex gap-16 flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 ">Contact Me</h1>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap mb-4">
          <div className="w-full">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Enter Your Name" />
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Enter Your Mobile No." />
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Enter Your Email" />
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full">
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="5" placeholder="Enter your message here"></textarea>
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue" type="button">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default Contact;


