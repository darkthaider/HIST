import styles from "./service.module.scss";

const services = [
  {
    number: "01",
    text: "Distribution",
  },
  {
    number: "02",
    text: "Consultancy",
  },
  {
    number: "03",
    text: "Marketing",
  },
  {
    number: "04",
    text: "Training",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="vertical-padding-48-82 hist-outer-container"
    >
      <div className="hist-inner-container sm:text-center text-left">
        <div className="desc-16-20 text-hist_white-500 flex capitalize sm:justify-center">
          <span className="subtitle-rectangle"></span>
          services
        </div>
        <h2
          className={`${styles.serviceTitle} title-32-76 text-hist_white-900 lgMax:max-w-[600px] max-w-[880px] mb-[16px] mt-[28px] mx-auto }`}
        >
          Claim Sovereignty Over New Territory and subtitle.
        </h2>

        <p className="text-hist_white-800 desc-16-20 mdMax:max-w-[500px] sm:mx-auto md:max-w-[580px]">
          We provide high quality end to end services & tools to help grow with
          you and plant your companies flag in new markets!
        </p>
        <div className={`${styles.allServices} md:hidden mt-[56px]`}>
          {services.map((data) => (
            <div key={data.number} className="mt-[28px]">
              <span className="text-hist_white-500">{data.number}</span>
              <p className={` ${styles.serviceTxt} text-hist_white-800 mt-1`}>
                {data.text}
              </p>
              <span
                className={`${styles.borderLine} bg-hist_white-500 block mt-[20px] w-full h-[1px]`}
              ></span>
            </div>
          ))}
        </div>
        <div className={`${styles.dummySpace} mdMax:hidden`}></div>
      </div>
    </section>
  );
};

export default Services;
