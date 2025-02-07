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
import { motion } from "framer-motion";
import { bouncyTransition } from "#/helpers/const-animations";

const NewFromWorldVchiban: FC = () => {
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
        <EventCard
          imageSrc="https://framerusercontent.com/images/SBHjYQFNnH5D1U2nNJF8bBR8uSY.png"
          altText="VchiBanter Podcast!"
          title="VchiBanter Podcast Out Now!"
        />
        <EventCard
          imageSrc="https://framerusercontent.com/images/dBfSWjP3Lgv1jH9QGez6azCAmos.jpg"
          altText="Gooba Ball"
          title="Play Gooba Ball"
        />
      </div>

      <Spring1 className="spring-1" />
      <Spring2 className="spring-2" />
      <BigStar className="star-1" />
      <SmallStar className="star-2" />
      <SmallStar className="star-3" />
    </section>
  );
};

const EventCard: FC<{
  imageSrc: string;
  altText: string;
  title: string;
}> = ({ imageSrc, altText, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="event-card"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <motion.div
        className="card"
        transition={bouncyTransition}
        animate={{
          transform: isHovered ? "translateY(-0.5rem)" : "translateY(0rem)",
        }}
      >
        <Image
          alt={altText}
          src={imageSrc}
          width={676}
          height={340}
          className="event-image"
        />
        <CardButton />
      </motion.div>
      <h3 className="event-title">{title}</h3>
    </article>
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
