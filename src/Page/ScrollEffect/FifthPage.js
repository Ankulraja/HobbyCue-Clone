import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import CircularProgressBar from "./CircularProgressBar";
import { MdArrowRightAlt } from "react-icons/md";

const FifthPage = ({ isVisible  }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2, staggerChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 5 },
  };

  const item2Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 5 },
  };

  const item3Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 10 },
    transition: { duration: 5 },
  };

  const image1Variants = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 70 },
    transition: { duration: 2 },
  };

  const image2Variants = {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: -70 },
    transition: { duration: 2 },
  };

  const image3Variants = {
    hidden: { opacity: 0, y: -500  },
    visible: { opacity: 1, y: -200},
    transition: { duration: 2 },
  };
  const image4Variants = {
    hidden: { opacity: 0, y: 500},
    visible: { opacity: 1, y: 0},
    transition: { duration: 2 },
  };

  return (
    <div className="relative overflow-hidden w-full h-full flex flex-row max-md:flex-col-reverse">
      <motion.div
        className="relatives w-5/12 h-full max-md:w-full max-md:h-4/12 bg-[rgb(16,76,161)]"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="absolute  top-[25%] text-start text-white left-[23%] z-30"
          variants={item3Variants}
        >
          <p className="text-gray-300 text-lg">Text Headline</p>
          <h1 className="text-6xl">Text Headline</h1>
          <p className="text-gray-300 text-lg  text-end"> Footer Headline</p>
        </motion.div>
        <motion.div
          className="absolute bottom-[15%] pr-20 left-[5%] w-3/12"
          variants={itemVariants}
        >
          <h1 className="text-white text-5xl">ABC 567</h1>
          <p className="text-sm py-5 text-gray-400">
            We are the best AR development company in the world
          </p>
        </motion.div>
        <motion.div
          className="absolute bottom-5 w-4/12 left-[5%] flex text-gray-400 justify-between items-center"
          variants={itemVariants}
        >
          <button className="flex justify-center items-center gap-2">
            <p>View Case Study</p>
            <MdArrowRightAlt className="text-lg" />
          </button>
          <button>SKIP</button>
        </motion.div>
      </motion.div>

      {/* Right  */}
      <motion.div
        variants={item2Variants}
        className="w-80 z-10 h-80 bg-[rgb(16,76,161)] rounded-full absolute left-[30%] top-[10%]"
      >
        <CircularProgressBar page={540}/>
      </motion.div>
      
      
      <motion.div
        className="w-7/12  relativev h-full max-md:w-full max-md:h-8/12 bg-[rgb(43,205,221)]"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >


        <motion.div
          className="w-full  h-full ml-20 pr-5 flex"
          variants={itemVariants}
        >

            {/* First */}
          <div
            className="w-1/3 h-full flex flex-col justify-between  items-center"
           
          >
            <motion.img
             initial="hidden"
             animate={isVisible ? "visible" : "hidden"}
             variants={image2Variants}
             transition={{ duration: 2 }}
              className="w-10/12"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184522/UploadOnly/karavan-social-networking-app-screen_djfdmm.png"
            />
            <motion.img
             initial="hidden"
             animate={isVisible ? "visible" : "hidden"}
             variants={image1Variants}
             transition={{ duration: 2 }}
              className="w-10/12"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184527/UploadOnly/karavan_2_k8op6e.png"
            />
          </div>

          {/* Second */}
          <div
            className="w-1/3 h-full flex flex-col justify-between items-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={image2Variants}
            transition={{ duration: 2 }}
          >
           <motion.img
             initial="hidden"
             animate={isVisible ? "visible" : "hidden"}
             variants={image3Variants}
             transition={{ duration: 2 }}
              className="w-10/12"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184521/UploadOnly/social-networking-app-case-study_fsbwe1.png"
            />
            <motion.img
             initial="hidden"
             animate={isVisible ? "visible" : "hidden"}
             variants={image4Variants}
             transition={{ duration: 2 }}
              className="w-10/12"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184522/UploadOnly/karavan-social-networking-app-screen-2_twexlu.png"
            />
          </div>

          <div
            className="w-1/3 pr-5 h-full flex justify-center items-center"
          
          >
            <motion.img
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={image2Variants}
              transition={{ duration: 2 }}
              className="w-10/12"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184527/UploadOnly/developers-for-social-media-app_k8js9j.png"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FifthPage;
