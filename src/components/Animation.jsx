import React from "react";
import { motion, variants } from "framer-motion";




const Animation = ({ variants, child }) => {
  return (
    <>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        
      >
        <motion.div className="card" variants={variants}>
          {child}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Animation;
