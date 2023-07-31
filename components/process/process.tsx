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
        <div className="desc-16-20 text-hist_white-500 capitalize flex ">
          <span className="subtitle-rectangle"></span>
          Process
        </div>
        <h2 className="title-32-76 text-hist_white-900 mt-[22px] mb-[90px] md:mb-[120px] ">
          How We Work with you
        </h2>
      </div>
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
    </section>
  );
};

export default Process;
