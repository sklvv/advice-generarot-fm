import React from "react";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <>
      <div className="loader__container">
        <motion.div
          className="loader"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["120%", "20%", "50%", "50%", "20%"],
            transition: { repeat: Infinity },
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default Loader;
