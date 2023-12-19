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
         
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" fill="none">
<g clip-path="url(#clip0_1134_2707)">
<g clip-path="url(#clip1_1134_2707)">
<path d="M0.47369 18.1409L0.473664 18.1409C0.483902 18.9941 0.480479 19.8382 0.477067 20.6799C0.475365 21.0999 0.473665 21.5192 0.473665 21.9387V25.813V25.8146L0.473596 25.8146C0.459849 25.9718 0.496149 26.1294 0.577311 26.2649C0.658449 26.4002 0.780275 26.5065 0.925402 26.5686C1.06674 26.626 1.2207 26.6454 1.37188 26.6248C1.52311 26.6041 1.66627 26.5441 1.78704 26.4507L1.78884 26.4494L1.78891 26.4495C2.37249 26.1049 2.95814 25.7618 3.54383 25.4185C4.77524 24.697 6.00682 23.9753 7.2197 23.2406C7.36032 23.1379 7.52997 23.0825 7.70414 23.0825C7.87826 23.0825 8.04786 23.1378 8.18845 23.2405C12.4162 25.6988 16.6321 28.1647 20.836 30.6383L20.8368 30.6388C20.992 30.7414 21.1739 30.7961 21.36 30.7961C21.546 30.7961 21.728 30.7414 21.8832 30.6388L21.8843 30.6381L21.8843 30.6381C23.9301 29.4873 25.976 28.3442 28.0218 27.2087L28.024 27.2076L28.024 27.2077C28.1767 27.1479 28.3088 27.0451 28.4044 26.9118C28.4998 26.7787 28.5546 26.6208 28.5623 26.4572C28.5583 26.2902 28.5061 26.1279 28.412 25.9898C28.3178 25.8516 28.1856 25.7435 28.0313 25.6788L28.0293 25.6779L28.0293 25.6778C27.2004 25.2046 26.3799 24.726 25.5601 24.2478C24.9716 23.9046 24.3835 23.5615 23.7928 23.2208C23.6756 23.1717 23.5759 23.0882 23.507 22.9813C23.4379 22.8742 23.403 22.7486 23.4069 22.6212M0.47369 18.1409L23.425 22.6215M0.47369 18.1409L0.473626 18.14C0.461794 17.9606 0.503047 17.7817 0.592237 17.6256C0.681427 17.4695 0.814606 17.3432 0.975155 17.2623L0.975165 17.2623L0.975925 17.2619C4.14014 15.4718 7.30265 13.6766 10.4635 11.8762L10.4635 11.8762C12.0642 10.9625 13.6667 10.053 15.2708 9.14781M0.47369 18.1409L0.967006 17.2461C4.13121 15.456 7.2937 13.6608 10.4545 11.8605C12.0553 10.9467 13.6579 10.0372 15.2622 9.13188M23.4069 22.6212C23.4069 22.6211 23.4069 22.621 23.4069 22.6209L23.425 22.6215M23.4069 22.6212C23.4069 22.6213 23.4069 22.6214 23.4069 22.6215L23.425 22.6215M23.4069 22.6212C23.4037 21.3993 23.3905 20.1745 23.3773 18.9491C23.3694 18.2128 23.3615 17.4762 23.3557 16.7399C23.337 13.9064 23.3199 11.0713 23.3046 8.23438L23.3046 8.23428L23.3046 4.29863V4.29744L23.3046 4.29744C23.3162 4.12121 23.2747 3.94555 23.1853 3.7932C23.096 3.64086 22.9629 3.51884 22.8035 3.44296L22.8026 3.44254L22.8026 3.44252C22.221 3.1265 21.6389 2.81175 21.057 2.4971C19.6332 1.72716 18.2104 0.957781 16.7979 0.171679L16.7976 0.171501C16.4495 -0.031581 16.1263 -0.0196026 15.8907 0.128978C15.6546 0.27785 15.5028 0.566133 15.5028 0.922894M23.425 22.6215C23.4218 21.3994 23.4086 20.1744 23.3954 18.9488C23.3875 18.2125 23.3796 17.4759 23.3738 16.7398C23.3551 13.9063 23.338 11.0711 23.3227 8.23428V4.29863C23.3345 4.11878 23.2921 3.93951 23.2009 3.78404C23.1098 3.62856 22.974 3.50405 22.8112 3.4266C22.2295 3.11053 21.6474 2.79574 21.0655 2.48107C19.6417 1.71116 18.2191 0.941882 16.8068 0.155851C16.1009 -0.25587 15.4846 0.199325 15.4846 0.923033M15.5028 0.922894C15.5028 0.922851 15.5028 0.922808 15.5028 0.922765L15.4846 0.923033M15.5028 0.922894C15.5028 0.92294 15.5028 0.922987 15.5028 0.923033H15.4846M15.5028 0.922894C15.5312 2.84122 15.5273 4.7596 15.5234 6.67781C15.522 7.34464 15.5207 8.01145 15.5207 8.67823M15.4846 0.923033C15.5131 2.84123 15.5092 4.75943 15.5053 6.67763C15.5039 7.34483 15.5025 8.01204 15.5025 8.67924M15.5025 8.67924L15.5205 8.67719C15.5206 8.67754 15.5206 8.67788 15.5207 8.67823M15.5025 8.67924C15.5129 8.77015 15.4955 8.86206 15.4526 8.94286C15.4097 9.02366 15.3433 9.08957 15.2622 9.13188M15.5025 8.67924H15.5207C15.5207 8.6789 15.5207 8.67857 15.5207 8.67823M15.5207 8.67823C15.5312 8.77243 15.5131 8.86763 15.4686 8.95136C15.424 9.03531 15.355 9.1038 15.2708 9.14781M15.2622 9.13188L15.2711 9.14766C15.271 9.14771 15.2709 9.14776 15.2708 9.14781M15.2622 9.13188L15.2705 9.14794C15.2706 9.1479 15.2707 9.14785 15.2708 9.14781M23.0425 22.7599L23.0558 22.7676L23.0655 22.7558L23.1167 22.6945L23.1241 22.6855L23.1191 22.675C23.1059 22.6477 23.0936 22.6196 23.0812 22.5912C23.078 22.5841 23.0749 22.5769 23.0717 22.5697C23.056 22.5342 23.0398 22.4985 23.0215 22.4646L23.0214 22.4643L21.978 20.5975L21.978 20.5975L15.815 9.62168L15.8151 9.62162L15.8138 9.61987C15.7338 9.5103 15.642 9.40984 15.5401 9.3203L15.5289 9.31047L15.5171 9.31954C15.4198 9.39423 15.3327 9.48132 15.258 9.5786L15.2579 9.57849L15.2566 9.58072C12.8357 13.8667 10.4208 18.1527 8.01185 22.4387L8.01175 22.4389C7.9793 22.4981 7.95505 22.5619 7.93051 22.6265C7.92165 22.6498 7.91275 22.6733 7.90341 22.6966L7.89863 22.7086L7.90835 22.717L7.96716 22.7681L7.97646 22.7762L7.98739 22.7706C8.03299 22.7469 8.07908 22.7237 8.12529 22.7005C8.21817 22.6537 8.31152 22.6068 8.40225 22.5554C10.7038 21.2529 13.0054 19.947 15.3069 18.6377L15.307 18.6377L15.3083 18.6368C15.4062 18.5685 15.5226 18.5319 15.6419 18.5319C15.7612 18.5319 15.8777 18.5685 15.9755 18.6368L15.9755 18.6368L15.9767 18.6375C18.1929 19.94 20.4092 21.234 22.6254 22.5194C22.7067 22.5708 22.7969 22.6213 22.8897 22.6733C22.9402 22.7016 22.9915 22.7304 23.0425 22.7599Z" fill="#FA6565" stroke="#FF2424" style={{fill:"#FA6565", fillOpacity:"1", stroke:"#FF2424", strokeOpacity:"1"}} stroke-width="0.036228"/>
</g>
<path d="M35.9712 7.04199V14.5729H47.7008V7.04199H51.0452V25.4685H47.7008V17.9376H35.9712V25.4685H32.6309V7.04199H35.9712ZM58.317 7.04199V25.4685H54.9767V7.04199H58.317ZM79.93 20.047C79.93 20.7057 79.8477 21.2981 79.683 21.8245C79.5157 22.3509 79.2943 22.8165 79.019 23.2214C78.7464 23.6236 78.4252 23.965 78.0554 24.2457C77.6883 24.5292 77.3077 24.7613 76.9136 24.9421C76.5195 25.123 76.1187 25.2553 75.7111 25.3389C75.3035 25.4253 74.9202 25.4685 74.5612 25.4685H61.6695V22.1282H74.5612C75.2036 22.1282 75.703 21.9392 76.0593 21.5613C76.4129 21.1861 76.5897 20.6814 76.5897 20.047C76.5897 19.7366 76.5424 19.4532 76.448 19.1968C76.3535 18.9403 76.2185 18.7176 76.0431 18.5287C75.8676 18.3398 75.6544 18.194 75.4034 18.0914C75.1496 17.9888 74.8689 17.9376 74.5612 17.9376H66.8764C66.3365 17.9376 65.7535 17.8417 65.1273 17.6501C64.5037 17.4557 63.9234 17.1453 63.3862 16.7188C62.8518 16.2897 62.4064 15.7282 62.0501 15.0345C61.6938 14.3408 61.5157 13.4919 61.5157 12.4878C61.5157 11.4863 61.6938 10.6415 62.0501 9.95315C62.4064 9.26213 62.8518 8.70069 63.3862 8.26881C63.9234 7.83692 64.5037 7.52381 65.1273 7.32946C65.7535 7.13782 66.3365 7.04199 66.8764 7.04199H78.2497V10.3823H66.8764C66.2421 10.3823 65.7467 10.5753 65.3904 10.9613C65.0368 11.3473 64.86 11.8561 64.86 12.4878C64.86 13.1302 65.0368 13.639 65.3904 14.0142C65.7467 14.3867 66.2421 14.5729 66.8764 14.5729H74.5612H74.5855C74.9445 14.581 75.3264 14.6296 75.7313 14.7187C76.1335 14.8078 76.533 14.9468 76.9298 15.1357C77.3293 15.3247 77.7085 15.5622 78.0675 15.8483C78.4292 16.1372 78.7491 16.4827 79.0271 16.8848C79.3051 17.287 79.5251 17.75 79.6871 18.2736C79.849 18.7946 79.93 19.3857 79.93 20.047ZM99.1703 7.04199V10.3823H91.8054V25.4685H88.4651V10.3823H81.088V7.04199H99.1703Z" fill="#0B0C0C" style={{fill:"#fff" , fillOpacity:"1"}}/>
</g>
<defs>
<clipPath id="clip0_1134_2707">
<rect width="99" height="31" fill="white" style={{fill:"white", fillOpacity:"1"}}/>
</clipPath>
<clipPath id="clip1_1134_2707">
<rect width="28.1278" height="30.8142" fill="white" style={{fill:"white" , fillOpacity:"1" , transform: "translate(0.452637)"}}/>
</clipPath>
</defs>
</svg>
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
