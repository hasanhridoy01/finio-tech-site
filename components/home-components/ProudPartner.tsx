import React from "react";
import { Button } from "../ui/button";

const ProudPartner = () => {
  return (
    <section className="my-24 md:my-44">
      <div className="container mx-auto w-full flex flex-col items-center bg-[#EBFAF7] rounded-[50px] p-12 border border-[#fff] prartners_wrapper">
        <h2 className="text-[11px] font-[900] text-[#222222] mb-2  ">
          Partner’s
        </h2>
        <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 ">
          We are proud Partner
        </h1>
        <h3 className="md:text-[18px] text-[14px] font-[500] text-[#555555] ">
          Partner Program for payments and beyond.
        </h3>
        <img src="/partners.png" alt="partners" className="max-w-full my-6" />
        <p className="text-center max-w-[660px] ">
          Finiotech We work with industry leaders and forward-thinking
          innovators to deliver the best software & solutions. We Partner
          Program is designed for anyone who is helping a business go or grow
          online.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
          <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
            Become a Partner
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7359 6.43018L20.8059 12.5002L14.7359 18.5702"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.3159 12.5H20.6359"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.80591 12.5H7.27591"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProudPartner;
