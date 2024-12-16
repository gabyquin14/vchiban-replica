"use client";
import { motion } from "framer-motion";
import ChevronDown from "#/assets/svg/chevron-down";
import Sparkles from "#/assets/svg/sparkles/sparkles";
import { springTransition } from "#/helpers/const-animations";
import Image from "next/image";
import { useState } from "react";
import { vchibanStars } from "#/helpers/members-info";
import HeaderSection from "../ui/headerSection/HeaderSection";
import "./Home.scss";
import House from "#/assets/svg/house";
import Exclamation4 from "#/assets/svg/footer/excl-4";
import Exclamation3 from "#/assets/svg/footer/excl-3";

export default function Banner() {
  const [isHover, setIsHover] = useState(false);

  return (
    <section className="home-section" aria-labelledby="banner-title">
      <div className="banner-wrapper">
        <HeaderSection
          as="header"
          title="FOUND FAMILY <br />INDIE GROUP."
          SparklesComponent={Sparkles}
          customStyles="banner"
        />

        <div className="members-wrapper">
          <ul className="stars-list" role="list" aria-label="Team members">
            {vchibanStars.map((member) => (
              <li
                key={member.name}
                className={`star-portrait ${member.name.toLowerCase()}`}
                aria-label={`Portrait of ${member.name}`}
              >
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  layout="responsive"
                  width={791}
                  height={1274}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="see-more-btn-wrapper">
          <button
            className="see-more-btn"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            aria-label="See more of what we can do"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={springTransition}
              className="hover-motion blue"
              aria-hidden="true"
            />
            <div className="content-wrapper">
              <span className="content">See more of what we can do</span>
              <ChevronDown aria-hidden="true" />
            </div>
          </button>
        </div>
      </div>
      <div className="bg-wrapper">
        <div className="bg-svgs">
          <House />
          <div className="excl-marks">
            <Exclamation4 />
            <Exclamation3 />
          </div>
        </div>
      </div>
    </section>
  );
}
