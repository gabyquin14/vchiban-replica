"use client";
import { useRef } from "react";
import Banner from "../components/home/Banner";
import NewInGamerCorner from "../components/home/new-games/NewInGameCorner";
import NewFromWorldVchiban from "../components/home/events/NewFromWorld";
import CreatorCard from "../components/home/creator-card/CreatorCard";
import FooterSeparator from "#/components/ui/footer-separator/FooterSeparator";

export default function Home() {
  const creatorCardRef = useRef<HTMLDivElement>(null);

  const scrollToCreatorCard = () => {
    if (creatorCardRef.current) {
      creatorCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section style={{ position: "relative", overflowX: "hidden" }}>
      <Banner scrollToCreatorCard={scrollToCreatorCard} />
      <div ref={creatorCardRef}>
        <CreatorCard />
      </div>
      <NewFromWorldVchiban />
      <NewInGamerCorner />
      <FooterSeparator />
    </section>
  );
}
