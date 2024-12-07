"use client";
import "./NewInGameCorner.scss";
import SparklesNewInGameCorner from "#/assets/svg/sparkles-new-game-corner";
import Image from "next/image";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import SpringButton from "#/components/ui/springBtn/SpringButton";
import ChevronRight from "#/assets/svg/chevron-right";

const NewInGamerCorner = () => {
  return (
    <section className="gamer-news">
      <HeaderSection
        as="div"
        title="WHAT'S NEW IN THE <br/> GAME CORNER."
        SparklesComponent={SparklesNewInGameCorner}
        customStyles="new-game-corner"
        headingLevel="h2"
      />

      <div className="game-wrapper">
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
          ></SpringButton>
        </div>

        <Image
          alt="Gooba ball title"
          src="https://framerusercontent.com/images/gLprry6EAPiHKeFkXIqzgCZLTM.png"
          width={500}
          height={276}
          className="gb-title"
        />
        <Image
          alt="Game Over Gooba ball"
          src="https://framerusercontent.com/images/3dH40lIq8Vg4jszgH1HSi1Pmec.jpg"
          width={272}
          height={153}
          className="img-1"
        />
        <Image
          alt="Gameplay 1 Gooba ball"
          src="https://framerusercontent.com/images/dBfSWjP3Lgv1jH9QGez6azCAmos.jpg"
          width={272}
          height={153}
          className="img-2"
        />
        <Image
          alt="Gameplay 2 Gooba ball"
          src="https://framerusercontent.com/images/tZn0Ml3CD1UtGfNJgC5xXrk01pE.jpg"
          width={272}
          height={153}
          className="img-3"
        />
      </div>
    </section>
  );
};
export default NewInGamerCorner;
