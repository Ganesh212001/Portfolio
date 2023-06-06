import React from 'react';
import { motion } from 'framer-motion';
import BottomLine from "../components/atoms/BottomLine/index";

const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen -mt-10">
       <h1 className="text-4xl font-semibold drop-shadow-md text-center">
           
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}>Contact <span className="text-primary">Us</span>
          </motion.div>
          </h1>
          <BottomLine />
        <form className='w-96'>
          <div className="mb-4 mt-14 space-y-4">
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              type="text"
              id="name"
              name="name"
              placeholder='Name'
            />
            </motion.div>
          </div>
          <div className="mb-4">
          <motion.div className='direction-reverse'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              type="text"
              id="mobile"
              name="mobile"
              placeholder='Mobile No.'
            />
            </motion.div>
          </div>
          <div className="mb-4">
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <input
              className="w-full px-4 py-2 border rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder='Email'
            />
            </motion.div>
          </div>
          <div className="mb-4">
          <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <textarea
              className="w-full px-4 py-2 border rounded-lg"
              id="message"
              name="message"
              rows="2"
              placeholder='Message'
            ></textarea>
            </motion.div>
          </div><br />
          <div className="flex flex-wrap mb-4">
             <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}>
                <button className="primary-button mx-auto">
                  <span>Submit</span>
                </button>
              </motion.div>
             </div>
           </div>
        </form>

    </div>
  );
};

export default Contact;