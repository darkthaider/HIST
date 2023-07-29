import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <section className="hist-outer-container vertical-padding-32-82">
      <div className="hist-inner-container px-2">
        <div className="desc-16-20 text-hist_white-500 flex capitalize">
          <span className="subtitle-rectangle"></span>
          services
        </div>
        <h2
          className={` ${styles.experienceTitle} title-32-76 text-hist_white-900 `}
        >
          With 30+ years of experience we position companies to become
          Monopolies.
        </h2>
        <div className={`${styles.expDesc} flex justify-end`}>
          <p className="text-hist_white-800 desc-16-20">
            Our services include market research, product positioning and
            branding, distribution network management, regulatory compliance,
            and much more. We understand that expanding to new markets can be
            challenging, which is why we work closely with our clients to ensure
            that their products are well received and reach their target
            audience. With our expertise, we help our clients overcome any
            obstacles and achieve success in the Middle East.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Experience;
