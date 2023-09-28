import Circles from "../circles/circles";
import TextAnimation from "../ui/textAnimation/textAnimation";

const Experience = () => {
  return (
    <section className="hist-outer-container vertical-padding-48-82 relative">
      <div className="hist-inner-container">
        <div className="desc-16-20 text-hist_white-500 flex capitalize">
          <span className="subtitle-rectangle"></span>
          experience
        </div>
        {/* <TextAnimation> */}
        <h2 className="title-32-76 text-hist_white-900 lgMax:max-w-[716px] max-w-[1013px] mt-[28px]">
          With 30+ years of experience we position companies to become
          Monopolies.
        </h2>
        <div className={`justify-end lg:flex block mt-[242px]`}>
          <p className="text-hist_white-800 desc-16-20 max-w-[648px]">
            Our services include market research, product positioning and
            branding, distribution network management, regulatory compliance,
            and much more. We understand that expanding to new markets can be
            challenging, which is why we work closely with our clients to ensure
            that their products are well received and reach their target
            audience. With our expertise, we help our clients overcome any
            obstacles and achieve success in the Middle East.
          </p>
        </div>
        {/* </TextAnimation> */}
      </div>
      <Circles />
    </section>
  );
};
export default Experience;
