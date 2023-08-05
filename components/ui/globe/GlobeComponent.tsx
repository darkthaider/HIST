// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { countries } from "./countries";
import { SizeMe } from "react-sizeme";
function GlobeComponent() {
  const globeRef = useRef();

  const sampleCityData = [
    { city: "Maryland", lat: 39.0458, lng: -76.6413, size: "1.25" },
    { city: "Texas", lat: 31.9686, lng: -99.9018, size: "1.25" },
    { city: "Florida", lat: 27.994402, lng: -81.760254, size: "1.25" },
    { city: "Washington", lat: 47.7511, lng: -120.7401, size: "1.25" },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      if (globeRef.current) {
        globeRef.current.controls().enableZoom = false;
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 1;
        globeRef.current.cameraDistanceRadiusScale = 0.5;
        console.log(globeRef.current.getGlobeRadius(), "reef globe");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [globeRef.current]);

  return (
    <section
      className="hist-outer-container  overflow-hidden customGlobeContainer relative h-screen"
      //   style={{ position: "relative" }}
    >
      <div className="" style={{ width: "100%", paddingBottom: "75%" }}>
        <SizeMe>
          {({ size: { width, height } }) => (
            <Globe
              ref={globeRef}
              width={width}
              height={(width / 4) * 9}
              backgroundColor="#161616"
              pointsData={sampleCityData}
              pointColor={() => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="8" fill="red" />
                </svg>
              )}
              pointAltitude={0.001}
              pointLabel={"city"}
              pointRadius="size"
              hexPolygonsData={countries.features}
              hexPolygonResolution={3}
              hexPolygonMargin={0.5}
              hexPolygonColor={() => "#FE490C"}
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
