
"use client";

import styles from "./loader.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';




const Loader = () => {
  const loaderRef = useRef(null);
  useEffect(() => {
    const loaderTimeline = gsap.timeline();
    loaderTimeline.to('.progresss', { duration: 5, width: "100%",  ease: "Power4.Out",
      onUpdate: () => {
        const counter = Math.round(loaderTimeline.progress() * 100);
        countPercent(counter);
      },
      onComplete: () => {
        loaderTimeline.to(loaderRef.current, {
          duration: 0.8,
          yPercent:-100,
          display:"none"
        })
        loaderTimeline.to(".heroFade", {
          // rotate: 360,
          duration: 1.2,
          y: "-20px",
          opacity:1
        })
      }
     });

    const countPercent = (counter:any) => {
      const count = document.querySelector(".count");
      if (count) {
        const fotmateCount = counter < 10 ? `00${counter}`: counter < 100 ? `0${counter}` : counter;
        count.textContent =fotmateCount;
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
