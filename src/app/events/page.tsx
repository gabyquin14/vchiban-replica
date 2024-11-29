import SparklesEvents from "../assets/svg/sparkles-events";
import "./Events.scss";
const Events = () => {
  return (
    <div className="events">
      <section className="section-title">
        <h1 className="title">EVENTS.</h1>
        <SparklesEvents className="sparkles" />
        <p className="desc">
          See the upcoming events we’ll be attending around the world!
        </p>
      </section>
      <section className="nothing-to-see">
        <p>
          More Info <br /> Soon 👀
        </p>
        <p>
          Coming soon! <br /> <span>Stay tuned for more info!</span>
        </p>
      </section>
    </div>
  );
};

export default Events;
