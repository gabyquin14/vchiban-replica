import Banner from "../components/home/Banner";
import NewInGamerCorner from "../components/home/new-games/NewInGameCorner";
import NewFromWorldVchiban from "../components/home/events/NewFromWorld";
import CreatorCard from "../components/home/creator-card/CreatorCard";
import FooterSeparator from "#/components/ui/footerSeparator/FooterSeparator";

export default function Home() {
  return (
    <section style={{ position: "relative" }}>
      <Banner />
      {/* <CreatorCard />
      <NewFromWorldVchiban />
      <NewInGamerCorner />
      <FooterSeparator /> */}
    </section>
  );
}
