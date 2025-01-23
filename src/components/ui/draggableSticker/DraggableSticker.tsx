import {
  useMotionValue,
  useDragControls,
  motion,
  Variant,
} from "framer-motion";
import { FC, ReactNode } from "react";
import "./DraggableSticker.scss";

interface DraggableStickerProps {
  children?: ReactNode;
  src?: string;
  alt: string;
  floatAnimation?: Variant;
}

const DraggableSticker: FC<DraggableStickerProps> = ({
  children,
  alt,
  src,
  floatAnimation,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useDragControls();

  const float = floatAnimation ?? {
    x: [0, 20],
    y: [0, 20],
    rotate: [0, 8],
    transition: {
      delay: 2,
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <motion.div
      className={`main-icon ${alt.toLocaleLowerCase()}`}
      style={{ x, y, cursor: "grab" }}
      animate="float"
      whileDrag="idle"
      variants={{
        idle: {
          x: 0,
          y: 0,
          rotate: 0,
        },
        float: float,
      }}
    >
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          width={150}
          height={150}
          drag
          dragControls={controls}
          dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
          dragElastic={0.8}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 14 }}
          whileTap={{ cursor: "grabbing" }}
        />
      ) : (
        <motion.div
          drag
          dragControls={controls}
          dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
          dragElastic={0.8}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 14 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};
export default DraggableSticker;
