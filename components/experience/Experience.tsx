import Circles from "../circles/circles";
import TextAnimation from "../ui/textAnimation/textAnimation";

const Experience = () => {
  return (
    <section className="hist-outer-container vertical-padding-48-82 relative">
      <div className="hist-inner-container">
        <div
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          className="desc-16-20 text-hist_white-500 flex capitalize"
        >
          <span className="subtitle-rectangle"></span>
          experience
        </div>

        <h2
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="200"
          className="title-32-76 text-hist_white-900 lgMax:max-w-[716px] max-w-[1013px] mt-[28px]"
        >
          With 25+ years of experience we position companies to win.
        </h2>
        <div
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="300"
          className={`justify-end lg:flex block mt-[60px] md:mt-[160px]`}
        >
          <p className="text-hist_white-800 desc-16-20 max-w-[648px]">
            {`At HIST Group, we merge 25 years of medical distribution experience
            with cutting-edge AI to redefine global healthcare expansion.
            Whether you're a startup or an established enterprise, we help you
            seamlessly enter and scale in the Middle East.`}
          </p>
        </div>
      </div>
      <Circles />
    </section>
  );
};
export default Experience;
