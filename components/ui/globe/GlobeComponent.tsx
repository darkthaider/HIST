// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { countries } from "./countries";
import { SizeMe } from "react-sizeme";
import CustomPointer from "./customPointer";
function GlobeComponent() {
  const globeRef = useRef();

  const sampleCityData = [
    { city: "Maryland", lat: 39.0458, lng: -76.6413, size: "1.25" },
    { city: "Texas", lat: 31.9686, lng: -99.9018, size: "1.25" },
    { city: "Florida", lat: 27.994402, lng: -81.760254, size: "1.25" },
    {
      city: "Washington",
      lat: 47.7511,
      lng: -120.7401,
      size: "1.25",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="23"
          viewBox="0 0 19 23"
          fill="none"
        >
          <path
            d="M11.5857 2.0018C10.3234 1.48128 8.98425 1.94446 7.42089 2.32872C5.92445 2.69659 4.19092 3.04808 2.03233 2.71406L2.02949 2.33167C2.21551 2.22134 2.36982 2.05937 2.45946 1.84199C2.67528 1.3186 2.43638 0.723749 1.92594 0.513268C1.41549 0.302787 0.826676 0.556522 0.610925 1.07975C0.411752 1.56276 0.603479 2.09961 1.03507 2.34619L1.00559 22.5177L2.0072 22.5063L2.01814 13.4238C3.84907 13.5864 5.35437 13.2816 6.62462 13.0711C7.98663 12.8453 9.03618 12.7387 10.1179 13.3074C10.316 13.4114 10.3465 13.4895 10.3637 13.6947C10.3521 14.3204 10.0801 14.8646 9.90268 15.4276C9.74481 15.9614 9.88097 16.3787 10.4698 16.4497C13.1889 16.2247 15.6003 16.6855 18.0861 17.7105C18.2607 17.7852 18.4784 17.7463 18.6208 17.6149C18.7633 17.4836 18.8231 17.2666 18.7676 17.082C17.8885 14.0329 16.4674 9.67199 18.7694 7.40676C18.9744 7.20976 18.9701 6.83412 18.7606 6.64956C17.4825 5.52769 15.6809 5.32374 13.8423 5.34051C13.3467 3.99311 12.7583 2.51026 11.586 2.00199L11.5857 2.0018ZM2.0302 4.87011C2.74537 6.68462 2.64739 8.40201 2.02426 10.0477L2.0302 4.87011Z"
            fill="#FE490C"
          />
        </svg>
      ),
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      if (globeRef.current) {
        globeRef.current.controls().enableZoom = false;
        globeRef.current.controls().autoRotate = false;
        globeRef.current.cameraDistanceRadiusScale = 1;
        console.log(globeRef.current.getGlobeRadius(), "reef globe");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [globeRef.current]);

  const customPointColor = (city) => city.svg;
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
              pointColor={() => customPointColor}
              pointAltitude={0.001}
              pointLabel={"city"}
              pointRadius="size"
              hexPolygonsData={countries.features}
              hexPolygonResolution={3}
              hexPolygonMargin={0.7}
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
