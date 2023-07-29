"use client";

import styles from "./testimonial.module.scss";
import Image from "next/image";
import comma from "../../public/comma.svg";
import arrowLeft from "../../public/arrowLeft.svg";
import arrowRight from "../../public/arrowRight.svg";

import {
  testimonialSlides,
  slideDesc,
} from "../../constants/testimonialSlides";

import { useRef, FC, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs, Navigation } from "swiper/modules";

const Testimonials: FC<any> = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section
      className={`${styles.TestimonialSliderWrapper} hist-outer-container vertical-padding-32-82`}
    >
      <div className="hist-inner-container px-2">
        <div className="flex md:justify-center">
          <Image src={comma} alt="comma" />
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
          <div className={styles.testimonialsThumb}>
            {testimonialSlides.map((data, index) => (
              <SwiperSlide key={index}>
                <p
                  className={`${styles.testimonial} text-hist_white-900 testimonial-title-16-36 md:text-center `}
                >
                  {data.detail}
                </p>
                <p className="text-hist_white-900 flex flex-wrap md:justify-center">
                  {data.name}{" "}
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
            <Image src={arrowLeft} alt="arrowLeft" />
          </div>
          <span className={`${styles.swiperLine} bg-hist_white-500`}></span>
          <div className="custom-arrow custom-arrow-prev stories-button-next">
            <Image src={arrowRight} alt="arrowRight" />
          </div>
        </div>
        {/* <Swiper
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
        </Swiper> */}
      </div>
    </section>
  );
};

export default Testimonials;
