export const springTransition = { type: "spring", stiffness: 300, damping: 14 };
export const bouncyTransition = {
  type: "spring",
  stiffness: 800,
  damping: 5,
  mass: 0.1,
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
