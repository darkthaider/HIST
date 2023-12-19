"use client";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ContactUsForm from "../contactUsForm/contactUsForm";
import Image from "next/image";
import logo from "/public/HIST.svg";


interface headerProps {}

const navLinks = [
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Industries",
    link: "/#industries",
  },
  {
    title: "Process",
    link: "/#process",
  },
  {
    title: "About us",
    link: "/#about-us",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const Header: FC<headerProps> = ({}) => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [isContactForm, setIsContactForm] = useState(false);
  const prevScrollY = useRef(800);
  const handleNavToggle = () => {
    document.body.style.overflow = isNavOpen ? "auto" : "hidden"
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen)
  };

  const navLinkHandler = () => {
    setIsNavOpen(false);
      document.body.style.overflow = "auto"
  }
  

  useEffect(() => {
    console.log(isNavOpen, "from useEffect")
    document.addEventListener("scroll", handleHeader);
    handleHeader();
    return () => {
      document.removeEventListener("scroll", handleHeader);
    };
  }, []);


  const handleHeader = () => {
    const currentScrollY = window.scrollY  ;
    if (currentScrollY === 0 || currentScrollY > prevScrollY.current ) {
      setIsStickyNav(false);
    } else {
      setIsStickyNav(true);
    }

    console.log(currentScrollY, "currentScrollY")
    console.log(prevScrollY.current, "prevScrollY.current")

    prevScrollY.current = currentScrollY;
  };

  const handleFormToggle = () => {
    setIsContactForm(!isContactForm);
    const bodyElem: any = document.querySelector("body");
    bodyElem.style.overflow = isContactForm ? "auto" : "hidden";
  };

  return (
    <>
      <header
        className={`mdMax:fixed mdMax:z-10 mdMax:top-0 mdMax:w-[100%] mdMax:overflow-hidden mdMax:bg-hist_black h-[88px] md:pl-6 md:pr-6 minOuterContainer:pl-16 minOuterContainer:pr-16 md:mt-10 transition-all duration-500 ${
          isNavOpen ? "mdMax:h-screen" : ""
        } `}
      >
        <div className="bg-hist_black md:bg-hist_white-100 pl-4 pr-4 lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8 py-[13px] flex justify-between items-center rounded-lg">
          <Link
            href="/"
            className="max-w-[100px] md:max-w-[120px] xl:max-w-none"
          >
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" x="0" y="0" width="140" height="40.5973966281023" viewBox="52.01660186767578 89.82141143798827 235.96679626464845 70.35717712402344" preserveAspectRatio="xMidYMid meet" colorInterpolationFilters="sRGB" style={{background: "none"}}><g><defs><linearGradient id="92" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#fa71cd"/> <stop offset="100%" stopColor="#9b59b6"/></linearGradient><linearGradient id="93" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f9d423"/> <stop offset="100%" stopColor="#f83600"/></linearGradient><linearGradient id="94" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0064d2"/> <stop offset="100%" stopColor="#1cb0f6"/></linearGradient><linearGradient id="95" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f00978"/> <stop offset="100%" stopColor="#3f51b1"/></linearGradient><linearGradient id="96" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7873f5"/> <stop offset="100%" stopColor="#ec77ab"/></linearGradient><linearGradient id="97" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f9d423"/> <stop offset="100%" stopColor="#e14fad"/></linearGradient><linearGradient id="98" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#009efd"/> <stop offset="100%" stopColor="#2af598"/></linearGradient><linearGradient id="99" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ffcc00"/> <stop offset="100%" stopColor="#00b140"/></linearGradient><linearGradient id="100" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#d51007"/> <stop offset="100%" stopColor="#ff8177"/></linearGradient><linearGradient id="102" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#a2b6df"/> <stop offset="100%" stopColor="#0c3483"/></linearGradient><linearGradient id="103" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7ac5d8"/> <stop offset="100%" stopColor="#eea2a2"/></linearGradient><linearGradient id="104" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00ecbc"/> <stop offset="100%" stopColor="#007adf"/></linearGradient><linearGradient id="105" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#b88746"/> <stop offset="100%" stopColor="#fdf5a6"/></linearGradient></defs><g fill="#ffffff" className="icon-text-wrapper icon-svg-group iconsvg" transform="translate(54.33000183105469,92.13481140339933)"><g className="iconsvg-imagesvg" transform="translate(0,0)"><g><rect fill="#ffffff" fillOpacity="0" strokeWidth="2" x="0" y="0" width="60" height="65.7303740058281" className="image-rect"/> <svg filter="url(#colors5778871051)" x="0" y="0" width="60" height="65.7303740058281"  className="image-svg-svg primary" style={{overflow: "visible"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.011394592002034187 0.06055259704589844 109.99139404296875 120.49649810791016"><path d="M0 85.85C0 80.92.06 76 0 71a3.65 3.65 0 0 1 2-3.5Q20.56 57 39.1 46.44q9.39-5.36 18.8-10.67a1.77 1.77 0 0 0 .94-1.77c0-10.11.08-20.22-.07-30.33 0-2.83 2.41-4.61 5.17-3C71.72 5 79.58 9.2 87.42 13.46a3.52 3.52 0 0 1 2 3.41v15.39q.09 16.64.2 33.26c.06 7.67.18 15.35.2 23a2.39 2.39 0 0 0 1.47 2.28c5.53 3.19 11 6.43 16.57 9.61a3.46 3.46 0 0 1 2.12 3.11 3.39 3.39 0 0 1-2.15 3q-12 6.66-24 13.41a3.78 3.78 0 0 1-4.17 0Q55 105.42 30.2 91a3.14 3.14 0 0 0-3.71 0c-7 4.24-14.16 8.37-21.24 12.55a3.48 3.48 0 0 1-3.44.47A3 3 0 0 1 0 101V85.85zM88.36 89l.2-.24c-.13-.27-.24-.56-.38-.82l-4.08-7.3L60 37.72a7.18 7.18 0 0 0-1.06-1.16 5.43 5.43 0 0 0-1 1Q43.74 62.7 29.61 87.84c-.17.31-.28.65-.42 1l.23.2c.54-.28 1.09-.54 1.62-.84q13.5-7.64 27-15.32a2.35 2.35 0 0 1 2.69 0q13 7.64 26 15.18c.49.31 1.06.61 1.63.94z" fill="#000000"/></svg></svg> <defs><filter id="colors5778871051"><feColorMatrix type="matrix" values="0 0 0 0 0.9921875  0 0 0 0 0.28515625  0 0 0 0 0.046875  0 0 0 1 0" className="icon-feColorMatrix "/></filter> <filter id="colorsf4333417220"><feColorMatrix type="matrix" values="0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 1 0" className="icon-fecolormatrix"/></filter> <filter id="colorsb8326361366"><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" className="icon-fecolormatrix"/></filter></defs></g></g> <g transform="translate(67,10.110189437866211)"><g className="tp-name iconsvg-namesvg"><g transform="scale(1)"><g><path d="M13.11-45.51L13.11-26.91 42.08-26.91 42.08-45.51 50.34-45.51 50.34 0 42.08 0 42.08-18.6 13.11-18.6 13.11 0 4.86 0 4.86-45.51 13.11-45.51ZM68.3-45.51L68.3 0 60.05 0 60.05-45.51 68.3-45.51ZM121.68-13.39L121.68-13.39Q121.68-10.95 121.07-9 120.45-7.05 119.43-5.55 118.42-4.06 117.05-3.02 115.69-1.97 114.23-1.3 112.77-0.63 111.26-0.32 109.75 0 108.42 0L108.42 0 76.58 0 76.58-8.25 108.42-8.25Q110.8-8.25 112.12-9.65 113.43-11.04 113.43-13.39L113.43-13.39Q113.43-14.54 113.08-15.49 112.73-16.44 112.08-17.14 111.43-17.84 110.5-18.22 109.56-18.6 108.42-18.6L108.42-18.6 89.44-18.6Q87.44-18.6 85.12-19.31 82.81-20.03 80.82-21.61 78.84-23.2 77.52-25.77 76.2-28.34 76.2-32.06L76.2-32.06Q76.2-35.77 77.52-38.32 78.84-40.88 80.82-42.48 82.81-44.08 85.12-44.8 87.44-45.51 89.44-45.51L89.44-45.51 117.53-45.51 117.53-37.26 89.44-37.26Q87.09-37.26 85.77-35.83 84.46-34.4 84.46-32.06L84.46-32.06Q84.46-29.68 85.77-28.29 87.09-26.91 89.44-26.91L89.44-26.91 108.42-26.91 108.48-26.91Q109.81-26.88 111.31-26.55 112.8-26.22 114.27-25.52 115.75-24.82 117.08-23.76 118.42-22.69 119.45-21.2 120.48-19.71 121.08-17.77 121.68-15.84 121.68-13.39ZM169.2-45.51L169.2-37.26 151.01-37.26 151.01 0 142.76 0 142.76-37.26 124.54-37.26 124.54-45.51 169.2-45.51Z" transform="translate(-4.860000133514404, 45.5099983215332)"/></g> </g></g> </g></g><defs v-gra="od"/></g></svg>
          </Link>

          <nav className="mdMax:absolute mdMax:h-screen mdMax:left-0 mdMax:pt-[100px] mdMax:top-0 mdMax:flex mdMax:flex-col mdMax:w-[100%] mdMax:gap-[24px] mdMax:z-[-1] md:flex md:gap-4 lg:gap-6 xl:gap-10 items-center mdMax:overflow-auto justify-center">
            {navLinks.map((item) => (
            <div 
            onClick={navLinkHandler}
            key={item.link}
            >
              <Link
                // prefetch={true}
              key={item.link}
                href={item.link}
                className={`mdMax:text-[40px] mdMax:leading-[48px] mdMax:text-hist_white-900 text-hist_white-800 text-lg xl:text-2xl leading-[26px] font-normal transition-colors hover:underline hover:decoration-1 hover:text-[#fe490c] duration-300 md:pt-1 underline-offset-2  ${
                  pathname === item.link
                    ? "underline decoration-1 text-hist_white-900"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            </div>
            ))}
            {/* <button
              onClick={handleFormToggle}
              className="mdMax:text-[40px] mdMax:leading-[48px] mdMax:text-hist_white-900 md:inline-flex font-normal md:ml-4 xl:ml-8 md:bg-hist_white-900 md:text-lg xl:text-2xl md:pr-4 md:pl-4 lg:pl-6 lg:pr-6 md:pb-1 md:pt-2 xl:pt-3 md:rounded-full md:leading-[26px] text-hist_black"
            >
              Contact us
            </button> */}
            <button
              onClick={handleFormToggle}
              className="animatedBtn contact"
            >
              <span  className="text-[20px] font-normal bg-hist_white-900 md:text-[32px]">

              Contact us
              </span>
            </button>
          </nav>
          <div className="flex gap-4 md:hidden items-center">
            <button
              onClick={handleFormToggle}
              className="font-normal bg-hist_red rounded-full text-hist_white pt-[6px] px-[12px]"
            >
              Contact us
            </button>
            <button
              onClick={handleNavToggle}
              className={`text-hist_red h-[16px] flex flex-col items-end ${
                isNavOpen ? "h-[24px] justify-center" : "justify-between"
              }`}
            >
              <span
                className={`inline-block w-[30px] bg-hist_white-900 h-[1px] transition-all duration-200 ${
                  isNavOpen ? "rotate-45" : ""
                }`}
              ></span>
              <span
                className={`inline-block w-[15px] bg-hist_white-900 h-[1px] transition-transform duration-200 ${
                  isNavOpen ? "w-[30px] rotate-[-45deg]" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`mdMax:hidden fixed left-[50%] transition-all duration-300 translate-x-[-50%] z-10 backdrop-blur-[25px] rounded-[8px] px-8 py-3 border-2 border-hist_white-100 bg-hist_white-100 ${
          isStickyNav
            ? "bottom-[40px] translate-y-[0px]"
            : "translate-y-[100%] bottom-0"
        }`}
      >
        <nav className="md:flex md:gap-4 lg:gap-6 xl:gap-10 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`text-hist_white-800 text-lg xl:text-2xl leading-[26px] font-normal transition-colors hover:underline hover:decoration-1 hover:text-[#fe490c] duration-300 md:pt-1 underline-offset-2 whitespace-nowrap ${
                pathname === item.link
                  ? "underline decoration-1 text-hist_white-900"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
             <button
              onClick={handleFormToggle}
              className="animatedBtn contact"
            >
              <span  className="text-[20px] font-normal bg-hist_white-900 md:text-[32px]">

              Contact us
              </span>
            </button>
        </nav>
      </div>
      {isContactForm && <ContactUsForm handleFormToggle={handleFormToggle} />}
    </>
  );
};

export default Header;
