"use client";

import styles from "./circles.module.scss";
import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const Circles = () => {
  const particlesInit2 = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  return (
    <section className={`${styles.circleWraper} md:left-[35%] `}>
      <div className={`${styles.circleParticleWrap} mdMax:left-[72px]`}>
        <Particles
          id="tsparticles2"
          init={particlesInit2}
          options={{
            particles: {
              number: {
                value: 4000,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              //   color: {
              //     value: "#FE490C",
              //   },
              color: {
                value: [
                  "rgba(251,72,12, 0)",
                  "rgba(251,72,12, 0.2)",
                  "rgba(251,72,12, 0.3)",
                  "rgba(251,72,12, 0.4)",
                  "rgba(251,72,12, 0.5)",
                  "rgba(251,72,12, 0.6)",
                  "rgba(251,72,12, 0.7)",
                  "rgb(251,72,12)",
                ],
              },
              fill: {
                value: "random", // Randomly pick colors from the array
              },

              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.4,
                random: true,
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.3,
                  sync: true,
                },
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
                trail: {
                  enable: true,
                  length: 5, // Adjust the length of the trails
                  fillColor: "transparent", // Set the color of the trails
                  //   fillColor: "rgba(251, 72, 12, 0.4)",
                },
              },
            },
            fullScreen: {
              enable: false,
              zIndex: -1,
            },

            retina_detect: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </section>
  );
};

export default Circles;
