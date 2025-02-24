"use client";
import { useEffect, useState } from "react";

const useAnimationDelay = (delay: number) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return animate;
};

export default useAnimationDelay;
