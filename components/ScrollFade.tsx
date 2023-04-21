"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  margin?: string;
};

const ScrollFade = ({ children, margin }: Props) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.1,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount:0.2, margin: margin && margin }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
