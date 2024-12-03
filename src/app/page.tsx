import Banner from "../components/home/Banner";
import NewInGamerCorner from "../components/home/new-games/NewInGameCorner";
import NewFromWorldVchiban from "../components/home/events/NewFromWorld";
import CreatorCard from "../components/home/creator-card/CreatorCard";

export default function Home() {
  return (
    <section className="home">
      <Banner />
      <CreatorCard />
      <NewFromWorldVchiban />
      <NewInGamerCorner />
    </section>
  );
}
