import { FC, useState } from "react";
import "./MembersRainbow.scss";
import { vchibanStars } from "#/helpers/MembersData";
import Image from "next/image";
import { motion } from "framer-motion";
import MemberCard from "./MemberCard";
import Link from "next/link";

const MembersRaibow: FC = () => {
  return (
    <section className="members-card">
      {vchibanStars.map((star) => (
        <Link
          href={`/our-family/${star.name.toLocaleLowerCase()}`}
          key={star.name}
        >
          <MemberCard star={star} />
        </Link>
      ))}
    </section>
  );
};

export default MembersRaibow;
