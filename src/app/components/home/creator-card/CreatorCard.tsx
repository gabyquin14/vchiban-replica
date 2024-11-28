import { FC } from "react";
import { motion } from "framer-motion";
import Twitch from "#/app/assets/svg/twitch";
import Twitter from "#/app/assets/svg/twitter";
import Youtube from "#/app/assets/svg/youtube";
import { vchibanStars } from "@/helpers/members-info";

const CreatorCard: FC = () => {
  return (
    <div>
      {vchibanStars.map((star) => (
        <article key={star.name}>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>nombre</h2>
              <ul className="socials-list">
                <li className="social">
                  <a href="">
                    <Twitch />
                  </a>
                </li>
                <li className="social">
                  <a href="">
                    <Twitter />
                  </a>
                </li>
                <li className="social">
                  <a href="">
                    <Youtube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CreatorCard;
