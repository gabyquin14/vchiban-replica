"use client";
import "./GameCorner.scss";
import { useState } from "react";
import SparklesGameCorner from "#/assets/svg/sparkles-game-corner";
import SanjisEyebrow from "#/assets/svg/swirly-thingy";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import Image from "next/image";
import SpringButton from "#/components/ui/springBtn/SpringButton";
import SmallBanner from "#/components/game-corner/small-banner/small-banner";
import ImgCarousel from "#/components/game-corner/img-carousel/ImgCarousel";
import ChevronRight from "#/assets/svg/chevron-right";

const GameCorner = () => {
  const [showGame, setShowGame] = useState(true);
  const [showOshi, setShowOshi] = useState(true);

  return (
    <main className="game-corner">
      <header>
        <SanjisEyebrow className="sanjis-eyebrow" />
        <HeaderSection
          as="h1"
          title="<span>GAME</span> <br/> CORNER."
          description={
            <>
              Welcome to VchiBan’s game corner! Here you’ll find the games that
              VchiBan has produced. All of these titles <br /> have been
              hand-crafted by yours truly, and also whoever else they paid.
            </>
          }
          SparklesComponent={SparklesGameCorner}
          customStyles="game-corner"
        />
        <SanjisEyebrow className="sanjis-eyebrow" />
        <div className="separator">
          <div></div>
        </div>
      </header>

      <div className="main-content">
        {/* Game Section */}
        <section>
          <div className="banner-container">
            <SmallBanner
              text="Gooba Ball"
              bgImg="https://framerusercontent.com/images/hapuFFerT9LbwuSCXDjWdGQq8Vg.png"
              topImg="https://framerusercontent.com/images/hapuFFerT9LbwuSCXDjWdGQq8Vg.png"
              bottomImg="https://framerusercontent.com/images/Smq7EPDHiDtMLBRSesAFXp32vw.png"
            />
          </div>

          {showGame && (
            <article className="game-header">
              <Image
                alt="gooba-ball"
                src="https://framerusercontent.com/images/Cqv6tM40SCdpqarvtpmrIAu3LZk.png"
                width={540}
                height={290}
                className="bg-img-gooba"
              />
              <p>
                A physics-based puzzle game where you combine colorful balls to
                achieve the ultimate form -- Goober! Combine two of a kind
                until, like I said, Goober… What more to do you freakin’ want?
              </p>

              <ImgCarousel
                firstImg="https://framerusercontent.com/images/xDKeuwOvLdeWiZc4tJkVqxXc.png"
                secondImg="https://framerusercontent.com/images/Smq7EPDHiDtMLBRSesAFXp32vw.png"
                thirdImg="https://framerusercontent.com/images/hapuFFerT9LbwuSCXDjWdGQq8Vg.png"
              />
              <SpringButton
                text="download and play"
                firstIcon="https://framerusercontent.com/images/XpGvthSNzunUXiPh7ihK39s3I.svg"
                SecondIcon={ChevronRight}
              />
            </article>
          )}
        </section>

        {/* Oshi Section */}
        <section>
          <div className="banner-container">
            <SmallBanner
              text="Meet your Oshi"
              bgImg="https://framerusercontent.com/images/8dxIOb4LGrRzzQjsIo5ho083KPM.png"
              topImg="https://framerusercontent.com/images/8dxIOb4LGrRzzQjsIo5ho083KPM.png"
              bottomImg="https://framerusercontent.com/images/ZktcXqBQQobyCy8BvcsH5oNVM.png"
            />
          </div>

          {showOshi && (
            <article className="game-header">
              <Image
                alt="meet-your-oshi"
                src="https://framerusercontent.com/images/qOBJWjYo8gdkIw19hhKAKo1W13s.png"
                width={540}
                height={290}
                className="bg-img-oshi"
              />
              <div className="oshi-animatronics">
                <Image
                  alt="oshi-animatronics"
                  src="https://framerusercontent.com/images/i8XoEdhtTcNim4FvnepIWVZwD8.png"
                  width={1256}
                  height={360}
                />
              </div>
              <p>
                Welcome to DweebCon! A pop culture convention you want to
                attend… Except all the tickets sold out before you got a chance
                to buy one! This might be your only chance to meet the new,
                high-tech animatronics based on your favorite VTuber group,
                VchiBan!
              </p>
              <p>And you will meet your oshis, at any cost.</p>

              <ImgCarousel
                firstImg="https://framerusercontent.com/images/1Ltw5XgiOCMWiknhDENV53V1XjQ.png"
                secondImg="https://framerusercontent.com/images/ZktcXqBQQobyCy8BvcsH5oNVM.png"
                thirdImg="https://framerusercontent.com/images/8dxIOb4LGrRzzQjsIo5ho083KPM.png"
              />
              <SpringButton
                text="download and play"
                firstIcon="https://framerusercontent.com/images/XpGvthSNzunUXiPh7ihK39s3I.svg"
                SecondIcon={ChevronRight}
              />
            </article>
          )}
        </section>
      </div>
    </main>
  );
};

export default GameCorner;
