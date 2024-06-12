import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import CircularProgressBar from "./CircularProgressBar";
import { MdArrowRightAlt } from "react-icons/md";

const FourthPage = ({ isVisible }) => {
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
    visible: { opacity: 1, x: 0 },
    transition: { duration: 5 },
  };

  const image1Variants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 170 },
    transition: { duration: 2 },
  };

  const image2Variants = {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: -100 },
    transition: { duration: 2 },
  };

  const image3Variants = {
    hidden: { opacity: 0, y: -100, x: 20 },
    visible: { opacity: 1, y: 0, x: 0 },
    transition: { duration: 2 },
  };

  const progressVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 2 },
  };

  return (
    <div className="relative overflow-y-hidden w-full h-full flex flex-row max-md:flex-col-reverse">
      <motion.div
        className="relatives w-5/12 h-full max-md:w-full max-md:h-4/12 bg-[rgb(21,38,60)]"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="absolute  top-[25%] text-start text-white left-[23%] z-30"
          variants={item3Variants}
        >
          <p className="text-gray-300 text-lg">Redefining</p>
          <h1 className="text-6xl">UX Strategy</h1>
          <p className="text-gray-300 text-lg  text-end"> and UI Design</p>
        </motion.div>
        <motion.div
          className="absolute bottom-[15%] pr-20 left-[5%] w-3/12"
          variants={image3Variants}
        >
          <h1 className="text-white text-5xl">ABC 456</h1>
          <p className="text-sm py-5 text-gray-400">
            We are the best web development company in the world
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
      <motion.div
        className="w-80 z-10 h-80 bg-[rgb(21,38,60)] rounded-full absolute left-[30%] top-[10%]"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={progressVariants}
      >
        <CircularProgressBar page={400}    initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={progressVariants} />
      </motion.div>
      <motion.div
        className="w-7/12 relativev h-full max-md:w-full max-md:h-8/12 bg-[rgb(17,19,24)]"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="w-10/12  h-full ml-20 flex"
          variants={itemVariants}
        >
          <motion.div
            className="w-1/2 h-full flex justify-center items-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={image1Variants}
            transition={{ duration: 2 }}
          >
            <motion.img
              className="w-10/12"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184527/UploadOnly/domi-img1_xphcxz.png"
            />
          </motion.div>
          <motion.div
            className="w-1/2 h-full flex justify-center items-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={image2Variants}
            transition={{ duration: 2 }}
          >
            <motion.img
              className="w-10/12"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184521/UploadOnly/ux-strategy-for-mobile-app-devlopment_qggzge.png"
            />
          </motion.div>

          {/* Bread */}
          <motion.div
            className="w-4/12 absolute -bottom-[450px] -right-[100px] h-full flex justify-center items-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={image2Variants}
            transition={{ duration: 2 }}
          >
            <motion.img
              className="w-10/12 "
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184526/UploadOnly/dominos-bread1_wn2tnv.png"
            />
          </motion.div>

          {/* Cookie */}
          <motion.div
            className="w-4/12 absolute -top-[300px] -right-[180px] h-full flex justify-center items-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={image2Variants}
            transition={{ duration: 2 }}
          >
            <motion.img
              className="w-4/12 "
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184527/UploadOnly/dominos-bread_f9dsd3.png"
            />
          </motion.div>

          {/* CardBoard */}
          <motion.div
            className="w-4/12 -z-0 absolute left-[35%] -top-[30%]  h-full flex justify-center items-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={image2Variants}
            transition={{ duration: 2 }}
          >
            <motion.img
              className="w-8/12 "
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184508/UploadOnly/pizza_box_gt7rpz.png"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FourthPage;
