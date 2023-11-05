"use client";

import styles from "./loader.module.scss";
import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';



const Loader = () => {
  // const loaderRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowLoader(false);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  useEffect(() => {

    const counter3 = document.querySelector(".counter-3");

    for(let i = 0; i < 2; i++){
      for(let j = 0; j < 10; j++){
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        counter3?.appendChild(div)
      }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3?.appendChild(finalDiv)

function(counter, duration, delay = 0){
  const numHeight = counter.querySelector(".num").clientHeight;
  const totalDistance = (counter.querySelectorAll(".num").lenght - 1) * numHeight
}
  }, [])


  // Gsap timeline to show loader
  // useEffect(() => {

  //   const loaderTimeline = gsap.timeline({ repeat: -1, yoyo: true });
  //   loaderTimeline.to('.loaderrr', { duration:3, scale: 12 });
  //   loaderTimeline.to('.loaderrr', { duration: 1, opacity: 0, onComplete: () => {
  //     // This function is called when the animation is complete.
  //     // You can do any necessary cleanup or hide the loader container here.
  //     // const loaderContainer = document.querySelector('.loaderContainer');
  //     if (loaderRef.current) {
  //       loaderRef.current.style.display = 'none'; // Hide the loader container
  //     }
  //   }});
  //   return () => {
  //     loaderTimeline.kill();
  //   };
  // }, []);
  return (
    <>
      {/* {showLoader && (
        <section className={styles.loaderWrapper}>
          <div className={styles.progressLoader}>
            <div className={styles.progress}></div>
          </div>
        </section>
      )}  */}


      {/* gsap loader */}
        {/* <div className={styles.loaderContainer} ref={loaderRef}>
      <div className="loaderrr"></div>
    </div> */}
    <div className="loading-wrap">
    <div className="loading-screen">
      <div className="loader">
        <div className="loader-1 bar"></div>
        <div className="loader-2 bar"></div>
      </div>
      <div className="counter">
        <div className="counter-1 digit">
          <div className="num">
            0
          </div>
            <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div className="counter-3 digit">
        <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
        </div>
      </div>
    </div>

    </div>


    </>
  );
};
export default Loader;
