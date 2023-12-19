// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { SizeMe } from "react-sizeme";
import { countries } from "./countries";
import { useCallback } from 'react';

function GlobeComponent() {
  const globeRef = useRef();
  const markerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
  <g filter="url(#filter0_f_839_3)">
  <circle cx="29.5" cy="29.5" r="9.5" fill="#FE490C"/>
  </g>
  <circle cx="29.5" cy="29.5" r="4.5" fill="white"/>
  <defs>
  <filter id="filter0_f_839_3" x="0" y="0" width="59" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_839_3"/>
  </filter>
  </defs>
  </svg>`;

  const myCordinates = [
    { lat: 42.3601, lng: 71.0589, city: "Boston, MA, USA" },
    { lat: 30.0444, lng: 31.2357, city: "Cairo, Egypt" },
    { lat: 13.0827, lng: 80.2707, city: "Chennai, India " },
    { lat: 29.3117, lng: 47.4818, city: "Kuwait" },
    { lat: 31.5204, lng: 74.3587, city: "Lahore, Pakistan " },
    { lat: 24.7136, lng: 46.6753, city: "Riyadh , Saudi Arabia " },
    { lat: 25.2854, lng: 51.5310, city: "Doha, Qatar " },
    { lat: 25.2048, lng: 55.2708, city: "Dubai, UAE " },
    { lat: 40.7128, lng: 74.0060, city: "New York City, NY, USA " },
  ];

  const gData = myCordinates.map((coordinates) => ({
    lat: coordinates.lat,
    lng: coordinates.lng,
    city: coordinates.city,
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (globeRef.current) {
        globeRef.current.controls().enableZoom = false;
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.1;
        const selectedLocation = {
          lat: 10.3753,
          lng: 79.3451,
          city: "Pakistan",
        };
        globeRef.current.pointOfView(selectedLocation, 0);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);



  // const ResCallBack = useCallback(() => 3, [])
  const MarginCallBack = useCallback(() => 0.7, [])
  const ColorCallBack = useCallback(() => "#FE490C", [])

  return (
    <section
      className="hist-outer-container  overflow-hidden customGlobeContainer relative h-screen"
      style={{ position: "relative" }}
    >
      <div className="hist-inner-container sm:text-center text-left locationText">
        <div
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          className="desc-16-20 text-hist_white-500 flex capitalize sm:justify-center"
        >
          <span className="subtitle-rectangle"></span>
          Locations
        </div>

        <h2
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="200"
          className="title-32-76 text-hist_white-900 max-w-[1300px] m-auto mt-[22px] "
        >
          We are worldwide. <br /> Operating across emerging markets that are
          ripe for the taking...
        </h2>
      </div>
      <div
        data-aos-once={true}
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay="300"
        style={{ width: "100%", paddingBottom: "75%" }}
      >
        <SizeMe>
          {({ size: { width, height } }) => (
            <Globe
              ref={globeRef}
              width={width}
              height={(width / 4) * 9}
              htmlElement={(gData) => {
                const el = document.createElement("div");
                el.className = "custom-markerss";
                el.innerHTML = markerSvg;
                el.style["pointer-events"] = "auto";
                el.style.cursor = "pointer";
                const tooltip = document.createElement("div");
                tooltip.className = "tooltipss";
                tooltip.textContent = gData.city;
                tooltip.style.display = "none";
                el.onmouseenter = () => {
                  tooltip.style.display = "block";
                };
                el.onmouseleave = () => {
                  tooltip.style.display = "none";
                };
                el.appendChild(tooltip);
                return el;
              }}
              htmlElementsData={gData}
              backgroundColor="#161616"
              // markerData={myCordinates}
              hexPolygonsData={countries.features}
              // hexPolygonResolution={ResCallBack}
              hexPolygonUseDots={true}
              hexPolygonMargin={MarginCallBack}
              hexPolygonColor={ColorCallBack}
              showAtmosphere={false}
              showGlobe={false}
            />
          )}
        </SizeMe>
      </div>
    </section>
  );
}
export default GlobeComponent;
