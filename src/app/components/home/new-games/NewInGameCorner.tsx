import "./NewInGameCorner.scss";
import SparklesNewInGameCorner from "#/app/assets/svg/sparkles-new-game-corner";
import Image from "next/image";

const NewInGamerCorner = () => {
  return (
    <section className="gamer-news">
      <div className="section-title">
        <h1 className="title">
          WHAT&apos;S NEW IN THE <br />
          GAME CORNER.
        </h1>
        <SparklesNewInGameCorner className="sparkles" />
      </div>
      <div className="game-wrapper">
        <div className="gooba-ball-main-img">
          <Image
            alt="gooba-ball"
            src="https://framerusercontent.com/images/tZn0Ml3CD1UtGfNJgC5xXrk01pE.jpg"
            width={1384}
            height={504}
          />
        </div>
        <h3>GOOBA BALL</h3>
        <button>play now</button>
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
