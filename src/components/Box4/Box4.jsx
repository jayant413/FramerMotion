import React from "react";
import { motion } from "framer-motion";
const Box4 = () => {
  return (
    <div className="box_container">
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.2, 0.7, 1.5, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
};

export default Box4;
