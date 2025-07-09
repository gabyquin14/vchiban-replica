"use client";
import "./GameCorner.scss";
import { useState } from "react";
import SparklesGameCorner from "#/assets/svg/sparkles/sparkles-game-corner";
import SanjisEyebrow from "#/assets/svg/swirly-thingy";
import HeaderSection from "#/components/ui/header-section/HeaderSection";
import Image from "next/image";
import SpringButton from "#/components/ui/spring-btn/SpringButton";
import SmallBanner from "#/components/game-corner/small-banner/SmallBanner";
import ImgCarousel from "#/components/game-corner/img-carousel/ImgCarousel";
import ChevronRight from "#/assets/svg/chevron-right";
import FooterSeparator from "#/components/ui/footer-separator/FooterSeparator";
import SearchLight from "#/assets/svg/game-corner/searchlight";
import Excl1 from "#/assets/svg/game-corner/excl-1";
import Excl2 from "#/assets/svg/game-corner/excl-2";
import Excl3 from "#/assets/svg/game-corner/excl-3";
import { motion } from "framer-motion";
import useAnimationDelay from "#/hooks/useAnimationDelay";

const GameCorner = () => {
  const [showGame, setShowGame] = useState(true);
  const [showOshi, setShowOshi] = useState(true);
  const animate = useAnimationDelay(0);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="game-corner">
      <SearchLight className="searchlight-1" />
      <SearchLight className="searchlight-2" />
      <SearchLight className="searchlight-3" />
      <SearchLight className="searchlight-4" />
      <header>
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
          customStyles="game-cornerr"
          delay={0}
        >
          <motion.div
            className="sanjis-eyebrow"
            initial={{ opacity: 0, x: 50 }}
            animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 0.2,
              delay: 0.2,
            }}
          >
            <SanjisEyebrow />
          </motion.div>
          <motion.div
            className="sanjis-eyebrow"
            initial={{ opacity: 0, x: -50 }}
            animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 0.2,
              delay: 0.2,
            }}
          >
            <SanjisEyebrow />
          </motion.div>
        </HeaderSection>
        <div className="separator">
          <div></div>
        </div>
      </header>

      <div className="main-content">
        <section>
          <motion.div
            className="banner-container"
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
          >
            <SmallBanner
              text="Gooba Ball"
              bgImg="https://framerusercontent.com/images/hapuFFerT9LbwuSCXDjWdGQq8Vg.png"
              topImg="https://framerusercontent.com/images/hapuFFerT9LbwuSCXDjWdGQq8Vg.png"
              bottomImg="https://framerusercontent.com/images/Smq7EPDHiDtMLBRSesAFXp32vw.png"
              setShowInfo={setShowGame}
              showInfo={showGame}
            />
          </motion.div>

          {showGame && (
            <motion.article
              className="game-header"
              initial={{ opacity: 0 }}
              animate={animate ? { opacity: 1 } : { opacity: 0 }}
            >
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
              <div className="img-carousel-wrapper">
                <Excl1 className="excl-1" />
                <Excl2 className="excl-2" />
                <Excl3 className="excl-3" />
                <ImgCarousel
                  firstImg="https://framerusercontent.com/images/xDKeuwOvLdeWiZc4tJkVqxXc.png"
                  secondImg="https://framerusercontent.com/images/Smq7EPDHiDtMLBRSesAFXp32vw.png"
                  thirdImg="https://framerusercontent.com/images/hapuFFerT9LbwuSCXDjWdGQq8Vg.png"
                />
              </div>
              <SpringButton
                text="download and play"
                firstIcon="https://framerusercontent.com/images/XpGvthSNzunUXiPh7ihK39s3I.svg"
                SecondIcon={ChevronRight}
                isTransitionBouncy
                onClick={() =>
                  openInNewTab("https://store.steampowered.com/app/2878140/")
                }
              />
            </motion.article>
          )}
        </section>

        <section>
          <motion.div
            className="banner-container"
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
          >
            <SmallBanner
              text="Meet your Oshi"
              bgImg="https://framerusercontent.com/images/8dxIOb4LGrRzzQjsIo5ho083KPM.png"
              topImg="https://framerusercontent.com/images/8dxIOb4LGrRzzQjsIo5ho083KPM.png"
              bottomImg="https://framerusercontent.com/images/ZktcXqBQQobyCy8BvcsH5oNVM.png"
              setShowInfo={setShowOshi}
              showInfo={showOshi}
            />
          </motion.div>

          {showOshi && (
            <motion.article
              className="game-header"
              initial={{ opacity: 0 }}
              animate={animate ? { opacity: 1 } : { opacity: 0 }}
            >
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

              <div className="img-carousel-wrapper">
                <Excl1 className="excl-1" />
                <Excl2 className="excl-2" />
                <Excl3 className="excl-3" />
                <ImgCarousel
                  firstImg="https://framerusercontent.com/images/1Ltw5XgiOCMWiknhDENV53V1XjQ.png"
                  secondImg="https://framerusercontent.com/images/ZktcXqBQQobyCy8BvcsH5oNVM.png"
                  thirdImg="https://framerusercontent.com/images/8dxIOb4LGrRzzQjsIo5ho083KPM.png"
                />
              </div>

              <SpringButton
                text="download and play"
                firstIcon="https://framerusercontent.com/images/XpGvthSNzunUXiPh7ihK39s3I.svg"
                SecondIcon={ChevronRight}
                isTransitionBouncy
                onClick={() =>
                  openInNewTab(
                    "https://store.steampowered.com/app/2715280/Meet_Your_Oshi/"
                  )
                }
              />
            </motion.article>
          )}
        </section>
      </div>

      <FooterSeparator color="var(--game-corner-bg)" />
    </main>
  );
};

export default GameCorner;
