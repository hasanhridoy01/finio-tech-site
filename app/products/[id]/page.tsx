import React from "react";
import ProductCarousel from "@/components/products-components/ProductCarousel";

interface PageProps {
  params: {
    id: number;
  };
}

const ProductDetails = ({ params }: PageProps) => {
  const { id } = params;
  console.log(id);

  return (
    <div className="container mx-auto md:pt-44 pt-28 md:px-0 px-5 h-auto">
      <div className="my-10">
        <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start text-white">
          Loan Management Platform
        </h1>
        <h3 className="md:text-[18px] text-[12px] font-medium text-[#222222] text-center md:text-start md:w-[850px] w-full">
          Discover Cutting-Edge Financial Technologies Designed to Streamline
          Operations, Maximize Efficiency, and Drive Sustainable Growth for Your
          Business
        </h3>
      </div>
      <div className="my-20 flex items-center justify-center">
        <ProductCarousel />
      </div>
    </div>
  );
};

export default ProductDetails;