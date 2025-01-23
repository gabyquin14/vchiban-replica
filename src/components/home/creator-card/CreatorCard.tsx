"use client";
import { FC } from "react";
import "./CreatorCard.scss";
import { vchibanStars } from "#/helpers/members-info";
import TalentExclMark1 from "#/assets/svg/home/talent-excl-1";
import TalentExclMark2 from "#/assets/svg/home/talent-exl-2";
import Card from "./Card";
import { useRouter } from "next/navigation";

const CreatorCard: FC = () => {
  const router = useRouter();
  const redirectToPersonalPage = (name: string) => {
    router.push(`/our-family/${name.toLocaleLowerCase()}`);
  };

  return (
    <section className="creator-card">
      {vchibanStars.map((star) => (
        <Card
          key={star.name}
          star={star}
          onClick={() => redirectToPersonalPage(star.name)}
        />
      ))}
      <TalentExclMark1 className="excl-1" />
      <TalentExclMark2 className="excl-2" />
    </section>
  );
};

export default CreatorCard;
