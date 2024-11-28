"use client";
import { motion } from "framer-motion";
import ChevronDown from "@/assets/svg/chevron-down";
import Sparkles from "@/assets/svg/sparkles";
import { springTransition } from "@/helpers/const-animations";
import "./Home.scss";
import Image from "next/image";
import { useState } from "react";
import { vchibanStars } from "@/helpers/members-info";

export default function Banner() {
  const [isHover, setisHover] = useState(false);

  return (
    <section className="home-section">
      <div className="banner-wrapper">
        <div className="banner-header">
          <div className="section-title">
            <h1 className="title">
              FOUND FAMILY <br />
              INDIE GROUP.
            </h1>
            <Sparkles className="sparkles" />
          </div>
        </div>
        <div className="members-wrapper">
          <ul className="stars-list">
            {vchibanStars.map((member) => (
              <li
                key={member.name}
                className={`star-portrait ${member.name.toLowerCase()}`}
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
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={springTransition}
              className="hover-motion blue"
            />

            <div className="content-wrapper">
              <span className="content">See more of what we can do</span>
              <ChevronDown />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
