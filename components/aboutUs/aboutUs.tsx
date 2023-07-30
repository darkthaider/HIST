"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import ahmad from "@/public/ahmed.png";
import talha from "@/public/talha.png";
import mohammad from "@/public/mohammad.png";
import Image from "next/image";

interface aboutUsProps {}
const faqInitialData = [
  {
    id: 1,
    title: "Ahmed Abdelwahab ",
    desc: "Experienced General Manager with a demonstrated history of working in the hospital & health care industry. Skilled in Negotiation, Business Planning, Medical Devices, Sales, and Oncology. Strong healthcare services professional with a Doctor of Philosophy - PhD focused in Biochemistry from Ain Shams University.",
    isOpen: false,
    designation: "Founder",
    avatar: ahmad.src,
  },
  {
    id: 2,
    title: "Talha Kamran ",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
    isOpen: false,
    designation: "Communication & Marketing",
    avatar: talha.src,
  },
  {
    id: 3,
    title: "Mohammed Abdelwahab ",
    desc: "Experienced General Manager with a demonstrated history of working in the hospital & health care industry. Skilled in Negotiation, Business Planning, Medical Devices, Sales, and Oncology. Strong healthcare services professional with a Doctor of Philosophy - PhD focused in Biochemistry from Ain Shams University.",
    isOpen: false,
    designation: "Scientist",
    avatar: mohammad.src,
  },
];

const AboutUs: FC<aboutUsProps> = ({}) => {
  const [faqData, setFaqData] = useState(faqInitialData);

  const faqToggleHandler = (id: number) => {
    const updatedFaqData = faqData.map((item) => {
      if (item.id === id) {
        const clickedItem = { ...item, isOpen: !item.isOpen };
        return clickedItem;
      }
      return item;
    });

    setFaqData(updatedFaqData);
  };
  return (
    <section className="hist-inner-container vertical-padding-48-82">
      <div className="hist-inner-container">
        <div className="desc-16-20 text-hist_white-500 capitalize flex">
          <span className="subtitle-rectangle"></span>About Us / Mission
        </div>
        <h2 className="about-us-title-mb title-32-76 text-hist_white-900 mt-6 max-w-[1190px]">
          With experience for over 25 years distributing and consultancy we are
          well structured throughout <br /> 4 continents.
        </h2>
        <ul>
          {faqData.map((item) => (
            <li
              key={item.id}
              className="pb-6 mb-8 border-b border-hist_white-200"
            >
              <div className="sm:flex justify-between items-center">
                <div className="mr-5 mb-4 sm:mb-0 md:mr-10">
                  <Image
                    src={item.avatar}
                    width={100}
                    height={100}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
                <div className="flex grow justify-between items-start md:items-center">
                  <div className="md:flex grow justify-between items-center">
                    <div className="flex items-center">
                      <h4 className="faq-title-20-32 text-hist_white-900 mr-4">
                        {item.title}
                      </h4>
                      <Link href="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149Z"
                            fill="white"
                            fillOpacity="0.5"
                          />
                        </svg>
                      </Link>
                      &nbsp;&nbsp;
                      <Link href="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                        >
                          <path
                            d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z"
                            fill="white"
                            fillOpacity="0.5"
                          />
                        </svg>
                      </Link>
                    </div>
                    <span className="text-hist_white-800 about-us-designation-14-24 mr-[24px] xl:mr-[124px]">
                      {item.designation}
                    </span>
                  </div>
                  <button
                    onClick={() => faqToggleHandler(item.id)}
                    className={`min-w-[24px] bg-faqBtn rounded-[4px] shadow-faqBtnShadow backdrop-blur-[229px]`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.03 5L12.0117 19"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={item.isOpen ? "hidden" : ""}
                      />
                      <path
                        d="M5 12H19"
                        stroke={item.isOpen ? "#FE490C" : "white"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <p
                className={`grid grid-rows-[0fr] transition-all duration-300 desc-16-20 text-hist_white-500 md:ml-[140px] md:max-w-[786px] ${
                  item.isOpen ? "grid-rows-[1fr] pt-16-32" : null
                }`}
              >
                <span className="overflow-hidden">{item.desc}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
