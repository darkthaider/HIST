"use client";
import React from "react";

export default function Features() {
  return (
    <section className="hist-outer-container vertical-padding-48-82">
      <div className="hist-inner-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            data-aos="fade-up"
            data-aos-once={true}
            data-aos-duration={800}
            className="bg-hist_white-50 rounded-lg p-6"
          >
            <h4 className="text-hist_white-900 font-semibold mb-2">
              On-site experts
            </h4>
            <p className="desc-16-20 text-hist_white-500">
              Our field trainers teach clinicians and sub-distributors
              everything they need to use and sell your product.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once={true}
            data-aos-duration={800}
            data-aos-delay={100}
            className="bg-hist_white-50 rounded-lg p-6"
          >
            <h4 className="text-hist_white-900 font-semibold mb-2">
              Always-on AI support
            </h4>
            <p className="desc-16-20 text-hist_white-500">
              HIST’s 24/7 chat agent answers technical questions for on ground
              training and sales force in seconds and escalates complex issues
              to human specialists.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once={true}
            data-aos-duration={800}
            data-aos-delay={200}
            className="bg-hist_white-50 rounded-lg p-6"
          >
            <h4 className="text-hist_white-900 font-semibold mb-2">
              One-time knowledge graph
            </h4>
            <p className="desc-16-20 text-hist_white-500">
              We build a searchable product “brain” once, so you never burn
              internal resources on repeat training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
