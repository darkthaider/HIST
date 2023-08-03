import TextAnimation from "../ui/textAnimation/textAnimation";

const Locations = () => {
  return (
    <section className="hist-outer-container vertical-padding-48-82">
      <div className="hist-inner-container sm:text-center text-left">
        <div className="desc-16-20 text-hist_white-500 flex capitalize sm:justify-center">
          <span className="subtitle-rectangle"></span>
          Locations
        </div>
        <TextAnimation>
          <h2 className="title-32-76 text-hist_white-900 max-w-[1190px] m-auto mt-[22px] ">
            We are worldwide. <br /> Operating across emerging markets that are
            ripe for the taking...
          </h2>
        </TextAnimation>
      </div>
    </section>
  );
};
export default Locations;
