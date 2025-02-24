import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variant,
} from "framer-motion";
import { useEffect, useState } from "react";

export const useMouseParallax = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () =>
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 14 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 14 });
  const houseSmoothX = useSpring(x, { stiffness: 100, damping: 40 });
  const houseSmoothY = useSpring(y, { stiffness: 100, damping: 40 });

  const houseX = useTransform(
    houseSmoothX,
    [0, windowDimensions.width],
    [-15, 15]
  );
  const houseY = useTransform(
    houseSmoothY,
    [0, windowDimensions.height],
    [-15, 15]
  );
  const exclMarkX = useTransform(
    smoothX,
    [0, windowDimensions.width],
    [-10, 10]
  );
  const exclMarkY = useTransform(
    smoothY,
    [0, windowDimensions.height],
    [-10, 10]
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY } = event;
    x.set(clientX);
    y.set(clientY);
  };

  return { handleMouseMove, houseX, houseY, exclMarkX, exclMarkY };
};
