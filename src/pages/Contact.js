import { useState } from "react";
import { motion } from 'framer-motion';
import BottomLine from "../components/atoms/BottomLine/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  
    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
  
    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Sending...");
      let response = await fetch("portfolio-gri1-git-main-ganesh212001.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      
       if (result.code === 200) {
        toast.success('Message Sent SuccessFully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } else {
        toast.error('Sending Error, Please Try Again', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          }); 
      }
    };

  return (
    <>
    <ToastContainer />
    <div className="flex justify-center flex-col items-center h-screen -mt-10 bg-[#000b18]">
       <h1 className="text-4xl font-semibold drop-shadow-md text-center text-[#00E8F8]">      
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}>Contact <span className="text-primary">Me</span>
          </motion.div>
          </h1>
          <BottomLine />
        <form onSubmit={handleSubmit} className='w-96'>
          <div className="mb-4 mt-14 space-y-4">
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <input value={formDetails.firstName}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18] text-[#00E8F8]"
              required='true'
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              autoCorrect="off"
              placeholder='First Name'
              onChange={(e) => onFormUpdate('firstName', e.target.value)}
            />
            </motion.div>
          </div>
          <div className="mb-4">
          <motion.div className='direction-reverse'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5 }}>
          <input value={formDetails.lastName}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18] text-[#00E8F8]"
              required='true'
              type="text"
              id="mobile"
              name="mobile"
              autoComplete="off"
              autoCorrect="off"
              placeholder='Last Name'
              onChange={(e) => onFormUpdate('lastName', e.target.value)}
            />
            </motion.div>
          </div>
          <div className="mb-4">
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <input value={formDetails.email}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18] text-[#00E8F8]"
              required='true'
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              autoCorrect="off"
              placeholder='Email'
              onChange={(e) => onFormUpdate('email', e.target.value)}
            />
            </motion.div>
          </div>
          <div className="mb-4">
          <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <input value={formDetails.phone}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18] text-[#00E8F8]"
              required='true'
              id="phone"
              name="phone"
              autoComplete="off"
              autoCorrect="off"
              placeholder='Phone No.'
              onChange={(e) => onFormUpdate('phone', e.target.value)}
            ></input>
            </motion.div>
          </div><br />
          <div className="mb-4">
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}>
            <textarea value={formDetails.message}
              className="w-full px-4 py-2 border border-[#00E8F8] rounded-lg bg-[#000b18] text-[#00E8F8]"
              required='true'
              id="message"
              name="message"
              autoComplete="off"
              autoCorrect="off"
              placeholder='Write Your Message Here...'
              onChange={(e) => onFormUpdate('message', e.target.value)}
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
                  <span>{buttonText}</span>  
                </button>
              </motion.div>
            </div>
           </div>
        </form>
    </div>
    </>
  );
};

export default Contact