"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Loader = () => {
  const loaderRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const loaderTimeline = gsap.timeline();
    loaderTimeline.to(".progresss", {
      duration: 1.5,
      width: "100%",
      ease: "Power4.Out",
      onUpdate: () => {
        const counter = Math.round(loaderTimeline.progress() * 100);
        countPercent(counter);
      },
      onComplete: () => {
        loaderTimeline.to(loaderRef.current, {
          duration: 0.8,
          yPercent: -100,
          display: "none",
        });
        loaderTimeline.to(".heroFade", {
          // rotate: 360,
          duration: 1.2,
          y: "-20px",
          opacity: 1,
        });
        document.body.style.overflow = "auto";
      },
    });

    const countPercent = (counter: any) => {
      const count = document.querySelector(".count");
      if (count) {
        const fotmateCount =
          counter < 10
            ? `00${counter}`
            : counter < 100
            ? `0${counter}`
            : counter;
        count.textContent = fotmateCount;
      }
    };

    return () => {
      loaderTimeline.kill();
    };
  }, []);
  return (
    <>
      <section className="loaderrrSection" ref={loaderRef}>
        <div className="pl-6 pr-6 w-full h-full">
          <div className="progressLoaderr">
            <div className="progresss"></div>
          </div>
        </div>
        <div className="count">000</div>
      </section>
    </>
  );
};
export default Loader;
