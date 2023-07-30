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
    <section className="vertical-padding-48-82">
      <div className="hist-inner-container px-2 sm:text-center text-left">
        <div className="desc-16-20 text-hist_white-500 flex capitalize sm:justify-center">
          <span className="subtitle-rectangle"></span>
          services
        </div>
        <h2
          className={`${styles.servicesTitle} title-32-76 text-hist_white-900 }`}
        >
          Claim Sovereignty Over New Territory and subtitle.
        </h2>

        <p className={`${styles.servicesDesc} text-hist_white-800 desc-16-20`}>
          We provide high quality end to end services & tools to help grow with
          you and plant your companies flag in new markets!
        </p>
        <div className={`${styles.allServices} sm:hidden`}>
          {services.map((data) => (
            <div key={data.number} className="mt-8">
              <span className="text-hist_white-500">{data.number}</span>
              <p className={` ${styles.serviceTxt} text-hist_white-800 mt-1`}>
                {data.text}
              </p>
              <span
                className={`${styles.borderLine} bg-hist_white-500 block`}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
