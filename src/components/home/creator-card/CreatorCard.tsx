"use client";
import { FC } from "react";
import "./CreatorCard.scss";
import { vchibanStars } from "#/helpers/members-info";
import TalentExclMark1 from "#/assets/svg/home/talent-excl-1";
import TalentExclMark2 from "#/assets/svg/home/talent-exl-2";
import Card from "./Card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useAnimationDelay from "#/hooks/useAnimationDelay";

const CreatorCard: FC = () => {
  const router = useRouter();
  const redirectToPersonalPage = (name: string) => {
    router.push(`/our-family/${name.toLocaleLowerCase()}`);
  };
  const animate = useAnimationDelay(0);

  return (
    <section style={{ position: "relative" }}>
      <motion.div
        className="creator-card"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        {vchibanStars.map((star, index) => (
          <motion.div
            key={star.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.3,
              delay: index * 0.1 + 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Card
              star={star}
              onClick={() => redirectToPersonalPage(star.name)}
            />
          </motion.div>
        ))}
      </motion.div>
      <TalentExclMark1 className="excl-1" />
      <TalentExclMark2 className="excl-2" />
    </section>
  );
};

export default CreatorCard;
