"use client";

import { useRef, FC } from "react";
import { useInView } from "framer-motion";
const TextAnimation: FC<any> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s linear 0.5s",
      }}
    >
      {children}
    </div>
  );
};

export default TextAnimation;

// import { motion } from "framer-motion";
// import { FC } from "react";

// const TextAnimation: FC<any> = ({ children }) => {
//   const textAnimate = {
//     offscreen: { y: 100, opacity: 0 },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "tween", duration: 1.5, ease: "easeInOut" },
//     },
//   };
//   const thresholdValue = 0.25;
//   return (
//     <motion.div
//       initial={"offscreen"}
//       whileInView={"onscreen"}
//       viewport={{ once: false, amount: 0.5 }}
//       transition={{ staggerChildren: 0.5 }}
//       variants={textAnimate}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default TextAnimation;
