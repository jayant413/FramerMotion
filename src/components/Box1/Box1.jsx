import React, { useState } from "react";
import { motion } from "framer-motion";
const Box1 = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="box_container">
      <motion.div
        className="box"
        animate={{
          x: animate ? "80vw" : 0,
          opacity: animate ? 1 : 0.3,
          rotate: animate ? 360 : 0,
          //   backgroundColor: "blue",
          //   scale: 1.5,
        }}
        initial={{
          opacity: 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          //   duration: 2,
          //   damping: 20,
        }}
        onClick={() => setAnimate(!animate)}
      >
        <span>Box1</span>
      </motion.div>
    </div>
  );
};

export default Box1;
