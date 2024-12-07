"use client";
import { FC } from "react";
import "./NewFromWorld.scss";
import SparklesNewWorld from "#/assets/svg/sparkles-new-world";
import Image from "next/image";
import ChevronRight from "#/assets/svg/chevron-right";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import SpringButton from "#/components/ui/springBtn/SpringButton";

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
        <article className="event-card">
          <Image
            alt="VchiBanter Podcast!"
            src="https://framerusercontent.com/images/SBHjYQFNnH5D1U2nNJF8bBR8uSY.png"
            width={676}
            height={340}
            className="event-image"
          />
          <h3 className="event-title">VchiBanter Podcast Coming Soon!</h3>
        </article>

        <article className="event-card">
          <div className="gooba-ball">
            <Image
              alt="Gooba Ball"
              src="https://framerusercontent.com/images/dBfSWjP3Lgv1jH9QGez6azCAmos.jpg"
              width={676}
              height={340}
              className="event-image"
            />
            <SpringButton
              text="see more"
              SecondIcon={ChevronRight}
              customStyles="new-world"
            />
          </div>
          <h3 className="event-title">Play Gooba Ball</h3>
        </article>
      </div>
    </section>
  );
};

export default NewFromWorldVchiban;
