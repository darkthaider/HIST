import { TypingText } from "./typingText";

const Industries = () => {
  return (
    <section
      id="industries"
      className="hist-outer-container vertical-padding-48-82"
    >
      <div className="hist-inner-container">
        <div
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          className="desc-16-20 text-hist_white-500 flex capitalize"
        >
          <span className="subtitle-rectangle"></span>
          Industries we serve
        </div>

        <h2
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="200"
          className="title-32-76 text-hist_white-900 mt-[22px] max-w-[1170px]"
        >
          We have vast experience working with a myriad of companies in the{" "}
          <br />
          <span className="bg-hist_red leading-[1] text-hist_black inline-block pt-[12px] px-1">
            <TypingText />
          </span>{" "}
          industry
        </h2>
      </div>
    </section>
  );
};

export default Industries;
