"use client";

import styles from "./loader.module.scss";
import { useEffect, useRef, useState } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
      document.body.style.overflow = "auto";
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      {showLoader && (
        <section className={styles.loaderWrapper}>
          <div className={styles.progressLoader}>
            <div className={styles.progress}></div>
          </div>
        </section>
      )} 
    </>
  );
};
export default Loader;
