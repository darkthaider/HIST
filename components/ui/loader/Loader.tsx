
"use client";

import styles from "./loader.module.scss";
import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';



const Loader = () => {
  const loaderRef = useRef(null);
  // const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowLoader(false);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);




  // Gsap timeline to show loader
  useEffect(() => {

    const loaderTimeline = gsap.timeline();
    loaderTimeline.to('.progresss', { duration:5, width: 150 }).to(loaderRef.current, { duration: 1, y: -1000, onComplete: () => {
      console.log('Section animation complete');
    } }); 
    return () => {
      loaderTimeline.kill();
    };
  }, []);
  return (
    <>
        <section className="loaderrrSection" ref={loaderRef}>
          <div className="progressLoaderr">
            <div className="progresss"></div>
          </div>
        </section>
    </>
  );
};
export default Loader;
