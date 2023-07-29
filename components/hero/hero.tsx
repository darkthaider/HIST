import React, { FC } from "react";

interface heroProps {}

const Hero: FC<heroProps> = ({}) => {
  return (
    <section className="hist-inner-container">
      <h1 className="text-hist_white-900 hero-title-56-128 max-w-[886px] mt-[64px] mb-4">
        Modern Strategists of Distribution
      </h1>
      <p className="hero-desc-18-32 text-hist_white-800 max-w-[668px]">
        Hist® partnering with medical companies to expand & dominate new markets
        .
      </p>
    </section>
  );
};

export default Hero;
