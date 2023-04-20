"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  propsDelay?: number;
  margin?: string;
};

const ScrollFade = ({ children, propsDelay, margin }: Props) => {
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
        delay: propsDelay || 0.1,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5, margin: margin && margin  }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
