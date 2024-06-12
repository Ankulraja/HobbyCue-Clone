import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import CircularProgressBar from "./CircularProgressBar";
import { MdArrowRightAlt } from "react-icons/md";

const SixthPage = ({ isVisible }) => {
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
    hidden: { opacity: 0.5, y: 100 },
    visible: { opacity: 1, y: 0 },
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
          <p className="text-gray-300 text-xl">Developing ERP Solution for</p>
          <h1 className="text-6xl">Text Headline</h1>
          <p className="text-gray-300 text-xl  text-end"> in furniture industry</p>
        </motion.div>
        <motion.div
          className="absolute bottom-[15%] pr-20 left-[5%] w-3/12"
          variants={itemVariants}
        >
          <h1 className="text-white text-5xl">ABC 678</h1>
          <p className="text-[15px] py-5 text-gray-300">
            Best since 2017 <br></br>
            We offer wide range of web development and app development.
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
        <CircularProgressBar page={680} />
      </motion.div>
      
      
      <motion.div
        className="w-7/12  relativev h-full max-md:w-full max-md:h-8/12 bg-[url(https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184507/UploadOnly/interior_t5let8.jpg)] bg-cover"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className=" h-full w-12/12 mx-auto">
        <motion.img 
        alt="..."
        src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1718184527/UploadOnly/erp-app-development-service_qiporn.png"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={image1Variants}
        transition={{ duration: 2 }}
         >
        </motion.img >
        </div>
       
      </motion.div>
    </div>
  );
};

export default SixthPage;
