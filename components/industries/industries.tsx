import TextAnimation from "../ui/textAnimation/textAnimation";

const Industries = () => {
  return (
    <section
      id="industries"
      className="hist-outer-container vertical-padding-48-82"
    >
      <div className="hist-inner-container">
        <div className="desc-16-20 text-hist_white-500 flex capitalize">
          <span className="subtitle-rectangle"></span>
          Industries we serve
        </div>
        <TextAnimation>
          <h2 className="title-32-76 text-hist_white-900 mt-[22px] max-w-[1170px]">
            We have vast experience in healthcare working with previous
            experience working with the best in the industry{" "}
            <span className="bg-hist_red leading-[1] text-hist_black inline-block pt-[12px]">
              Pharmaceutical
            </span>
          </h2>
        </TextAnimation>
      </div>
    </section>
  );
};

export default Industries;
