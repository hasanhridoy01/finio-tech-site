"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface detailProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const ServiceItem = ({ id, title, image, description }: detailProps) => {
  const router = useRouter();
  const handleDetailsClick = (id: number) => {
    router.push(`/services/${id}`);
  };
  return (
    <div className="md:col-span-1 col-span-full box-shadow md:px-12 md:py-10 py-8 px-8 md:h-full h-auto">
      <div className="flex justify-center">
        <img src={image} alt="" />
      </div>

      <div className="my-7">
        <h2 className="font-[900] md:text-[24px] text-[16px] text-[#2B2B2B]">
          {title}
        </h2>
        <p className="text-[#555] text-[14px] md:text-[18px] font-[500] mt-2  ">
          {description}
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-auto pt-5">
          <Button
            onClick={() => handleDetailsClick(id)}
            className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] secondary-button"
          >
            Details
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
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.01 12H20.33"
                stroke="#138B7D"
                strokeWidth="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 12H6.97"
                stroke="#138B7D"
                strokeWidth="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
