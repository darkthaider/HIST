"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import ContactUsForm from "../contactUsForm/contactUsForm";

interface footerProps {}

const Footer: FC<footerProps> = ({}) => {
  const [isContactForm, setIsContactForm] = useState(false);
  const handleFormToggle = () => {
    setIsContactForm(!isContactForm);
    const bodyElem: any = document.querySelector("body");
    bodyElem.style.overflow = isContactForm ? "auto" : "hidden";
  };
  return (
    <>
      <footer className="vertical-padding-48-82 hist-outer-container overflow-hidden relative">
        <div className="hist-inner-container">
          <div className="text-center">
            <div
              className="flex justify-center"
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.533 7.11224C21.5482 7.32543 21.5482 7.53866 21.5482 7.75185C21.5482 14.2543 16.599 21.7468 7.5533 21.7468C4.76648 21.7468 2.17767 20.9396 0 19.5387C0.395953 19.5843 0.776625 19.5996 1.18781 19.5996C3.48727 19.5996 5.60405 18.8229 7.29441 17.4981C5.13197 17.4523 3.31978 16.0361 2.69541 14.0869C3 14.1325 3.30455 14.163 3.62437 14.163C4.06598 14.163 4.50764 14.102 4.91878 13.9955C2.66498 13.5386 0.974578 11.5589 0.974578 9.16808V9.10719C1.62937 9.47268 2.39086 9.7011 3.19791 9.73152C1.87303 8.84825 1.00505 7.34066 1.00505 5.63507C1.00505 4.72138 1.24866 3.88382 1.67508 3.15285C4.09641 6.13761 7.73602 8.08682 11.8172 8.30005C11.7411 7.93457 11.6954 7.55389 11.6954 7.17318C11.6954 4.46249 13.8883 2.25439 16.6141 2.25439C18.0304 2.25439 19.3095 2.8483 20.208 3.80769C21.3197 3.5945 22.3857 3.18332 23.3299 2.61988C22.9643 3.76204 22.1877 4.72143 21.1674 5.33052C22.1573 5.22397 23.1167 4.9498 23.9999 4.56913C23.33 5.54371 22.4924 6.41169 21.533 7.11224Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                >
                  <path
                    d="M4.70062 20.9995H0.346875V6.97922H4.70062V20.9995ZM2.52141 5.06672C1.12922 5.06672 0 3.91359 0 2.52141C9.96468e-09 1.85269 0.265647 1.21136 0.738503 0.738503C1.21136 0.265647 1.85269 0 2.52141 0C3.19012 0 3.83145 0.265647 4.30431 0.738503C4.77716 1.21136 5.04281 1.85269 5.04281 2.52141C5.04281 3.91359 3.91313 5.06672 2.52141 5.06672ZM20.9953 20.9995H16.6509V14.1745C16.6509 12.548 16.6181 10.462 14.3873 10.462C12.1237 10.462 11.7769 12.2292 11.7769 14.0573V20.9995H7.42781V6.97922H11.6034V8.89172H11.6644C12.2456 7.79016 13.6655 6.62766 15.7838 6.62766C20.19 6.62766 21 9.52922 21 13.298V20.9995H20.9953Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </Link>
            </div>
            <h2
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay="200"
              className="title-32-76 text-hist_white-900 mt-6 mb-8"
            >
              Ready to scale and <br /> reach new horizons...
            </h2>
            <button
              onClick={handleFormToggle}
              className="bg-startBtn p-[2px] inline-block rounded-full"
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay="300"
            >
              <span className="text-[20px] text-hist_black inline-block md:inline-flex font-normal bg-hist_white-900 md:text-[32px] px-[48px] md:pb-1 pt-2 md:pt-3 rounded-full">
                START
              </span>
            </button>
          </div>
        </div>
        <div
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="400"
          className="flex mdMax:flex-col mdMax:justify-center mdMax:items-center mdMax:gap-[20px] md:justify-between md:pl-6 md:pr-6 minContainer:pl-16 minContainer:pr-16 mt-[150px] md:mt-[200px] lg:mt-[200px] xl:mt-[300px] items-end"
        >
          <span className="text-[14px] md:text-[16px] text-hist_white-500">
            Ⓒ 2023 HIST®. All rights reserved.
          </span>
          <span className="text-hist_black rounded-full bg-hist_white-900 w-[72px] h-[72px] xl:w-[100px] xl:h-[100px] text-base xl:text-2xl inline-flex justify-center items-center">
            Up
          </span>
        </div>
      </footer>

      {isContactForm && <ContactUsForm handleFormToggle={handleFormToggle} />}
    </>
  );
};

export default Footer;
