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
    <section className="vertical-padding-48-82">
      <div className="hist-inner-container">
        <div className="desc-16-20 text-hist_white-500 capitalize ">
          <span className="subtitle-rectangle"></span>
          Locations
        </div>
        <h2 className="title-32-76 text-hist_white-900 mt-[22px] mb-[120px] ">
          How We Work with you
        </h2>
      </div>
      <Swiper
        loop={true}
        spaceBetween={56}
        modules={[FreeMode, Thumbs, Navigation]}
        className="customSwiper"
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1.5,
          },
        }}
      >
        <div>
          {processCard.map((data, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="cardWrap flex justify-between items-center process-card-vertical-padding-48-112 process-card-horizontal-padding-32-64"
              >
                <div>
                  <span>{data.icon}</span>
                  <p className="text-hist_white-900 process-card-32-48 mt-[118px]">
                    {data.title}
                  </p>
                </div>
                <p className="max-w-[382px] desc-16-20 text-hist_white-500">
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
