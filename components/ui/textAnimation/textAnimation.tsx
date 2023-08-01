
"use client";
import { motion } from "framer-motion";
import { FC } from "react";

const TextAnimation: FC<any> = ({ children }) => {
  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", duration: 1.5, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      variants={textAnimate}
    >
      {children}
    </motion.div>
  );
};

export default TextAnimation;
