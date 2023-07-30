"use client";

import styles from "./testimonial.module.scss";

import { testimonialSlides, slideDesc } from "./testimonialSlides";

import { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Testimonials: FC<any> = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const swiperRef = useRef(null);
  return (
    <section className="hist-inner-container vertical-padding-48-82">
      <div className="hist-inner-container px-2">
        <div className="flex md:justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="43"
            viewBox="0 0 61 43"
            fill="none"
          >
            <g style={{ mixBlendMode: "color-dodge" }}>
              <path
                d="M31.8885 14.3333C31.8885 6.41253 38.3998 0 46.4442 0C54.4879 0 61 5.94088 61 16.9734C60.9993 32.2501 49.4126 42.8108 36.8684 42.9994C34.7616 42.9994 33.6127 41.7733 33.6127 39.6987V39.6046C33.6127 37.5301 34.1871 36.5868 35.2405 36.3039C38.5925 35.7382 45.391 33.9465 47.5933 28.666C37.2517 28.666 31.8893 22.1593 31.8893 14.3327L31.8885 14.3333ZM15.7048 28.6666C13.5025 33.9471 6.70314 35.7389 3.35204 36.3045C2.29864 36.5873 1.7242 37.5305 1.7242 39.6052V39.6993C1.7242 41.7738 2.87312 43 4.97988 43C17.5243 42.8112 29.1115 32.2501 29.1115 16.974C29.1115 5.94131 22.6001 0.000603806 14.5558 0.000603806C6.51205 0.000603806 0 6.41246 0 14.3339C0.0006681 22.2547 5.26768 28.6665 15.7054 28.6665L15.7048 28.6666Z"
                fill="url(#paint0_radial_56_1758)"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_56_1758"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.5 21.5) rotate(90) scale(104 147.535)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#111111" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <Swiper
          loop={true}
          ref={swiperRef}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Navigation]}
          navigation={{
            nextEl: ".stories-button-next",
            prevEl: ".stories-button-prev",
          }}
        >
          <div>
            {testimonialSlides.map((data, index) => (
              <SwiperSlide key={index}>
                <p
                  className={
                    "text-hist_white-900 testimonial-title-16-36 md:text-center mdMax:mt-[28px] mt-[92px] max-w-[1148px] mx-auto"
                  }
                >
                  {data.detail}
                </p>
                <p className="text-hist_white-900 flex mdMax:flex-wrap md:justify-center mdMax:mt-[64px] mt-[92px] ">
                  {data.name}
                  <span className="text-hist_white-500">
                    {data.designation}
                  </span>
                </p>
                <div className="flex justify-center">
                  <p className="text-hist_white-900">logos</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="flex justify-between items-center">
          <div className="custom-arrow custom-arrow-next stories-button-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.5 6L8.5 12L14.5 18"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
            </svg>
          </div>
          <span
            className={`${styles.swiperLine} bg-hist_white-500 w-full`}
          ></span>
          <div className="custom-arrow custom-arrow-prev stories-button-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.5 6L15.5 12L9.5 18"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
            </svg>
          </div>
        </div>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={1}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
          allowTouchMove={false}
        >
          <div className={`${styles.descSlides} `}>
            {slideDesc.map((desc, index) => (
              <SwiperSlide key={index} className={styles.customSlide}>
                <div className="flex justify-center">
                  <p className="text-hist_white-900">{desc.detail}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
