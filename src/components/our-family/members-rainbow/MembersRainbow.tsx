import { FC, useState } from "react";
import "./MembersRainbow.scss";
import { vchibanStars } from "#/helpers/members-info";
import Image from "next/image";
import { motion } from "framer-motion";
import MemberCard from "./MemberCard";

const MembersRaibow: FC = () => {
  return (
    <section className="members-card">
      {vchibanStars.map((star) => (
        <MemberCard star={star} key={star.name} />
      ))}
    </section>
  );
};

export default MembersRaibow;
