"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import ahmad from "@/public/ahmed.jpeg";
import talha from "@/public/talha.jpeg";
import mohammad from "@/public/wahab.jpeg";
import Image from "next/image";
import TextAnimation from "../ui/textAnimation/textAnimation";

interface aboutUsProps {}
const faqInitialData = [
  {
    id: 1,
    title: "Ahmed Abdelwahab",
    desc: "With over 34 years of experience in medical and pharmaceutical distribution, Dr. Ahmed Abdelwahab stands as a stalwart in the industry. Having played a pivotal role in propelling Becton Dickinson to its full potential in Kuwait reflecting to the Middle East and Gulf regions, he is known for dominating markets and expanding revenues. Ahmed has forged enduring partnerships, contributing to the growth of companies across Egypt, Kuwait, UAE, and beyond. As an Industry Veteran in the field he has a natural intuition for problem solving as he’s dealt with a myriad of obstacles. Extending his impactful career, he is also an investor in multiple ventures, reflecting his commitment to fostering innovation and success.",
    isOpen: false,
    designation: "Co-Founder & President",
    avatar: ahmad.src,
    twiter:"https://x.com",
    linkedin:"https://www.linkedin.com/in/ahmad-abdulwahab-9a696742/",
  },
  {
    id: 2,
    title: "Talha Haider",
    desc: "Talha Haider, the Co-founder of Nod Financial, is a seasoned professional with a diverse skill set encompassing sales, business development, and human resources. Holding a background in Computer Engineering from Boston University and a fintech specialization from UC Berkeley School of Haas, Talha is well-versed in both technology and finance. With a passion for strategy and business growth, he has played a pivotal role in mentoring numerous startups, refining their vision, and enhancing their brand. Talha's creative and adaptive mentality consistently brings out the best in all his partnerships.",
    isOpen: false,
    designation: "Co-Founder & COO",
    avatar: talha.src,
    linkedin:"https://www.linkedin.com/in/talha-haider-k/",
    twiter:"https://x.com/talha_h_k?s=20"
  },

  {
    id: 3,
    title: "Mohamed Abdelwahab",
    desc: "Mohamed Abdelwahab, with a background in genetics, cellular and molecular biology, medical research and a degree from Boston University, is a valuable asset to our team. His experience in the medical field spans various roles, showcasing his versatility and commitment. Mohamed is particularly interested in the productive applications of biotechnology and envisions a future where advancements in this field benefit communities worldwide.",
    isOpen: false,
    designation: "Co-Founder, Lead Scientist",
    avatar: mohammad.src,
    twiter:"https://x.com/",
    linkedin:"https://www.linkedin.com",

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
    <section
      id="about-us"
      className="hist-outer-container vertical-padding-48-82"
    >
      <div className="hist-inner-container">
        <div
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          className="desc-16-20 text-hist_white-500 capitalize flex"
        >
          <span className="subtitle-rectangle"></span>About Us / Mission
        </div>

        <h2
          data-aos-once={true}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="200"
          className="about-us-title-mb title-32-76 text-hist_white-900 mt-6 max-w-[1190px]"
        >
          A partnership built to last with a team that cares!
        </h2>

        <ul>
          {faqData.map((item, index) => (
            <li
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={index * 100 + 300}
              key={item.id}
              onClick={() => faqToggleHandler(item.id)}
              className="pb-6 mb-8 border-b border-hist_white-200 cursor-pointer"
            >
              <div className="sm:flex justify-between items-center">
                <div className="mr-5 mb-4 sm:mb-0 md:mr-10">
                  <Image
                    src={item.avatar}
                    width={100}
                    height={100}
                    alt={item.title}
                    loading="lazy"
                    className="rounded-full h-[100px] grayscale object-cover object-top"
                  />
                </div>
                <div className="flex grow justify-between items-start md:items-center">
                  <div className="md:flex grow justify-between items-center">
                    <div className="flex items-center">
                      <h4 className="faq-title-20-32 text-hist_white-900 mr-4">
                        {item.title}
                      </h4>
                      <Link href={item.twiter} target="_blank">
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
                      <Link href={item.linkedin} target="_blank">
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
