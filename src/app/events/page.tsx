import Image from "next/image";
import SparklesEvents from "../../assets/svg/sparkles-events";
import SparklesPremierExperience from "../../assets/svg/sparkles-premier-experience";
import "./Events.scss";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import FooterSeparator from "#/components/ui/footerSeparator/FooterSeparator";
const Events = () => {
  return (
    <div className="events">
      <HeaderSection
        as="header"
        title="EVENTS."
        SparklesComponent={SparklesEvents}
        description="See the upcoming events we’ll be attending around the world!"
        customStyles="events"
      />

      <section className="nothing-to-see">
        <p>
          More Info <br /> Soon 👀
        </p>
        <p>
          Coming soon! <br /> <span>Stay tuned for more info!</span>
        </p>
      </section>
      <section>
        <HeaderSection
          as="div"
          title="WE MAKE <br />PREMIER EXPERIENCES."
          SparklesComponent={SparklesPremierExperience}
          customStyles="premier"
          headingLevel="h2"
        />

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
      <section className="container">
        <div className="image-stack">
          <div className="image-1">
            <Image
              src="https://framerusercontent.com/images/BfyxP4XFuXRdI0QtCWJnEKZVNM.png"
              alt="image 1"
              layout="responsive"
              width={791}
              height={1274}
            />
          </div>
          <div className="image-2">
            <Image
              src="https://framerusercontent.com/images/MkvH4T0NBgnRAdpEDe1H3Yhzg10.png"
              alt="image 1"
              layout="responsive"
              width={791}
              height={1274}
            />
          </div>
          <div className="image-3">
            <Image
              src="https://framerusercontent.com/images/ytgjSDtqPpKOUU27lbjMUkItFpU.jpg"
              alt="image 1"
              layout="responsive"
              width={791}
              height={1274}
            />
          </div>
          <div className="image-4">
            <Image
              src="https://framerusercontent.com/images/aBco0HxVVv03dg43G13LkVBkw.png"
              alt="image 1"
              layout="responsive"
              width={791}
              height={1274}
            />
          </div>
        </div>

        <div className="description">
          <div>
            <p>
              Not only can we provide live entertainment and engaging
              discussions, but we also love to play games! Whether showcasing
              our gaming skills, hosting game tournaments, or even offering live
              commentary, we are here to make your event even more exciting. We
              can provide anything from thrilling half-time shows to
              entertaining multi-hour panels.
            </p>
            <br />
            <p>
              To ensure the highest quality experience, we have invested in
              state-of-the-art streaming and facial capture technology. These
              tools allow us to deliver top-notch visuals and seamless
              interactions during our performances.
            </p>
          </div>

          <div>
            <p>Would you like to discuss bookings or have an inquiry for us?</p>
            <button>send us an email</button>
          </div>
        </div>
      </section>

      <FooterSeparator />
    </div>
  );
};

export default Events;
