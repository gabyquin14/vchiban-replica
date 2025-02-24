import { Variant } from "framer-motion";

export const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 14,
  mass: 0.8,
};

export const bouncyTransition = {
  type: "spring",
  stiffness: 500,
  damping: 8,
  mass: 0.8,
};

// gamer corner button exclamation marks delay
export const excl1 = {
  visible: {
    opacity: 1,
    y: -15,
    x: 0,
    scale: 1,
    transition: { duration: 0.3, delay: 0.2 },
  },
  hidden: {
    opacity: 0,
    y: -10,
    x: 5,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};
export const excl2 = {
  visible: {
    opacity: 1,
    y: -15,
    x: 0,
    scale: 1,
    transition: { duration: 0.3, delay: 0.1 },
  },
  hidden: {
    opacity: 0,
    y: -10,
    x: 5,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};
export const excl3 = {
  visible: {
    opacity: 1,
    y: -15,
    x: 0,
    scale: 1,
    transition: { duration: 0.3, delay: 0.2 },
  },
  hidden: {
    opacity: 0,
    y: -10,
    x: -5,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

//Banner members stickers animations
export const buffAnimation: Variant = {
  x: [0, 20, 0],
  y: [0, -20, 0],
  rotate: [0, -5, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
  },
};

export const candiAnimation: Variant = {
  x: [0, -25, 0],
  y: [0, -10, 0],
  rotate: [0, 15, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
  },
};

export const shiaAnimation: Variant = {
  x: [0, 20, 0],
  y: [0, -20, 0],
  rotate: [0, 15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "mirror",
  },
};

export const roseAnimation: Variant = {
  x: [0, -20, 0],
  y: [0, -20, 0],
  rotate: [0, -5, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    repeatType: "mirror",
  },
};
