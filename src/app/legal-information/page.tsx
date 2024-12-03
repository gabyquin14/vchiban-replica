import "./Legal.scss";
import LegalExclMark1 from "../../assets/svg/legal-excl-mark1";
import LegalExclMark2 from "../../assets/svg/legal-excl-mark2";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";

const LegalInformation = () => {
  return (
    <div className="legal">
      <HeaderSection
        as="header"
        title="LEGAL INFORMATION"
        customStyles="legal"
      />

      <section className="legal-info">
        <article className="legal-disclaimer">
          <h2>Legal Information</h2>
          <p>
            This page provides important legal information regarding your use of
            VchiBan’s intellectual property and services. Please read this
            information carefully before using our services or developing
            content with our intellectual property.
          </p>
        </article>
        <br />
        <article className="legal-disclaimer">
          <h2>Types of Content Development</h2>
          <p>
            Our group’s intellectual property may be used to develop a wide
            range of content, including but not limited to videos, music,
            artwork, and other creative works. However, it is important to note
            that any content developed using our intellectual property must
            comply with our guidelines and be used for non-commercial purposes
            unless otherwise agreed upon.
          </p>
        </article>
        <br />
        <article className="legal-disclaimer">
          <h2>Commercial Projects</h2>
          <p>
            If you are interested in using our intellectual property for
            commercial purposes, such as advertising or marketing, please
            contact us to discuss licensing arrangements and other details.
          </p>
        </article>
        <br />
        <article className="legal-disclaimer">
          <h2>Original Content</h2>
          <p>
            Our group is committed to protecting the intellectual property
            rights of our team members and creators. Any content created by our
            team members, including but not limited to videos, music, and
            artwork, is all under the free use act and can be used appropriately
            under those terms!
          </p>
        </article>
        <br />
        <article className="legal-disclaimer">
          <h2>Usage of Logos and Trademarks</h2>
          <p>
            Our logos and trademarks are important elements of our brand
            identity and are protected under trademark law. They may not be used
            without our permission for commercial purposes. However, fan content
            or original content may be an exception!
          </p>
        </article>
        <br />
        <article className="legal-disclaimer">
          <h2>Sharing Projects with the Community</h2>
          <p>
            We encourage our team members and creators to share their projects
            and content with the community! However, any content shared must
            comply with our guidelines and may not contain any inappropriate or
            offensive material.
          </p>
          <br />
          <p>
            By using our services or developing content with our intellectual
            property, you agree to comply with all of our guidelines and legal
            requirements. Failure to do so may result in legal action. If you
            have any questions or concerns about our legal information, please
            contact us for further assistance!
          </p>
        </article>
      </section>
      <div className="exclamation-marks">
        <LegalExclMark1 />
        <LegalExclMark2 />
      </div>
    </div>
  );
};

export default LegalInformation;
