"use client";
import React, { FC, useState } from "react";

interface pageProps {}

const faqInitialData = [
  {
    id: 1,
    title: "How do I reach out to you? ",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
    isOpen: false,
  },
  {
    id: 2,
    title: "Who is the team behind hist®?",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
    isOpen: false,
  },
  {
    id: 3,
    title: "How can I get a proposal?",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
    isOpen: false,
  },
  {
    id: 4,
    title: "How many companies/founders do you work with at one time?",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
    isOpen: false,
  },
  {
    id: 5,
    title: "What happens during the program?",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
    isOpen: false,
  },
];

const FAQ: FC<pageProps> = ({}) => {
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
    <section className="hist-outer-container pt-8 mdMax:pt-[120px] pb-8 xl:pt-16 xl:pb-16">
      <div className="hist-inner-container">
        <div className="">
          <span className="subtitle-rectangle"></span>
          <span className="subtitle-20-24 text-hist_white-500">FAQs</span>
        </div>
        <h2 className="mt-5 mb-[124px] text-hist_white-900 title-32-76 max-w-[900px] font-normal">
          Let&#39;s take a look at things you have on your mind.
        </h2>

        <ul>
          {faqData.map((item) => (
            <li
              key={item.id}
              className="pb-6 mb-8 border-b border-hist_white-200"
            >
              <div className="flex justify-between items-start">
                <h4 className="faq-title-20-32 text-hist_white-900 mr-4">
                  {item.title}
                </h4>
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
              <p
                className={`grid grid-rows-[0fr] transition-all duration-300 desc-16-20 text-hist_white-500 ${
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

export default FAQ;
