import AboutTabs from "@/components/about-components/AboutTabs";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="container mx-auto md:pt-44 pt-28 md:px-0 px-5 h-auto">
      <div className="my-10">
        <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start text-white">
          FinioTech Ltd.
        </h1>
        <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start md:w-[850px] w-full">
          We are the first call for every outrageous, unthinkable and unknown
          possibility in the field of digitally immersive experiences. And we
          are here for you.
        </h3>
      </div>
      <div className="about-card-box md:rounded-tr-[500px] rounded-tr-[42px]  md:rounded-br-[500px] rounded-br-[42px] my-14 md:py-[74px] py-2 md:pl-[80px] pl-2 md:px-0 px-5">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 items-center">
          <div className="col-span-full md:col-span-2 md:px-0 px-5 md:py-0 py-5">
            <h2 className="font-[900] md:text-[24px] text-[16px] text-[#2B2B2B] mb-2">
              E-commerce & Retail Solutions
            </h2>
            <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-justify mb-2">
              <strong>FinioTech Ltd.</strong> is a leading FinTech company
              committed to revolutionizing digital financial services. With a
              strong global and local footprint, we provide innovative, secure,
              and scalable financial solutions that enhance customer experiences
              and drive digital transformation. Our portfolio spans multiple
              sectors, including banking, payments, authentication, and digital
              commerce, ensuring seamless financial transactions across diverse
              industries.
            </h3>
            <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-justify">
              As a PaaS (Platform as a Service) and SaaS (Software as a Service)
              provider, FinioTech Ltd. specializes in delivering robust
              financial and enterprise solutions tailored for scalability,
              security, and efficiency. Our expertise empowers businesses to
              optimize operations, enhance digital engagement, and accelerate
              revenue growth.
            </h3>
            <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-justify">
              We are also an official Odoo Partner, delivering comprehensive ERP
              and business management solutions to support digital
              transformation across various indust
            </h3>
          </div>
          <div className="col-span-full md:col-span-1 pr-[38px] md:block hidden">
            <img src="/right.png" alt="" />
          </div>
        </div>
      </div>

      <div className="md:my-60 my-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
            Our Mission & Vision
          </h1>
          <h3 className="md:text-[16px] text-[14px] font-[400] text-[#222222] text-center md:text-start">
            Driving Innovation Today, Shaping the Future of Tomorrow
          </h3>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center my-8">
          {/* Mission Card */}
          <div className="relative box-shadow rounded-[20px] md:px-8 px-5 md:py-10 py-8 bg-[#EAF8F6] overflow-hidden md:h-full h-auto">
            <div className="relative z-10">
              <h2 className="font-[900] md:text-[24px] text-[18px] text-[#2B2B2B] mb-4">
                Mission
              </h2>
              <div className="px-4 py-3 bg-white rounded-[12px] inline-block max-w-[390px]">
                <p className="text-[14px] md:text-[16px] font-[500] text-[#222222] text-left">
                  To empower businesses and individuals with cutting-edge
                  financial solutions that ensure seamless, secure, and
                  efficient transactions worldwide.
                </p>
              </div>
            </div>
            {/* Background Illustration */}
            <img
              src="/Layer_1.png"
              alt="Mission"
              className="absolute bottom-0 right-0 max-w-[50%] md:max-w-[40%] z-10 md:block hidden"
            />
          </div>

          {/* Vision Card */}
          <div className="relative box-shadow rounded-[20px] md:px-8 px-5 md:py-10 py-8 bg-[#EAF8F6] overflow-hidden md:h-full h-auto">
            {/* Background Illustration */}
            <img
              src="/Layer_2.png"
              alt="Vision"
              className="absolute top-4 left-5 max-w-[50%] md:max-w-[40%] z-10 md:block hidden"
            />
            <div className="relative z-10 md:ml-[170px] ml-0">
              <h2 className="font-[900] md:text-[24px] text-[18px] text-[#2B2B2B] mb-4">
                Vision
              </h2>
              <div className="px-4 py-3 bg-white rounded-[12px] inline-block">
                <p className="text-[14px] md:text-[16px] font-[500] text-[#222222] text-left">
                  To be the most trusted FinTech partner, driving innovation and
                  financial inclusion through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:my-60 my-24">
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
            At a glance
          </h1>
          <h3 className="md:text-[16px] text-[14px] font-[400] text-[#222222] text-center md:text-start">
            Achieved success throughout journey
          </h3>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 items-center my-10">
          <div className="col-span-full md:col-span-1 box-shadow md:px-12 px-8 md:py-14 py-10 flex items-center justify-center flex-col gap-5">
            <svg
              width="127"
              height="126"
              viewBox="0 0 127 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_175_3733)">
                <rect
                  x="1.75"
                  y="1"
                  width="120"
                  height="120"
                  rx="60"
                  fill="url(#paint0_linear_175_3733)"
                />
                <path
                  d="M74.2166 76.9501L70.7332 80.4518C69.7799 81.4051 68.2032 81.4051 67.2132 80.4518L64.3166 77.5368C63.3632 76.5651 63.3632 75.0068 64.3166 74.0168L67.8182 70.5518L74.2166 76.9501Z"
                  fill="#096B60"
                />
                <path
                  d="M81.2014 69.9833L76.0497 75.1166L69.6514 68.7182L74.7847 63.5483C75.7564 62.5949 77.333 62.5949 78.3047 63.5483L81.2014 66.4633C82.1547 67.4349 82.1547 69.0299 81.2014 69.9833Z"
                  fill="#096B60"
                />
                <path
                  d="M52.9523 42.7042C53.5054 42.6654 53.9587 43.1179 53.9587 43.6723V52.3001C53.9587 52.8524 53.5109 53.3001 52.9587 53.3001H44.417C43.8647 53.3001 43.4132 52.8502 43.4482 52.299C43.809 46.6119 47.2854 43.1009 52.9523 42.7042Z"
                  fill="#096B60"
                />
                <path
                  d="M78.122 53.3001H70.542C69.9897 53.3001 69.542 52.8524 69.542 52.3001V43.673C69.542 43.1183 69.9947 42.6657 70.5481 42.7048C75.8564 43.0801 79.2474 46.1878 79.9553 51.2467C80.102 52.3284 79.222 53.3001 78.122 53.3001Z"
                  fill="#096B60"
                />
                <path
                  d="M52.9587 68.8833C53.5109 68.8833 53.9587 69.331 53.9587 69.8833V77.3533C53.9587 78.4533 52.987 79.3333 51.887 79.1866C46.904 78.4452 43.8669 75.1092 43.462 69.8954C43.4189 69.3398 43.8725 68.8833 44.4297 68.8833H52.9587Z"
                  fill="#096B60"
                />
                <path
                  d="M53.9587 57.05C53.9587 56.4978 53.5109 56.05 52.9587 56.05H44.417C43.8647 56.05 43.417 56.4978 43.417 57.05V65.1334C43.417 65.6857 43.8647 66.1334 44.417 66.1334H52.9587C53.5109 66.1334 53.9587 65.6857 53.9587 65.1334V57.05Z"
                  fill="#096B60"
                />
                <path
                  d="M66.7913 57.05C66.7913 56.4978 66.3436 56.05 65.7913 56.05H57.708C57.1557 56.05 56.708 56.4978 56.708 57.05V65.1334C56.708 65.6857 57.1557 66.1334 57.708 66.1334H64.958C65.9663 66.1334 66.7913 65.3084 66.7913 64.3V57.05Z"
                  fill="#096B60"
                />
                <path
                  d="M66.7913 43.6667C66.7913 43.1145 66.3436 42.6667 65.7913 42.6667H57.708C57.1557 42.6667 56.708 43.1145 56.708 43.6667V52.3001C56.708 52.8524 57.1557 53.3001 57.708 53.3001H65.7913C66.3436 53.3001 66.7913 52.8524 66.7913 52.3001V43.6667Z"
                  fill="#096B60"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_175_3733"
                  x="0.75"
                  y="0"
                  width="126"
                  height="126"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.75026 0 0 0 0 0.895833 0 0 0 0 0.87885 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_175_3733"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_175_3733"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_175_3733"
                  x1="106.75"
                  y1="101.714"
                  x2="17.8214"
                  y2="20.2857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F0F9FA" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex items-center flex-col">
              <h4 className="md:text-[36px] text-[24px] font-[600] text-[#138B7D]">
                23
              </h4>
              <h5 className="md:text-[16px] text-[12px] font-[400]">
                Completed projects
              </h5>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 box-shadow md:px-12 px-8 md:py-14 py-10 flex items-center justify-center flex-col gap-5">
            <svg
              width="127"
              height="126"
              viewBox="0 0 127 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_175_3739)">
                <rect
                  x="1.25"
                  y="1"
                  width="120"
                  height="120"
                  rx="60"
                  fill="url(#paint0_linear_175_3739)"
                />
                <path
                  d="M53.2753 77.3351C53.2203 77.3351 53.147 77.3717 53.092 77.3717C49.5353 75.6117 46.6387 72.6967 44.8603 69.1401C44.8603 69.0851 44.897 69.0117 44.897 68.9567C47.1337 69.6167 49.4437 70.1117 51.7353 70.4967C52.1387 72.8067 52.6153 75.0984 53.2753 77.3351Z"
                  fill="#096B60"
                />
                <path
                  d="M77.6403 69.1584C75.8253 72.8067 72.8003 75.7584 69.1153 77.5367C69.812 75.2084 70.3987 72.8617 70.7837 70.4967C73.0937 70.1117 75.367 69.6167 77.6037 68.9567C77.5853 69.0301 77.6403 69.1034 77.6403 69.1584Z"
                  fill="#096B60"
                />
                <path
                  d="M77.787 53.1351C75.477 52.4384 73.1487 51.8701 70.7837 51.4667C70.3987 49.1017 69.8303 46.7551 69.1153 44.4634C72.9103 46.2784 75.972 49.3401 77.787 53.1351Z"
                  fill="#096B60"
                />
                <path
                  d="M53.2753 44.6651C52.6153 46.9017 52.1387 49.1751 51.7537 51.4851C49.3887 51.8517 47.042 52.4384 44.7137 53.1351C46.492 49.4501 49.4437 46.4251 53.092 44.6101C53.147 44.6101 53.2203 44.6651 53.2753 44.6651Z"
                  fill="#096B60"
                />
                <path
                  d="M67.6487 51.0817C63.3953 50.6051 59.1053 50.6051 54.852 51.0817C55.3103 48.5701 55.897 46.0584 56.722 43.6384C56.7587 43.4917 56.7403 43.3817 56.7587 43.2351C58.207 42.8867 59.692 42.6667 61.2503 42.6667C62.7903 42.6667 64.2937 42.8867 65.7237 43.2351C65.742 43.3817 65.742 43.4917 65.7787 43.6384C66.6037 46.0767 67.1903 48.5701 67.6487 51.0817Z"
                  fill="#096B60"
                />
                <path
                  d="M51.332 67.3984C48.802 66.9401 46.3087 66.3534 43.8887 65.5284C43.742 65.4917 43.632 65.5101 43.4853 65.4917C43.137 64.0434 42.917 62.5584 42.917 61.0001C42.917 59.4601 43.137 57.9567 43.4853 56.5267C43.632 56.5084 43.742 56.5084 43.8887 56.4717C46.327 55.6651 48.802 55.0601 51.332 54.6017C50.8737 58.8551 50.8737 63.1451 51.332 67.3984Z"
                  fill="#096B60"
                />
                <path
                  d="M79.5837 61.0001C79.5837 62.5584 79.3637 64.0434 79.0153 65.4917C78.8687 65.5101 78.7587 65.4917 78.612 65.5284C76.1737 66.3351 73.6803 66.9401 71.1687 67.3984C71.6453 63.1451 71.6453 58.8551 71.1687 54.6017C73.6803 55.0601 76.192 55.6467 78.612 56.4717C78.7587 56.5084 78.8687 56.5267 79.0153 56.5267C79.3637 57.9751 79.5837 59.4601 79.5837 61.0001Z"
                  fill="#096B60"
                />
                <path
                  d="M67.6487 70.9184C67.1903 73.4484 66.6037 75.9417 65.7787 78.3617C65.742 78.5084 65.742 78.6184 65.7237 78.7651C64.2937 79.1134 62.7903 79.3334 61.2503 79.3334C59.692 79.3334 58.207 79.1134 56.7587 78.7651C56.7403 78.6184 56.7587 78.5084 56.722 78.3617C55.9153 75.9234 55.3103 73.4484 54.852 70.9184C56.9787 71.1567 59.1053 71.3217 61.2503 71.3217C63.3953 71.3217 65.5403 71.1567 67.6487 70.9184Z"
                  fill="#096B60"
                />
                <path
                  d="M68.1498 67.8995C63.5644 68.478 58.9362 68.478 54.3509 67.8995C53.7724 63.3142 53.7724 58.686 54.3509 54.1006C58.9362 53.5221 63.5644 53.5221 68.1498 54.1006C68.7283 58.686 68.7283 63.3142 68.1498 67.8995Z"
                  fill="#096B60"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_175_3739"
                  x="0.25"
                  y="0"
                  width="126"
                  height="126"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.75026 0 0 0 0 0.895833 0 0 0 0 0.87885 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_175_3739"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_175_3739"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_175_3739"
                  x1="106.25"
                  y1="101.714"
                  x2="17.3214"
                  y2="20.2857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F0F9FA" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex items-center flex-col">
              <h4 className="md:text-[36px] text-[24px] font-[600] text-[#138B7D]">
                13+
              </h4>
              <h5 className="md:text-[16px] text-[12px] font-[400]">
                Countries served
              </h5>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 box-shadow md:px-12 px-8 md:py-14 py-10 flex items-center justify-center flex-col gap-5">
            <svg
              width="127"
              height="126"
              viewBox="0 0 127 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_175_3721)">
                <rect
                  x="1.75"
                  y="1"
                  width="120"
                  height="120"
                  rx="60"
                  fill="url(#paint0_linear_175_3721)"
                />
                <path
                  d="M71.8881 53.2446H71.5031C70.1106 53.1941 68.7936 52.5991 67.8355 51.5874C66.8773 50.5757 66.3545 49.2283 66.3798 47.8351C66.405 46.442 66.9761 45.1144 67.9703 44.1381C68.9645 43.1618 70.3022 42.6147 71.6956 42.6147C73.089 42.6147 74.4266 43.1618 75.4208 44.1381C76.4149 45.1144 76.9862 46.442 77.0114 47.8351C77.0366 49.2283 76.5139 50.5757 75.5557 51.5874C74.5976 52.5991 73.2805 53.1941 71.8881 53.2446Z"
                  fill="#096B60"
                />
                <path
                  d="M77.8653 65.9509C75.593 67.3354 72.9075 67.8803 70.2752 67.4909C70.9823 65.9426 71.3511 64.2613 71.357 62.5592C71.3714 60.7918 70.9694 59.0458 70.1836 57.4626C72.8375 57.0548 75.5502 57.5934 77.8469 58.9842C78.4971 59.3039 79.045 59.7989 79.4287 60.4134C79.8124 61.0279 80.0167 61.7374 80.0186 62.4619C80.0205 63.1864 79.8199 63.8969 79.4394 64.5134C79.0589 65.1299 78.5137 65.6278 77.8653 65.9509Z"
                  fill="#096B60"
                />
                <path
                  d="M51.5568 53.2446H51.9418C53.3343 53.1941 54.6513 52.5991 55.6094 51.5874C56.5676 50.5757 57.0904 49.2283 57.0651 47.8351C57.0399 46.442 56.4688 45.1144 55.4746 44.1381C54.4804 43.1618 53.1427 42.6147 51.7493 42.6147C50.3559 42.6147 49.0182 43.1618 48.024 44.1381C47.0298 45.1144 46.4587 46.442 46.4335 47.8351C46.4083 49.2283 46.931 50.5757 47.8892 51.5874C48.8473 52.5991 50.1644 53.1941 51.5568 53.2446Z"
                  fill="#096B60"
                />
                <path
                  d="M51.758 62.5583C51.7549 64.2791 52.1238 65.9802 52.8396 67.545C50.2871 67.8673 47.7008 67.3113 45.5063 65.9683C44.8521 65.6489 44.3009 65.1521 43.9152 64.5347C43.5296 63.9172 43.3252 63.2038 43.3252 62.4758C43.3252 61.7478 43.5296 61.0345 43.9152 60.417C44.3009 59.7995 44.8521 59.3028 45.5063 58.9833C47.7009 57.6412 50.2889 57.0912 52.8396 57.425C52.0938 59.0317 51.724 60.7873 51.758 62.5583Z"
                  fill="#096B60"
                />
                <path
                  d="M61.9698 68.0944C61.8115 68.0761 61.6515 68.0761 61.4931 68.0944C59.8423 68.032 58.2819 67.3243 57.1474 66.1235C56.0128 64.9228 55.3947 63.3248 55.4259 61.6731C55.4572 60.0214 56.1352 58.4479 57.3143 57.2908C58.4934 56.1338 60.0795 55.4856 61.7315 55.4856C63.3835 55.4856 64.9695 56.1338 66.1487 57.2908C67.3278 58.4479 68.0058 60.0214 68.037 61.6731C68.0683 63.3248 67.4502 64.9228 66.3156 66.1235C65.181 67.3243 63.6206 68.032 61.9698 68.0944Z"
                  fill="#096B60"
                />
                <path
                  d="M56.0116 71.8895C55.3859 72.2012 54.8595 72.6811 54.4916 73.2753C54.1236 73.8696 53.9287 74.5547 53.9287 75.2537C53.9287 75.9527 54.1236 76.6378 54.4916 77.2321C54.8595 77.8263 55.3859 78.3063 56.0116 78.6179C57.7467 79.6529 59.7295 80.1993 61.7499 80.1993C63.7703 80.1993 65.7531 79.6529 67.4883 78.6179C68.1139 78.3063 68.6402 77.8263 69.0082 77.2321C69.3761 76.6378 69.571 75.9527 69.571 75.2537C69.571 74.5547 69.3761 73.8696 69.0082 73.2753C68.6402 72.6811 68.1139 72.2012 67.4883 71.8895C65.7531 70.8545 63.7703 70.3081 61.7499 70.3081C59.7295 70.3081 57.7467 70.8545 56.0116 71.8895Z"
                  fill="#096B60"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_175_3721"
                  x="0.75"
                  y="0"
                  width="126"
                  height="126"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.75026 0 0 0 0 0.895833 0 0 0 0 0.87885 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_175_3721"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_175_3721"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_175_3721"
                  x1="106.75"
                  y1="101.714"
                  x2="17.8214"
                  y2="20.2857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F0F9FA" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex items-center flex-col">
              <h4 className="md:text-[36px] text-[24px] font-[600] text-[#138B7D]">
                70+
              </h4>
              <h5 className="md:text-[16px] text-[12px] font-[400]">
                Team members
              </h5>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 box-shadow md:px-12 px-8 md:py-14 py-10 flex items-center justify-center flex-col gap-5">
            <svg
              width="127"
              height="126"
              viewBox="0 0 127 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_175_3751)">
                <rect
                  x="1.25"
                  y="1"
                  width="120"
                  height="120"
                  rx="60"
                  fill="url(#paint0_linear_175_3751)"
                />
                <path
                  d="M77.8234 54.731V67.271C77.8213 68.2837 77.5546 69.2783 77.0497 70.1562C76.5448 71.0341 75.8193 71.7648 74.945 72.276L64.055 78.5643C63.1765 79.0694 62.1808 79.3352 61.1675 79.3352C60.1541 79.3352 59.1586 79.0694 58.2801 78.5643L47.3901 72.276C46.5133 71.7676 45.7857 71.0375 45.2805 70.159C44.7752 69.2804 44.5101 68.2844 44.5117 67.271V54.731C44.5138 53.7182 44.7805 52.7236 45.2854 51.8457C45.7903 50.9678 46.5158 50.2371 47.3901 49.726L58.2801 43.4376C59.1586 42.9326 60.1541 42.6667 61.1675 42.6667C62.1808 42.6667 63.1765 42.9326 64.055 43.4376L74.945 49.726C75.8205 50.2357 76.5471 50.9661 77.0522 51.8443C77.5572 52.7226 77.8231 53.7179 77.8234 54.731Z"
                  fill="#138B7D"
                />
                <path
                  d="M61.3235 60.9996C62.1683 60.9996 62.9942 60.7491 63.6967 60.2797C64.3992 59.8104 64.9467 59.1432 65.27 58.3627C65.5933 57.5821 65.6778 56.7232 65.513 55.8946C65.3482 55.066 64.9414 54.3048 64.344 53.7074C63.7466 53.11 62.9855 52.7032 62.1569 52.5384C61.3282 52.3736 60.4693 52.4581 59.6887 52.7815C58.9082 53.1048 58.2411 53.6523 57.7717 54.3548C57.3023 55.0572 57.0518 55.8831 57.0518 56.728C57.0518 57.8609 57.5018 58.9474 58.3029 59.7485C59.104 60.5496 60.1905 60.9996 61.3235 60.9996Z"
                  fill="white"
                />
                <path
                  d="M66.1631 69.5426C66.4991 69.5455 66.8294 69.4559 67.1179 69.2837C67.4065 69.1115 67.6422 68.8633 67.7993 68.5662C67.9563 68.2691 68.0286 67.9346 68.0084 67.5992C67.9882 67.2638 67.8762 66.9404 67.6847 66.6643C66.9133 65.7043 65.9364 64.9297 64.8259 64.3974C63.7154 63.8652 62.4995 63.5889 61.268 63.5889C60.0365 63.5889 58.8207 63.8652 57.7102 64.3974C56.5997 64.9297 55.6227 65.7043 54.8513 66.6643C54.6598 66.9404 54.5479 67.2638 54.5277 67.5992C54.5075 67.9346 54.5798 68.2691 54.7369 68.5662C54.8939 68.8633 55.1297 69.1115 55.4182 69.2837C55.7068 69.4559 56.037 69.5455 56.373 69.5426H66.1631Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_175_3751"
                  x="0.25"
                  y="0"
                  width="126"
                  height="126"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.75026 0 0 0 0 0.895833 0 0 0 0 0.87885 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_175_3751"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_175_3751"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_175_3751"
                  x1="106.25"
                  y1="101.714"
                  x2="17.3214"
                  y2="20.2857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F0F9FA" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex items-center flex-col">
              <h4 className="md:text-[36px] text-[24px] font-[600] text-[#138B7D]">
                325+
              </h4>
              <h5 className="md:text-[16px] text-[12px] font-[400]">Clients</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="md:my-60 my-24">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="col-span-full md:col-end-1">
            <img src="/Grafics-about.png" alt="" />
          </div>
          <div className="col-span-full md:col-span-1">
            <h3 className="md:text-[16px] text-[14px] font-medium text-[#555555] text-center md:text-start mb-2">
              What kind of great things we do for you?
            </h3>
            <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start text-white">
              Why Choose FinioTech Ltd?
            </h1>
            <div className="md:my-8 my-5">
              <div className="box-shadow-two p-3 rounded-[8px] mb-4">
                <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start">
                  Proven track record in delivering cutting-edge FinTech
                  solutions{" "}
                </h3>
              </div>
              <div className="box-shadow-two p-3 rounded-[8px] mb-4">
                <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start">
                  Strong global and local presence with satisfied customers
                </h3>
              </div>
              <div className="box-shadow-two p-3 rounded-[8px] mb-4">
                <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start">
                  Scalable, secure, and innovative financial technology
                  solutions
                </h3>
              </div>
              <div className="box-shadow-two p-3 rounded-[8px] mb-4">
                <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start">
                  Expertise in digital payments, banking, and authentication
                </h3>
              </div>
              <div className="box-shadow-two p-3 rounded-[8px] mb-4">
                <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start">
                  Versatile PaaS & SaaS solutions tailored for enterprises and
                  financial institutions
                </h3>
              </div>
              <div className="box-shadow-two p-3 rounded-[8px] mb-4">
                <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start">
                  Official Odoo Partner for robust ERP and digital business
                  management solutions
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-start my-5">
              <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button flex items-center gap-1">
                Find More
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4297 6.42993L20.4997 12.4999L14.4297 18.5699"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.0098 12.5H20.3298"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12.5H6.97"
                    stroke="white"
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
      </div>

      <div className="md:my-60 my-24">
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
            Technologies we use
          </h1>
          <h3 className="md:text-[16px] text-[14px] font-[400] text-[#222222] text-center md:text-start">
            Explore the powerful tools and platforms we use to create
            cutting-edge FinTech solutions.
          </h3>
        </div>
        <div className="my-20">
          <AboutTabs />
        </div>
      </div>

      <div className="md:my-60 my-24">
        <div className="flex flex-col items-center justify-center mb-5">
          <h2 className="text-[11px] font-[900] text-[#222222] mb-2 text-center md:text-start">
            Our journey.
          </h2>
          <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
            Roadmap FinioTech Ltd.
          </h1>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-center md:text-start">
            Complete journey map of FinioTech.
          </h3>
        </div>

        <div className="my-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="box-shadow p-5 col-span-1">
            <div className="journey-box-card">
              <h3 className="md:text-[24px] text-[18px] font-[900] text-[#00A1A1] text-center">
                2019
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="md:text-[16px] text-[14px] font-semibold text-[#222222] text-start my-3">
                Foundation and Initial Expertise
              </h3>
              <h4 className="md:text-[14px] text-[12px] font-normal text-[#222222] text-start mb-1.5">
                ✦ Launched FinioTech with a mission to revolutionize the FinTech
                landscape.
              </h4>
              <h4 className="md:text-[14px] text-[12px] font-normal text-[#222222] text-start">
                ✦ Focused on building a robust foundation of innovative SaaS
                solutions
              </h4>
            </div>
          </div>
          <div className="box-shadow p-5 col-span-1">
            <div className="journey-box-card">
              <h3 className="md:text-[24px] text-[18px] font-[900] text-[#00A1A1] text-center">
                2020 - 2021
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="md:text-[16px] text-[14px] font-semibold text-[#222222] text-start my-3">
                Growth and Market Recognition
              </h3>
              <h4 className="md:text-[14px] text-[12px] font-normal text-[#222222] text-start mb-1.5">
                ✦ Expanded our portfolio with solutions for eWallets,
                neobanking, and loan management.
              </h4>
              <h4 className="md:text-[14px] text-[12px] font-normal text-[#222222] text-start">
                ✦ Gained recognition for delivering secure and scalable
                financial technology platforms.
              </h4>
            </div>
          </div>
          <div className="box-shadow p-5 col-span-1">
            <div className="journey-box-card">
              <h3 className="md:text-[24px] text-[18px] font-[900] text-[#00A1A1] text-center">
                2022
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="md:text-[16px] text-[14px] font-semibold text-[#222222] text-start my-3">
                Customer-Centric Innovations
              </h3>
              <h4 className="md:text-[14px] text-[12px] font-normal text-[#222222] text-start mb-1.5">
                ✦ Shifted focus to customer-centric designs and solutions..
              </h4>
              <h4 className="md:text-[14px] text-[12px] font-normal text-[#222222] text-start">
                ✦ Introduced advanced features to simplify and enhance user
                experiences in financial services.
              </h4>
            </div>
          </div>
          <div className="box-shadow p-5 col-span-1">
            <div className="journey-box-card">
              <h3 className="md:text-[24px] text-[18px] font-[900] text-[#00A1A1] text-center">
                2023 - Present
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="md:text-[16px] text-[14px] font-semibold text-[#222222] text-start my-3">
                Scaling New Heights
              </h3>
              <h4 className="md:text-[14px] text-[12px] font-normal text-[#222222] text-start mb-1.5">
                ✦ Expanded globally, offering tailored FinTech solutions to
                diverse markets.
              </h4>
              <h4 className="md:text-[14px] text-[12px] font-normal text-[#222222] text-start">
                ✦ Continued our vision to be the global leader in the financial
                technology ecosystem.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
