import Sparkles from "./assets/svg/sparkles";
import "./Home.scss";
import Image from "next/image";

export default function Home() {
  return (
    <section className="home">
      <div className="banner">
        <div className="section-title">
          <h1 className="title">
            FOUND FAMILY <br />
            INDIE GROUP.
          </h1>
          <Sparkles className="sparkles" />
        </div>
        <div className="stars">
          {/* <Image
            src="https://framerusercontent.com/images/egsCxJ8bBLJnBeLd3zJ2zHu3K8.png?scale-down-to=1024"
            alt="Picture of the author"
            fill={true}
          /> */}
        </div>
      </div>
    </section>
  );
}
