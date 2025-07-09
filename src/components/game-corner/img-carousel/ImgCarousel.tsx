import Image from "next/image";
import "./ImgCarousel.scss";
import { motion } from "framer-motion";
import { bouncyTransition, springTransition } from "#/helpers/Animations";

interface SpringButtonProps {
  firstImg: string;
  secondImg: string;
  thirdImg: string;
}

const ImgCarousel: React.FC<SpringButtonProps> = ({
  firstImg,
  secondImg,
  thirdImg,
}) => {
  return (
    <div className="img-carousel">
      <motion.div
        className="img-wrapper"
        whileHover={{ transform: "rotate(-3deg)", top: "-1rem" }}
        initial={{ transform: "rotate(-1deg)", top: "0.5rem" }}
        transition={springTransition}
      >
        <Image
          alt="gooba-1"
          src={firstImg}
          width={786}
          height={442}
          className="bg-img"
        />
      </motion.div>

      <motion.div
        className="img-wrapper"
        whileHover={{
          transform: "translateX(-49.5%) rotate(3deg)",
          top: "4rem",
        }}
        initial={{
          transform: "translateX(-49.5%) rotate(0deg)",
          top: "5.5rem",
        }}
        transition={springTransition}
      >
        <Image
          alt="gooba-2"
          src={secondImg}
          width={786}
          height={442}
          className="bg-img"
        />
      </motion.div>
      <motion.div
        className="img-wrapper"
        whileHover={{
          transform: "rotate(3deg)",
          top: "-1rem",
        }}
        initial={{
          transform: "rotate(1deg)",
          top: "0.5rem",
        }}
        transition={springTransition}
      >
        <Image
          alt="gooba-3"
          src={thirdImg}
          width={786}
          height={442}
          className="bg-img"
        />
      </motion.div>
    </div>
  );
};

export default ImgCarousel;
