"use client";
import React from "react";

export default function ComplianceIntro() {
  return (
    <section className="hist-outer-container vertical-padding-48-82">
      <div className="hist-inner-container text-center">
        <div
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          className="desc-16-20 text-hist_white-500 capitalize flex justify-center"
        >
          <span className="subtitle-rectangle"></span>
          Regulatory navigation
        </div>

        <h2
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="200"
          className="mb-8 title-32-76 text-hist_white-900 mt-4 max-w-[900px] mx-auto"
        >
          Regulatory navigation without the paperwork drag
        </h2>

        <p
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="300"
          className="desc-16-20 text-hist_white-500 md:max-w-[720px] mt-4 mx-auto"
        >
          HIST AI Compliance Engine automates every dossier submissions and all
          regulatory filings in each country so you can get approved fast and
          stay complaint .
        </p>
      </div>
    </section>
  );
}
