"use client";
import Image from "next/image";
import SparklesEvents from "../../assets/svg/sparkles/sparkles-events";
import SparklesPremierExperience from "../../assets/svg/sparkles/sparkles-premier-experience";
import "./Events.scss";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import FooterSeparator from "#/components/ui/footerSeparator/FooterSeparator";
import Excl1 from "#/assets/svg/events/excl-1";
import Excl3 from "#/assets/svg/events/excl-3";
import Excl2 from "#/assets/svg/events/excl-2";
import Excl4 from "#/assets/svg/events/excl-4";
import Excl5 from "#/assets/svg/events/excl-5";
import SpringButton from "#/components/ui/springBtn/SpringButton";
import ChevronRight from "#/assets/svg/chevron-right";
import BigStar from "#/assets/svg/home/big-star";
import SmallStar from "#/assets/svg/home/small-star";
import { motion } from "framer-motion";
import { springTransition } from "#/helpers/const-animations";

const Events = () => {
  return (
    <div className="events">
      <div className="header-wrapper">
        <HeaderSection
          as="header"
          title="EVENTS."
          SparklesComponent={SparklesEvents}
          description="See the upcoming events we’ll be attending around the world!"
          customStyles="events"
        />
        <Excl1 className="excl-1" />
        <Excl2 className="excl-2" />
        <Excl3 className="excl-3" />
      </div>

      <section className="nothing-to-see">
        <p>
          <span>More Info </span> <span>Soon 👀 </span>
        </p>
        <p>
          Coming soon! <br /> <span>Stay tuned for more info!</span>
        </p>
      </section>
      <section className="premier-experiences">
        <HeaderSection
          as="div"
          title="<span>WE MAKE</span> <span>PREMIER EXPERIENCES.<span/>"
          SparklesComponent={SparklesPremierExperience}
          customStyles="premier"
          headingLevel="h2"
        />
        <Excl4 className="excl-4" />
        <Excl5 className="excl-5" />

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
            <span className="art-by">Art by: Double_Zr_Tap</span>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="image-stack">
          <motion.div
            className="image-1"
            whileHover={{ top: "0rem" }}
            transition={springTransition}
          >
            <Image
              src="https://framerusercontent.com/images/BfyxP4XFuXRdI0QtCWJnEKZVNM.png"
              alt="image 1"
              layout="responsive"
              width={791}
              height={1274}
            />
          </motion.div>
          <motion.div
            className="image-2"
            whileHover={{ top: "6rem" }}
            transition={springTransition}
          >
            <Image
              src="https://framerusercontent.com/images/MkvH4T0NBgnRAdpEDe1H3Yhzg10.png"
              alt="image 1"
              layout="responsive"
              width={791}
              height={1274}
            />
          </motion.div>
          <motion.div
            className="image-3"
            whileHover={{ top: "-1rem" }}
            transition={springTransition}
          >
            <Image
              src="https://framerusercontent.com/images/ytgjSDtqPpKOUU27lbjMUkItFpU.jpg"
              alt="image 1"
              layout="responsive"
              width={791}
              height={1274}
            />
          </motion.div>
          <motion.div
            className="image-4"
            whileHover={{ top: "6rem" }}
            transition={springTransition}
          >
            <Image
              src="https://framerusercontent.com/images/aBco0HxVVv03dg43G13LkVBkw.png"
              alt="image 1"
              layout="responsive"
              width={791}
              height={1274}
            />
          </motion.div>
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
          <div className="call-to-action">
            <p>Would you like to discuss bookings or have an inquiry for us?</p>

            <SpringButton
              text="send us an email"
              firstIcon="https://framerusercontent.com/images/0ZmqhaWed7cnNFP632ytqTVVDo.svg"
              SecondIcon={ChevronRight}
              isTransitionBouncy
            />
          </div>
          <BigStar className="big" />
          <SmallStar className="small" />
          <SmallStar className="medium" />
        </div>
      </section>

      <FooterSeparator />
    </div>
  );
};

export default Events;
