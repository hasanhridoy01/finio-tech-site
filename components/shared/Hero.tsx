import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 mb-10 md:mt-64 mt-32">
      <div className="py-4 md:px-28 px-5 md:text-start text-center w-full">
        <h3 className="md:text-[32px] text-[16px] font-[400] mb-1">
          Emphasizes growth and FinTech focus with AI.
        </h3>
        <h1 className="section-title mb-2 md:text-[48px] text-[24px]">
          Boost Your Financial Future with FinioTech
        </h1>
        <h5 className="md:text-[14px] text-[12px] font-[400] mb-7">
          Get your cutting-edge financial solution Platform as a Service
          tailored to meet the needs of your fintech business. From advanced
          APIs to purpose built android and ios app, our solutions are built to
          deliver you a launchable solution in a matter of 7 days.{" "}
        </h5>
        <div className="flex items-center gap-4 md:flex-row flex-col">
          <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
            Book A Meeting
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.13 8.48002C20.96 10.69 20.96 14.31 17.13 16.52L14.04 18.3L10.95 20.08C7.13 22.29 4 20.48 4 16.06V12.5V8.94002C4 4.52002 7.13 2.71002 10.96 4.92002L13.21 6.22002"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button className="md:w-[201px] w-[175px] md:h-[55px] h-[40px] secondary-button">
            Products & Services
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.43 6.43005L20.5 12.5001L14.43 18.5701"
                stroke="#138B7D"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.01 12.5H20.33"
                stroke="#138B7D"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 12.5H6.97"
                stroke="#138B7D"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <h5 className="text-[12px] md:font-[700] font-semibold">
            2.5M Happy Users
          </h5>
        </div>
      </div>
      <div className="relative w-full h-[500px] hidden md:flex justify-end">
        <div className="absolute top-[-80] left-1/3 transform -translate-x-1/3 w-[267px] h-[267px] z-1 doller-image">
          <Image
            src="/doller.png"
            alt="Dollar Coin"
            fill
            priority
            className="object-contain"
          />
        </div>

        <img
          src="/hand.png"
          alt="Finiotech Hand"
          className="object-contain z-2 relative"
        />
      </div>
    </div>
  );
}
