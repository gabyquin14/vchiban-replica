import { FC } from "react";
import "./NewFromWorld.scss";
import Sparkles from "#/app/assets/svg/sparkles";
import SparklesNewWorld from "#/app/assets/svg/sparkles-new-world";
import Image from "next/image";
import ChevronRight from "#/app/assets/svg/chevron-right";

const NewFromWorldVchiban: FC = () => {
  return (
    <div className="new-world">
      <div className="section-title">
        <h2 className="title">
          NEW FROM THE WORLD <br />
          <span>OF VCHIBAN.</span>
        </h2>
        <SparklesNewWorld className="sparkles" />
        <p className="desc">
          See what’s been happening in our world, new events, new merch or
          sometimes new games!
          <br />
          Stay tuned!
        </p>
      </div>
      <div className="event-list">
        <article className="event-card">
          <Image
            alt="VchiBanter Podcast!"
            src="https://framerusercontent.com/images/SBHjYQFNnH5D1U2nNJF8bBR8uSY.png"
            width={676}
            height={340}
          />
          <h3>VchiBanter Podcast Coming Soon!</h3>
        </article>
        <article className="event-card">
          <div className="gooba-ball">
            <Image
              alt="Gooba Ball"
              src="https://framerusercontent.com/images/dBfSWjP3Lgv1jH9QGez6azCAmos.jpg"
              width={676}
              height={340}
            />
            <button className="see-more-btn">
              see more
              <ChevronRight />
            </button>
          </div>

          <h3>Play Gooba Ball</h3>
        </article>
      </div>
    </div>
  );
};

export default NewFromWorldVchiban;
