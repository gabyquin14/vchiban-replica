"use client";
import "./NewInGameCorner.scss";
import SparklesNewInGameCorner from "#/assets/svg/sparkles/sparkles-new-game-corner";
import Image from "next/image";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import SpringButton from "#/components/ui/springBtn/SpringButton";
import ChevronRight from "#/assets/svg/chevron-right";
import GameExcl1 from "#/assets/svg/home/game-excl-1";
import GameExcl2 from "#/assets/svg/home/game-excl-2";
import { motion } from "framer-motion";
import { bouncyTransition } from "#/helpers/const-animations";

const NewInGamerCorner = () => {
  return (
    <section className="gamer-news">
      <HeaderSection
        as="div"
        title="WHAT'S NEW IN THE <br/> GAME CORNER."
        SparklesComponent={SparklesNewInGameCorner}
        customStyles="new-game-corner"
        headingLevel="h2"
        delay={0}
      />

      <motion.div
        className="game-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="gooba-ball-main-img">
          <Image
            alt="gooba-ball"
            src="https://framerusercontent.com/images/tZn0Ml3CD1UtGfNJgC5xXrk01pE.jpg"
            width={1384}
            height={504}
          />
        </div>
        <div className="bottom-info">
          <h3>GOOBA BALL</h3>
          <SpringButton
            text="play now"
            firstIcon="https://framerusercontent.com/images/XpGvthSNzunUXiPh7ihK39s3I.svg"
            SecondIcon={ChevronRight}
            customStyles="play-now"
          />
        </div>

        <Image
          alt="Gooba ball title"
          src="https://framerusercontent.com/images/gLprry6EAPiHKeFkXIqzgCZLTM.png"
          width={500}
          height={276}
          className="gb-title"
        />

        <motion.div
          className="img-1"
          whileHover={{ transform: "translateY(-1rem)" }}
          transition={bouncyTransition}
        >
          <Image
            alt="Game Over Gooba ball"
            src="https://framerusercontent.com/images/3dH40lIq8Vg4jszgH1HSi1Pmec.jpg"
            width={272}
            height={153}
          />
        </motion.div>

        <motion.div
          className="img-2"
          whileHover={{ transform: "translateY(-1rem)" }}
          transition={bouncyTransition}
        >
          <Image
            alt="Gameplay 1 Gooba ball"
            src="https://framerusercontent.com/images/dBfSWjP3Lgv1jH9QGez6azCAmos.jpg"
            width={272}
            height={153}
          />
        </motion.div>

        <motion.div
          className="img-3"
          whileHover={{ transform: "translateY(-1rem)" }}
          transition={bouncyTransition}
        >
          <Image
            alt="Gameplay 2 Gooba ball"
            src="https://framerusercontent.com/images/tZn0Ml3CD1UtGfNJgC5xXrk01pE.jpg"
            width={272}
            height={153}
          />
        </motion.div>
      </motion.div>

      <GameExcl1 className="excl-1" />
      <GameExcl2 className="excl-2" />
    </section>
  );
};

export default NewInGamerCorner;
