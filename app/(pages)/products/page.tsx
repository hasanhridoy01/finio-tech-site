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
        <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start md:w-[850px] w-full">
          Discover Cutting-Edge Financial Technologies Designed to Streamline
          Operations, Maximize Efficiency, and Drive Sustainable Growth for Your
          Business
        </h3>
      </div>
      {/* section-content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center box-shadow md:px-12 md:py-10 pb-5 py-8 px-8">
        <div className="md:col-span-1 col-span-full">
          <img src="/Product-images1.png" alt="" />
        </div>
        <div className="md:col-span-2 col-span-full">
          <h2 className="leading-8 md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
            Neo Banking
          </h2>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-center md:text-start">
            A fully digital banking solution enabling seamless financial
            transactions, customer onboarding, and innovative financial
            services.
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500]">
            <li className="mb-1">Multi-Currency Support</li>
            <li className="mb-1">Fully Digital Account</li>
            <li className="mb-1">Digital Payments & Transfers</li>
            <li className="mb-1">Real-Time Transaction</li>
            <li className="mb-1">Virtual & Physical Cards</li>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center box-shadow md:px-12 md:py-10 pb-5 py-8 px-8 mt-10">
        <div className="md:col-span-1 col-span-full">
          <img src="/Product-images2.png" alt="" />
        </div>
        <div className="md:col-span-2 col-span-full">
          <h2 className="leading-8 md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
            Wallet & Mobile Financial Solutions
          </h2>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-center md:text-start">
            E-Wallet Mobile App offering fast, secure, and seamless transactions
            for businesses and individuals, with global accessibility and
            convenience for on-the-go payments. Simplifying digital transactions
            for users anytime, anywhere.
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500]">
            <li className="mb-1">Registration & Login</li>
            <li className="mb-1">Sync Accounts</li>
            <li className="mb-1">Balance Replenishment</li>
            <li className="mb-1">Online payments</li>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center box-shadow md:px-12 md:py-10 pb-5 py-8 px-8 mt-10">
        <div className="md:col-span-1 col-span-full">
          <img src="/Product-images3.png" alt="" />
        </div>
        <div className="md:col-span-2 col-span-full">
          <h2 className="leading-8 md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
            Halal Loan
          </h2>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-center md:text-start">
            A Shariah-compliant financing solution designed to facilitate
            ethical and interest-free lending for individuals and businesses.
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500]">
            <li className="mb-1">Interest-Free Loan Structure</li>
            <li className="mb-1">Shariah Compliance Monitoring</li>
            <li className="mb-1">Profit & Risk Sharing Mechanism</li>
            <li className="mb-1">Purpose-Based Loan Categories</li>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center box-shadow md:px-12 md:py-10 pb-5 py-8 px-8 mt-10">
        <div className="md:col-span-1 col-span-full">
          <img src="/gas.png" alt="" />
        </div>
        <div className="md:col-span-2 col-span-full">
          <h2 className="leading-8 md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
            Dotz (LPG Gas Distribution Management App)
          </h2>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-center md:text-start">
            Dotz is a mobile solution for sales reps and distributors to manage
            stock, place orders, and track customer activity. With real-time
            data and user-friendly features, Dotz helps businesses streamline
            field operations and boost productivity.
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500]">
            <li className="mb-1">Manage stock in seconds</li>
            <li className="mb-1">Place orders with accuracy</li>
            <li className="mb-1">Track orders in real-time</li>
            <li className="mb-1">Available on all devices</li>
          </ul>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center box-shadow md:px-12 md:py-10 pb-5 py-8 px-8 mt-10">
        <div className="md:col-span-1 col-span-full">
          <img src="/st.png" alt="" />
        </div>
        <div className="md:col-span-2 col-span-full">
          <h2 className="leading-8 md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
            ST Pay (E-Wallet Mobile App)
          </h2>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-center md:text-start">
            E-Wallet Mobile App offering fast, secure, and seamless transactions
            for businesses and individuals, with global accessibility and
            convenience for on-the-go payments. Simplifying digital transactions
            for users anytime, anywhere.
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500]">
            <li className="mb-1">Registration & Login</li>
            <li className="mb-1">Sync Accounts</li>
            <li className="mb-1">Balance Replenishment</li>
            <li className="mb-1">Online payments</li>
          </ul>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center box-shadow md:px-12 md:py-10 pb-5 py-8 px-8 mt-10">
        <div className="md:col-span-1 col-span-full">
          <img src="/verify.png" alt="" />
        </div>
        <div className="md:col-span-2 col-span-full">
          <h2 className="leading-8 md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
            VerifyMe Global (e-KYC)
          </h2>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-center md:text-start">
             Robust identity verification solution designed for digital assets and blockchain transactions, ensuring secure and compliant user authentication.
          </h3>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-2.5 ml-3 text-[#222222] text-[14px] md:text-[18px] font-[500]">
            <li className="mb-1">Address Verification</li>
            <li>Customizable Workflows</li>
            <li>Digital Signature</li>
            <li>Secure Data Encryption</li>
          </ul>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
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

      {/* <div className="flex items-center justify-center my-10">
        <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button">
          Load More
        </Button>
      </div> */}
    </div>
  );
}
