import React, { FC } from "react";

interface pageProps {}

const faqData = [
  {
    title: "How do I reach out to you? ",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
  },
  {
    title: "Who is the team behind hist®?",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
  },
  {
    title: "How can I get a proposal?",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
  },
  {
    title: "How many companies/founders do you work with at one time?",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
  },
  {
    title: "What happens during the program?",
    desc: "I am consistently impressed with the level of professionalism and expertise they bring to the table. Their products are always top quality, and their customer service is unparalleled. I appreciate their dedication to medical research and their commitment to ensuring that patients receive the best possible care. They have made a tangible difference in my work, and I would highly recommend them to anyone in the medical industry.",
  },
];

const FAQ: FC<pageProps> = ({}) => {
  return (
    <section className="hist-outer-container pt-8 pb-8 xl:pt-16 xl:pb-16">
      <div className="hist-inner-container">
        <div className="">
          <span className="subtitle-rectangle"></span>
          <span className="subtitle-20-24 text-hist_white-500">FAQs</span>
        </div>
        <h2 className="mt-5 mb-[124px] text-hist_white-900 title-32-76 max-w-[900px] font-normal">
          Let&#39;s take a look at things you have on your mind.
        </h2>

        <ul>
          {faqData.map((item, index) => (
            <li
              key={index}
              className="pb-6 mb-8 border-b border-hist_white-200"
            >
              <div className="flex justify-between items-center">
                <h4 className="faq-title-20-32 text-hist_white-900">
                  {item.title}
                </h4>
                <span className="group bg-faqBtn cursor-pointer rounded-[4px] shadow-faqBtnShadow backdrop-blur-[229px] ">
                  <svg
                    className="group-hover:rotate-90 transition-transform duration-300"
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
                    />
                    <path
                      d="M5 12H19"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="desc-16-20 mt-16-32 text-hist_white-500">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
