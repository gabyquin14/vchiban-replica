import Image from "next/image";
import SparklesEvents from "../assets/svg/sparkles-events";
import SparklesPremierExperience from "../assets/svg/sparkles-premier-experience";
import "./Events.scss";
const Events = () => {
  return (
    <div className="events">
      <section className="section-title">
        <h1 className="title">
          EVENTS.
          <SparklesEvents className="sparkles" />
        </h1>
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
      <section>
        <div className="section-title premier">
          <h1 className="title">
            WE MAKE
            <br />
            PREMIER EXPERIENCES.
            <SparklesPremierExperience className="sparkles" />
          </h1>
        </div>
        <div className="experiences">
          <div className="info">
            <p>
              VchiBan is passionate about creating premier experiences for
              conventions. We aim to provide exciting content to all attendees
              while connecting with our community. We do this through several
              methods; panels, meet and greets, and signings.
            </p>
            <p>
              We specialize in panels that emphasize crowd engagement, such as
              Q&A sessions. We love to share our experiences, insights, and
              stories from the VTubing world. We also talk about Vtubing in a
              broad sense, as well as how we grew within the community.
            </p>
            <p>
              Additionally, we offer advice panels, providing guidance and
              sharing our expertise on various topics related to VTubing,
              content creation, and online communities.
            </p>
            <p>
              One of our specialties is meet and greets, done via a screen. We
              can actively interact with attendees via webcam and microphone,
              creating an eye-catching attraction that stops people in their
              tracks. We love getting to know everyone, taking photos, and
              signing autographs. We pride ourselves on creating a welcoming,
              inclusive environment that encourages even the shyest people to
              open up.
            </p>
          </div>
          <div className="video-wrapper">
            <video loop autoPlay muted playsInline>
              <source
                src="https://framerusercontent.com/assets/ciBvdC3VhDEhF8wreF0hUIubdo.mp4"
                type="video/mp4"
              />
            </video>
            <span>Art by: Double_Zr_Tap</span>
          </div>
        </div>
      </section>
      <section className="image-stack">
        <Image
          src="https://framerusercontent.com/images/BfyxP4XFuXRdI0QtCWJnEKZVNM.png"
          alt="image 1"
          layout="responsive"
          width={791}
          height={1274}
          className="image-1"
        />
        <Image
          src="https://framerusercontent.com/images/MkvH4T0NBgnRAdpEDe1H3Yhzg10.png"
          alt="image 1"
          layout="responsive"
          width={791}
          height={1274}
          className="image-2"
        />
        <Image
          src="https://framerusercontent.com/images/ytgjSDtqPpKOUU27lbjMUkItFpU.jpg"
          alt="image 1"
          layout="responsive"
          width={791}
          height={1274}
          className="image-3"
        />
        <Image
          src="https://framerusercontent.com/images/aBco0HxVVv03dg43G13LkVBkw.png"
          alt="image 1"
          layout="responsive"
          width={791}
          height={1274}
          className="image-4"
        />
      </section>
    </div>
  );
};

export default Events;
