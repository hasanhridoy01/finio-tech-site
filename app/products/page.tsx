"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();

  const handleDetailsClick = (id: number) => {
    router.push(`/products/${id}`);
  };
  return (
    <div className="container mx-auto md:pt-44 pt-28 md:px-0 px-5 h-auto">
      <div className="my-10">
        <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start text-white">
          Products
        </h1>
        <h3 className="md:text-[18px] text-[12px] font-medium text-[#222222] text-center md:text-start md:w-[850px] w-full">
          Discover Cutting-Edge Financial Technologies Designed to Streamline
          Operations, Maximize Efficiency, and Drive Sustainable Growth for Your
          Business
        </h3>
      </div>
      {/* section-content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center box-shadow md:px-12 md:pt-10 pb-5 pt-8 px-8">
        <div className="md:col-span-1 col-span-full">
          <img src="/Product-images1.png" alt="" />
        </div>
        <div className="md:col-span-2 col-span-full">
          <h2 className="leading-8 md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
            Neobank Platform
          </h2>
          <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
            Launch a fully digital bank with a feature-rich and user-friendly
            platform
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
            <li className="mb-1">
              Instant digital account opening with KYC/AML compliance for
              individuals and businesses
            </li>
            <li className="mb-1">
              Real-time fund transfers via API-driven connections
            </li>
            <li className="mb-1">
              Spend analytics and budgeting tools powered by AI
            </li>
            <li className="mb-1">Debit/credit card issuance and management</li>
          </ul>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
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
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.01 12H20.33"
                  stroke="#138B7D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 12H6.97"
                  stroke="#138B7D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center box-shadow md:px-12 md:pt-10 pb-5 pt-8 px-8 mt-10">
        <div className="md:col-span-1 col-span-full">
          <img src="/Product-images2.png" alt="" />
        </div>
        <div className="md:col-span-2 col-span-full">
          <h2 className="leading-8 md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
            Mobile Financial Services Platform
          </h2>
          <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
            Deliver seamless digital payment experiences with our robust,
            secure, and scalable eWallet solutions
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
            <li className="mb-1">Single or Multi-currency options</li>
            <li className="mb-1">Cross-border payments</li>
            <li className="mb-1">
              QR code and NFC-enabled contactless payments
            </li>
            <li className="mb-1">Peer-to-peer (P2P) transfers</li>
            <li className="mb-1">
              Loyalty rewards, cashback, and coupon integration
            </li>
          </ul>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
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
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.01 12H20.33"
                  stroke="#138B7D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 12H6.97"
                  stroke="#138B7D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center box-shadow md:px-12 md:pt-10 pb-5 pt-8 px-8 mt-10">
        <div className="md:col-span-1 col-span-full">
          <img src="/Product-images3.png" alt="" />
        </div>
        <div className="md:col-span-2 col-span-full">
          <h2 className="leading-8 md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
            Loan Management Platform
          </h2>
          <h3 className="md:text-[18px] text-[12px] font-[500] text-[#222222] text-center md:text-start">
            Streamline your lending operations with our automated loan platform
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[12px] md:text-[18px] font-[500]">
            <li className="mb-1">
              End-to-end loan lifecycle management (origination to closure)
            </li>
            <li className="mb-1">AI-driven credit scoring and risk analysis</li>
            <li className="mb-1">Payment scheduling and reminders</li>
            <li className="mb-1">Multi-channel borrower communication tools</li>
          </ul>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
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
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.01 12H20.33"
                  stroke="#138B7D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 12H6.97"
                  stroke="#138B7D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-10">
        <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button">
          Load More
        </Button>
      </div>
    </div>
  );
}
