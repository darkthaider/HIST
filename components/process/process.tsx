"use client";

import { processCard } from "./processCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Process = () => {
  return (
    <section
      id="process"
      className="hist-outer-container vertical-padding-48-82"
    >
      <div className="hist-inner-container ">
        <div
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          className="desc-16-20 text-hist_white-500 capitalize flex "
        >
          <span className="subtitle-rectangle"></span>
          Process
        </div>
        <h2
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="200"
          className="title-32-76 text-hist_white-900 mt-[22px] mb-[90px] md:mb-[120px] "
        >
          How We Work with you
        </h2>
      </div>
      <div
        data-aos-once={true}
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay="300"
      >
        <Swiper
          spaceBetween={56}
          modules={[FreeMode, Thumbs, Navigation]}
          className="customSwiper"
          slidesPerView="auto"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            568: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1.5,
            },
            992: {
              slidesPerView: 1.5,
            },
            1200: {
              slidesPerView: 1.5,
            },
          }}
          navigation={{
            nextEl: ".process-button-next",
            prevEl: ".process-button-prev",
          }}
        >
          <div>
            {processCard.map((data, index) => (
              <SwiperSlide key={index} className="processSlide">
                <div
                  key={index}
                  className="cardWrap block justify-between items-center flex-wrap process-card-vertical-padding-48-112 process-card-horizontal-padding-32-64 xl:flex"
                >
                  <div>
                    <span>{data.icon}</span>
                    <p className="text-hist_white-900 process-card-32-48 xl:mt-[118px] mt-[48px] lgMax:mb-[48px]">
                      {data.title}
                    </p>
                  </div>
                  <p className="xl:max-w-[382px] desc-16-20 text-hist_white-500">
                    {data.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="absolute w-[100%] flex justify-between top-[50%] translate-y-[-50%] z-10 px-4">
          <button
            className="process-button-prev h-[50px] w-[50px] bg-hist_white-900 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <svg
              stroke="currentColor"
              fill="#FE490C"
              stroke-width="0"
              viewBox="0 0 256 512"
              color="#399af4"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(57, 154, 244)" }}
            >
              <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
            </svg>
          </button>
          <button
            className="process-button-next h-[50px] w-[50px] bg-hist_white-900 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <svg
              stroke="currentColor"
              fill="#FE490C"
              stroke-width="0"
              viewBox="0 0 256 512"
              color="#399af4"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(57, 154, 244)" }}
            >
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
