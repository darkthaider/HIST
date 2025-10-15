"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./service.module.scss";
import servicesImg from "@/public/services.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    number: "01",
    text: "Distribution",
  },
  {
    id: 2,
    number: "02",
    text: "Consultancy",
  },
  { id: 3, number: "03", text: "Marketing" },
  {
    id: 4,
    number: "04",
    text: "Training",
  },
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const flagsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1200) return;

    const ctx = gsap.context(() => {
      const servicesTimeline = gsap
        .timeline()
        .to(".flag-1,.flag-line-1", { height: 270, opacity: 1 })
        .to(".flag-2,.flag-line-2", { height: 270, opacity: 1 })
        .to(".flag-3,.flag-line-3", { height: 270, opacity: 1 })
        .to(".flag-4,.flag-line-4", { height: 270, opacity: 1 });

      const st = ScrollTrigger.create({
        animation: servicesTimeline,
        trigger: servicesRef.current!,
        start: "top top",
        end: "+=1500", // scroll distance
        pin: flagsRef.current!, // pin only the flags row to avoid overlapping siblings
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 3,
        invalidateOnRefresh: true,
      });

      return () => {
        servicesTimeline.kill();
        st.kill();
      };
    }, servicesRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="services"
      className="vertical-padding-48-82 hist-outer-container overflow-x-hidden"
    >
      <div ref={servicesRef}>
        <div className="hist-inner-container sm:text-center text-left">
          <div
            data-aos-once={true}
            data-aos="fade-up"
            data-aos-duration={1000}
            className="desc-16-20 text-hist_white-500 flex capitalize sm:justify-center"
          >
            <span className="subtitle-rectangle"></span>
            services
          </div>
          {/* <TextAnimation> */}
          <h2
            data-aos-once={true}
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay="200"
            className={`${styles.serviceTitle} title-32-76 text-hist_white-900 lgMax:max-w-[600px] max-w-[990px] mb-[16px] mt-[28px] mx-auto }`}
          >
            One Point of Contact. Full Regional Coverage.
          </h2>

          <p
            data-aos-once={true}
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay="300"
            className="text-hist_white-800 desc-16-20 mdMax:max-w-[500px] sm:mx-auto md:max-w-[580px]"
          >
            At HIST, we are your one trusted partner for all MENA distribution.
            No more managing multiple contracts, timelines, or teams. We
            handpick and oversee top local distributors, while you work directly
            with us.
          </p>
          <div
            className={`${styles.allServices} md:grid grid-cols-2 gap-4 xl:hidden mt-[56px] overflow-y-hidden`}
          >
            {services.map((data, index) => (
              <div
                data-aos-once={true}
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={300}
                key={data.number}
                className="mt-[28px]"
              >
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
          <div
            ref={flagsRef}
            className="border-b border-b-hist_white-500 services min-h-[270px] mt-[204px] xl:flex items-end hidden"
          >
            {services.map((service) => (
              <div
                key={service.number}
                className={`grow h-0 w-[25%] opacity-0 relative overflow-hidden flag-${service.id}`}
              >
                <span
                  className={`bg-redWhiteLine inline-block h-0 absolute w-[1px] left-0 top-[5px] flag-line-${service.id}`}
                ></span>
                <div className="flex gap-2 ml-[-1px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                  >
                    <path
                      d="M11.5857 2.0018C10.3234 1.48128 8.98425 1.94446 7.42089 2.32872C5.92445 2.69659 4.19092 3.04808 2.03233 2.71406L2.02949 2.33167C2.21551 2.22134 2.36982 2.05937 2.45946 1.84199C2.67528 1.3186 2.43638 0.723749 1.92594 0.513268C1.41549 0.302787 0.826676 0.556522 0.610925 1.07975C0.411752 1.56276 0.603479 2.09961 1.03507 2.34619L1.00559 22.5177L2.0072 22.5063L2.01814 13.4238C3.84907 13.5864 5.35437 13.2816 6.62462 13.0711C7.98663 12.8453 9.03618 12.7387 10.1179 13.3074C10.316 13.4114 10.3465 13.4895 10.3637 13.6947C10.3521 14.3204 10.0801 14.8646 9.90268 15.4276C9.74481 15.9614 9.88097 16.3787 10.4698 16.4497C13.1889 16.2247 15.6003 16.6855 18.0861 17.7105C18.2607 17.7852 18.4784 17.7463 18.6208 17.6149C18.7633 17.4836 18.8231 17.2666 18.7676 17.082C17.8885 14.0329 16.4674 9.67199 18.7694 7.40676C18.9744 7.20976 18.9701 6.83412 18.7606 6.64956C17.4825 5.52769 15.6809 5.32374 13.8423 5.34051C13.3467 3.99311 12.7583 2.51026 11.586 2.00199L11.5857 2.0018ZM2.0302 4.87011C2.74537 6.68462 2.64739 8.40201 2.02426 10.0477L2.0302 4.87011Z"
                      fill="#FE490C"
                    />
                  </svg>
                  <span className="text-[24px] xl:text-[32px] text-hist_white-800 font-[300]">
                    {service.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
