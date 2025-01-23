"use client";
import { FC, useState } from "react";
import "./NewFromWorld.scss";
import SparklesNewWorld from "#/assets/svg/sparkles/sparkles-new-world";
import Image from "next/image";
import ChevronRight from "#/assets/svg/chevron-right";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import SpringButton from "#/components/ui/springBtn/SpringButton";
import Spring1 from "#/assets/svg/home/spring-1";
import Spring2 from "#/assets/svg/home/spring-2";
import BigStar from "#/assets/svg/home/big-star";
import SmallStar from "#/assets/svg/home/small-star";
import BtnExclMark1 from "#/assets/svg/spring-btn/excl-1";
import BtnExclMark2 from "#/assets/svg/spring-btn/excl-2";
import { bouncyTransition, springTransition } from "#/helpers/const-animations";
import { motion } from "framer-motion";
import { text } from "stream/consumers";

const NewFromWorldVchiban: FC = () => {
  const [isHover, setIsHover] = useState({ podcast: false, game: false });
  return (
    <section className="new-world">
      <HeaderSection
        as="div"
        title="NEW FROM THE WORLD <br /><span>OF VCHIBAN.</span>"
        SparklesComponent={SparklesNewWorld}
        description={
          <>
            See what’s been happening in our world, new events, new merch or
            sometimes new games!
            <br />
            Stay tuned!
          </>
        }
        customStyles="new-projects"
        headingLevel="h2"
      />

      <div className="event-list">
        <article
          className="event-card"
          onMouseEnter={() =>
            setIsHover((prev) => ({ ...prev, podcast: true }))
          }
          onMouseLeave={() =>
            setIsHover((prev) => ({ ...prev, podcast: false }))
          }
        >
          <motion.div
            className="gooba-ball"
            transition={bouncyTransition}
            animate={
              isHover.podcast
                ? { transform: "translateY(-0.5rem)" }
                : { transform: "translateY(0rem)" }
            }
          >
            <Image
              alt="VchiBanter Podcast!"
              src="https://framerusercontent.com/images/SBHjYQFNnH5D1U2nNJF8bBR8uSY.png"
              width={676}
              height={340}
              className="event-image"
            />
            <CardButton />
          </motion.div>

          <h3 className="event-title">VchiBanter Podcast Out Now!</h3>
        </article>

        <article
          className="event-card"
          onMouseEnter={() => setIsHover((prev) => ({ ...prev, game: true }))}
          onMouseLeave={() => setIsHover((prev) => ({ ...prev, game: false }))}
        >
          <motion.div
            className="gooba-ball"
            transition={bouncyTransition}
            animate={
              isHover.game
                ? { transform: "translateY(-1rem)" }
                : { transform: "translateY(0rem)" }
            }
          >
            <Image
              alt="Gooba Ball"
              src="https://framerusercontent.com/images/dBfSWjP3Lgv1jH9QGez6azCAmos.jpg"
              width={676}
              height={340}
              className="event-image"
            />
            <CardButton />
          </motion.div>
          <h3 className="event-title">Play Gooba Ball</h3>
        </article>
      </div>
      <Spring1 className="spring-1" />
      <Spring2 className="spring-2" />
      <BigStar className="star-1" />
      <SmallStar className="star-2" />
      <SmallStar className="star-3" />
    </section>
  );
};

const CardButton = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button className="spring-btn see-more-btn">
      <div className="content-wrapper">
        <motion.div
          className="bouncy-bg"
          whileHover={{ inset: "-4px -12px" }}
          transition={bouncyTransition}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        />

        <span className="content">see more</span>
        <ChevronRight className="second-icon" />
      </div>
    </button>
  );
};

export default NewFromWorldVchiban;
