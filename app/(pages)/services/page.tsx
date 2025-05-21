"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const handleDetailsClick = (id: number) => {
    router.push(`/services/${id}`);
  };
  return (
    <div className="container mx-auto md:pt-44 pt-28 md:px-0 px-5 h-auto">
      <div className="my-10">
        <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start text-white">
          Services
        </h1>
        <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start md:w-[850px] w-full">
          Discover Cutting-Edge Financial Technologies Designed to Streamline
          Operations, Maximize Efficiency, and Drive Sustainable Growth for Your
          Business
        </h3>
      </div>
      {/* section-content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:col-span-1 col-span-full box-shadow md:px-12 md:py-10 py-8 px-8 md:h-full h-auto">
          <img src="/Frame 1000011454.png" alt="" />
          <div className="my-7">
            <h2 className="font-[900] md:text-[24px] text-[16px] text-[#2B2B2B]">
              Digital Banking & Financial Solutions
            </h2>
            <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500] font-poppins">
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                FIB.iq – A robust banking platform offering secure and seamless
                financial services.
              </li>
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                Banking Loan Management – An integrated system for loan
                origination, credit scoring, and repayment tracking.
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-auto pt-5">
              <Button
                onClick={() => handleDetailsClick(1)}
                className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button"
              >
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.01 12H20.33"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H6.97"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-full box-shadow md:px-12 md:py-10 py-8 px-8 md:h-full h-auto">
          <img src="/Frame 1000011454 (1).png" alt="" />
          <div className="my-7">
            <h2 className="font-[900] md:text-[24px] text-[16px] text-[#2B2B2B]">
              Payment Processing & Wallet Solutions
            </h2>
            <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500] font-poppins">
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                STPay – A comprehensive payment gateway for businesses and
                consumers.
              </li>
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                Fast-Pay.iq – A seamless digital wallet solution for effortless
                transactions.
              </li>
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                GlobPay – A global payment solution connecting businesses with
                cross-border transactions.
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-auto pt-5">
              <Button
                onClick={() => handleDetailsClick(2)}
                className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button"
              >
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.01 12H20.33"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H6.97"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-full box-shadow md:px-12 md:py-10 py-8 px-8 md:h-full h-auto">
          <img src="/Frame 1000011454 (2).png" alt="" />
          <div className="my-7">
            <h2 className="font-[900] md:text-[24px] text-[16px] text-[#2B2B2B]">
              Digital Identity & Authentication
            </h2>
            <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500] font-poppins">
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                VerifyMe Global Crypto – A secure identity verification solution
                for digital assets and blockchain transactions.
              </li>
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                Fast-Pay.iq – A seamless digital wallet solution for effortless
                transactions.
              </li>
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                Digital Authentication (KYIC/KYB) – AI-powered Know Your
                Individual Customer (KYIC) and Know Your Business (KYB)
                solutions.
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-auto pt-5">
              <Button
                onClick={() => handleDetailsClick(3)}
                className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button"
              >
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.01 12H20.33"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H6.97"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 col-span-full box-shadow md:px-12 md:py-10 py-8 px-8 md:h-full h-auto">
          <img src="/undraw_contact-us_kcoa 1.png" alt="" />
          <div className="my-7">
            <h2 className="font-[900] md:text-[24px] text-[16px] text-[#2B2B2B]">
              Enterprise & Communication Solutions (SaaS)
            </h2>
            <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500] font-poppins">
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                Call Center Solutions – Advanced cloud-based call center
                platforms for enhanced customer interactions.
              </li>
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                ERP Solutions (Odoo Partner) – Comprehensive enterprise resource
                planning for business automation and efficiency.
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-auto pt-5">
              <Button
                onClick={() => handleDetailsClick(4)}
                className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button"
              >
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.01 12H20.33"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H6.97"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-full box-shadow md:px-12 md:py-10 py-8 px-8 md:h-full h-auto">
          <img src="/Frame 1000011454 (3).png" alt="" />
          <div className="my-7">
            <h2 className="font-[900] md:text-[24px] text-[16px] text-[#2B2B2B]">
              E-commerce & Retail Solutions
            </h2>
            <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500] font-poppins">
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                KinderCubby – A digital commerce platform for child care and
                educational services.
              </li>
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                E-commerce & Retail Solutions – Scalable platforms enabling
                seamless digital shopping experiences.
              </li>
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                Distribution Management for FMCG – Data-driven distribution
                tracking and management for fast-moving consumer goods.
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-auto pt-5">
              <Button
                onClick={() => handleDetailsClick(5)}
                className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button"
              >
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.01 12H20.33"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H6.97"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-full box-shadow md:px-12 md:py-10 py-8 px-8 md:h-full h-auto">
          <img src="/Frame 1000011454 (4).png" alt="" />
          <div className="my-7">
            <h2 className="font-[900] md:text-[24px] text-[16px] text-[#2B2B2B]">
              Ticketing & Event Management
            </h2>
            <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500] font-poppins">
              <li className="text-[#555555] md:text-[18px] font-[500] text-[14px] mb-2 md:mb-3">
                Roztktat.iq – A streamlined ticketing platform for events and
                entertainment.
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-auto pt-5">
              <Button
                onClick={() => handleDetailsClick(6)}
                className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button"
              >
                More Details
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.01 12H20.33"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H6.97"
                    stroke="#138B7D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
