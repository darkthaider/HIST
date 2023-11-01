"use client";

import styles from "./loader.module.scss";
import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';



const Loader = () => {
  // const loaderRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);


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
      {showLoader && (
        <section className={styles.loaderWrapper}>
          <div className={styles.progressLoader}>
            <div className={styles.progress}></div>
          </div>
        </section>
      )} 


      {/* gsap loader */}
        {/* <div className={styles.loaderContainer} ref={loaderRef}>
      <div className="loaderrr"></div>
    </div> */}
    </>
  );
};
export default Loader;
