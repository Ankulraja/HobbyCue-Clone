import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import CircularProgressBar from "./CircularProgressBar";
import { MdArrowRightAlt } from "react-icons/md";

const FirstPage = ({ isVisible }) => {
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
    transition: { duration: 3 },
  };

  const item3Variants = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 10 },
    transition: { duration: 2 },
  };

  const image1Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 2 },
  };

  const image2Variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 2 },
  };

  const image3Variants = {
    hidden: { opacity: 0, y: 0, x: -200 },
    visible: { opacity: 1, y: 0, x: 20 },
    transition: { duration: 2 },
  };

  return (
    <div className="relative w-full h-full flex flex-row max-md:flex-col-reverse">
      <motion.div
        className="relatives w-5/12 h-full max-md:w-full max-md:h-4/12 bg-[rgb(99,16,169)]"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="absolute top-[25%] text-end text-white left-[13%] z-30"
          variants={item3Variants}
        >
          <h1 className="text-6xl text-white">25M+ Downloads</h1>
          <p className="text-gray-400 font-thin">
            {" "}
            on appstore & google playstore
          </p>
        </motion.div>
        <motion.div
          className="absolute bottom-[35%] left-[5%] w-2/12"
          variants={itemVariants}
        >
          <img
            alt="..."
            src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184520/UploadOnly/world-communication-awards-for-best-digital-experience_kkprry.png"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-[15%] pr-20 left-[5%] w-3/12"
          variants={image3Variants}
        >
          <h1 className="text-white text-5xl">ABC 123</h1>
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
        initial="hidden"
        animate={isVisible ? "visible" : "hidden "}
        variants={containerVariants}
        className="w-80 max-md:hidden z-0 h-80 bg-[rgb(99,16,169)] rounded-full absolute left-[30%] top-[10%]"
      >
        <CircularProgressBar />
      </motion.div>
      <motion.div
        className="w-7/12 h-full max-md:w-full max-md:h-8/12 bg-gray-300"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="w-10/12 h-full ml-20 flex"
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
              className="w-full"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184521/UploadOnly/nexgtv-entertainment-mobile-app-development_esj6fl.png"
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
              className="w-full"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184522/UploadOnly/nexgtv-mobile-app-ui-design_reiige.png"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FirstPage;
