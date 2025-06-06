import React from "react";
import { Button } from "@/components/ui/button";
import ProductCarousel4 from "@/components/products-components/ProductCarousel4";
import Link from "next/link";

type propsType = {
  params: Promise<{ id: string }>;
};

const ProductDetails = async ({ params }: propsType) => {
  const paramsData = await params;
  console.log(paramsData.id);

  return (
    <div className="container mx-auto md:pt-44 pt-28 md:px-0 px-5 h-auto">
      <div className="my-10">
        <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start text-white">
          Dotz (LPG Gas Distribution Management App)
        </h1>
        <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start md:w-[850px] w-full">
          Dotz is a mobile solution for sales reps and distributors to manage
          stock, place orders, and track customer activity.
        </h3>
      </div>
      <div className="my-20 flex items-center justify-center">
        <ProductCarousel4 />
      </div>

      <div className="box-shadow md:px-12 md:py-10 py-8 px-8">
        <h2 className="md:text-[24px] text-[16px] font-[900] mb-2 text-center md:text-start">
          Features
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 my-6">
          <div className="w-full md:h-[72px] h-[46px] gap-[10px] px-[16px] py-[1px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-start">
            <h2 className="font-[700] capitalize md:text-[16px] text-[12px] text-[#2B2B2B] flex items-center justify-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0001 2.66675C8.65341 2.66675 2.66675 8.65341 2.66675 16.0001C2.66675 23.3467 8.65341 29.3334 16.0001 29.3334C23.3467 29.3334 29.3334 23.3467 29.3334 16.0001C29.3334 8.65341 23.3467 2.66675 16.0001 2.66675Z"
                  fill="#45B488"
                />
                <path
                  d="M14.8133 20.4936L22.3733 12.9336C22.76 12.5336 22.76 11.9069 22.3733 11.5202C21.9867 11.1336 21.3467 11.1336 20.96 11.5202L14.1067 18.3736L11.04 15.3069C10.6533 14.9202 10.0133 14.9202 9.62667 15.3069C9.24 15.6936 9.24 16.3336 9.62667 16.7202L13.4 20.4936C13.5867 20.6802 13.84 20.7869 14.1067 20.7869C14.3733 20.7869 14.6267 20.6802 14.8133 20.4936Z"
                  fill="white"
                />
              </svg>
              Manage stock in seconds
            </h2>
          </div>

          <div className="w-full md:h-[72px] h-[46px] gap-[10px] px-[16px] py-[1px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-start">
            <h2 className="font-[700] capitalize md:text-[16px] text-[12px] text-[#2B2B2B] flex items-center justify-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0001 2.66675C8.65341 2.66675 2.66675 8.65341 2.66675 16.0001C2.66675 23.3467 8.65341 29.3334 16.0001 29.3334C23.3467 29.3334 29.3334 23.3467 29.3334 16.0001C29.3334 8.65341 23.3467 2.66675 16.0001 2.66675Z"
                  fill="#45B488"
                />
                <path
                  d="M14.8133 20.4936L22.3733 12.9336C22.76 12.5336 22.76 11.9069 22.3733 11.5202C21.9867 11.1336 21.3467 11.1336 20.96 11.5202L14.1067 18.3736L11.04 15.3069C10.6533 14.9202 10.0133 14.9202 9.62667 15.3069C9.24 15.6936 9.24 16.3336 9.62667 16.7202L13.4 20.4936C13.5867 20.6802 13.84 20.7869 14.1067 20.7869C14.3733 20.7869 14.6267 20.6802 14.8133 20.4936Z"
                  fill="white"
                />
              </svg>
              Place orders with accuracy
            </h2>
          </div>

          <div className="w-full md:h-[72px] h-[46px] gap-[10px] px-[16px] py-[1px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-start">
            <h2 className="font-[700] capitalize md:text-[16px] text-[12px] text-[#2B2B2B] flex items-center justify-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0001 2.66675C8.65341 2.66675 2.66675 8.65341 2.66675 16.0001C2.66675 23.3467 8.65341 29.3334 16.0001 29.3334C23.3467 29.3334 29.3334 23.3467 29.3334 16.0001C29.3334 8.65341 23.3467 2.66675 16.0001 2.66675Z"
                  fill="#45B488"
                />
                <path
                  d="M14.8133 20.4936L22.3733 12.9336C22.76 12.5336 22.76 11.9069 22.3733 11.5202C21.9867 11.1336 21.3467 11.1336 20.96 11.5202L14.1067 18.3736L11.04 15.3069C10.6533 14.9202 10.0133 14.9202 9.62667 15.3069C9.24 15.6936 9.24 16.3336 9.62667 16.7202L13.4 20.4936C13.5867 20.6802 13.84 20.7869 14.1067 20.7869C14.3733 20.7869 14.6267 20.6802 14.8133 20.4936Z"
                  fill="white"
                />
              </svg>
              Track orders in real-time
            </h2>
          </div>

          <div className="w-full md:h-[72px] h-[46px] gap-[10px] px-[16px] py-[1px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-start">
            <h2 className="font-[700] capitalize md:text-[16px] text-[12px] text-[#2B2B2B] flex items-center justify-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0001 2.66675C8.65341 2.66675 2.66675 8.65341 2.66675 16.0001C2.66675 23.3467 8.65341 29.3334 16.0001 29.3334C23.3467 29.3334 29.3334 23.3467 29.3334 16.0001C29.3334 8.65341 23.3467 2.66675 16.0001 2.66675Z"
                  fill="#45B488"
                />
                <path
                  d="M14.8133 20.4936L22.3733 12.9336C22.76 12.5336 22.76 11.9069 22.3733 11.5202C21.9867 11.1336 21.3467 11.1336 20.96 11.5202L14.1067 18.3736L11.04 15.3069C10.6533 14.9202 10.0133 14.9202 9.62667 15.3069C9.24 15.6936 9.24 16.3336 9.62667 16.7202L13.4 20.4936C13.5867 20.6802 13.84 20.7869 14.1067 20.7869C14.3733 20.7869 14.6267 20.6802 14.8133 20.4936Z"
                  fill="white"
                />
              </svg>
              Available on all devices
            </h2>
          </div>

          <div className="w-full md:h-[72px] h-[46px] gap-[10px] px-[16px] py-[1px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-start">
            <h2 className="font-[700] capitalize md:text-[16px] text-[12px] text-[#2B2B2B] flex items-center justify-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0001 2.66675C8.65341 2.66675 2.66675 8.65341 2.66675 16.0001C2.66675 23.3467 8.65341 29.3334 16.0001 29.3334C23.3467 29.3334 29.3334 23.3467 29.3334 16.0001C29.3334 8.65341 23.3467 2.66675 16.0001 2.66675Z"
                  fill="#45B488"
                />
                <path
                  d="M14.8133 20.4936L22.3733 12.9336C22.76 12.5336 22.76 11.9069 22.3733 11.5202C21.9867 11.1336 21.3467 11.1336 20.96 11.5202L14.1067 18.3736L11.04 15.3069C10.6533 14.9202 10.0133 14.9202 9.62667 15.3069C9.24 15.6936 9.24 16.3336 9.62667 16.7202L13.4 20.4936C13.5867 20.6802 13.84 20.7869 14.1067 20.7869C14.3733 20.7869 14.6267 20.6802 14.8133 20.4936Z"
                  fill="white"
                />
              </svg>
              Sales Representatives
            </h2>
          </div>

          <div className="w-full md:h-[72px] h-[46px] gap-[10px] px-[16px] py-[1px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-start">
            <h2 className="font-[700] capitalize md:text-[16px] text-[12px] text-[#2B2B2B] flex items-center justify-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0001 2.66675C8.65341 2.66675 2.66675 8.65341 2.66675 16.0001C2.66675 23.3467 8.65341 29.3334 16.0001 29.3334C23.3467 29.3334 29.3334 23.3467 29.3334 16.0001C29.3334 8.65341 23.3467 2.66675 16.0001 2.66675Z"
                  fill="#45B488"
                />
                <path
                  d="M14.8133 20.4936L22.3733 12.9336C22.76 12.5336 22.76 11.9069 22.3733 11.5202C21.9867 11.1336 21.3467 11.1336 20.96 11.5202L14.1067 18.3736L11.04 15.3069C10.6533 14.9202 10.0133 14.9202 9.62667 15.3069C9.24 15.6936 9.24 16.3336 9.62667 16.7202L13.4 20.4936C13.5867 20.6802 13.84 20.7869 14.1067 20.7869C14.3733 20.7869 14.6267 20.6802 14.8133 20.4936Z"
                  fill="white"
                />
              </svg>
              Distributors
            </h2>
          </div>
        </div>

        <div className="my-7">
          <div className="mb-7">
            <h2 className="font-[900] md:text-[24px] text-[16px] text-[#2B2B2B]">
              Overview :
            </h2>
            <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-4 leading-[30px]">
              Dotz is a mobile solution for sales reps and distributors to
              manage stock, place orders, and track customer activity. With
              real-time data and user-friendly features, Dotz helps businesses
              streamline field operations and boost productivity.
            </p>
            <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
              We, at FinioTech, developed Dotz to empower sales reps and
              distributors with a simple, efficient mobile solution for managing
              stock, placing orders, and tracking customer activity. With
              real-time data and user-friendly features, Dotz helps businesses
              streamline field operations and boost productivity—anytime,
            </p>
          </div>

          <div className="flex md:items-center items-start justify-between md:flex-row flex-col w-full gap-3">
            <div className="">
              <h2 className="font-[900] md:text-[24px] text-[16px] text-[#222222]">
                Finiotech Used
              </h2>
              <div className="mt-5 flex flex-wrap gap-3 items-center">
                {[
                  "Java",
                  "Google Vision",
                  "Google MLKit",
                  "Android",
                  "Swift",
                  "UIKit",
                  "OCR",
                ].map((label, index) => (
                  <div
                    key={index}
                    className="gap-[10px] md:px-[18px] px-[12px] py-[14px] rounded-[47px] bg-[#DCF8EF] shadow-[inset_2px_2px_4px_0px_#BADFDD,inset_-2px_-2px_4px_0px_#FFFFFF] flex items-center justify-center"
                  >
                    <h2 className="font-[900] text-[#138B7D] uppercase md:text-[14px] text-[12px]">
                      {label}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h2 className="font-[900] md:text-[24px] text-[16px] text-[#222222]">
                Available On
              </h2>
              <div className="mt-5 flex flex-wrap gap-4 items-center justify-start">
                <img
                  src="/apple.png"
                  alt="Apple Store"
                  className="w-[120px] md:w-[150px] h-auto object-contain"
                />
                <img
                  src="/playstore.png"
                  alt="Play Store"
                  className="w-[120px] md:w-[150px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 md:flex-row flex-col my-10">
        {/* <Button className="md:w-[201px] w-[175px] md:h-[55px] h-[40px] secondary-button">
          Request a Demo
        </Button> */}
        <Link
          href="/contact"
          className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button"
        >
          Quick Contact
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
