import React from "react";

const page = () => {
  return (
    <div className="container mx-auto pt-28 px-5 md:px-0 md:pt-44 my-10 bg-red">
      {/* Top Grid Section */}
      <div className="">
        {/* Left Image */}

        {/* Right Content */}
        <div className="">
          <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
            Common API Infrastructure
          </h1>
          <h3 className="text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            Unified, reliable, and scalable architecture for seamless API
            integration.
          </h3>

          {/* Features List */}
        </div>
        <div className="">
          <div className="flex justify-center py-10 ">
            {/* <img
              src={serviceData.image}
              alt="Service"
              className="w-full h-full object-cover"
            /> */}
            <img src="/service/two.png" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14 px-8 py-12 box-shadow">
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold">
          Overview :
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
          At Finiotech, we accelerate digital transformation through a unified
          Common API Infrastructure that connects your financial, retail, and
          logistics ecosystems with unmatched agility. Our API platform offers a
          standardized gateway for integrating third-party services—ranging from
          KYC, payments, and credit scoring to ERP, CRM, and delivery
          systems—enabling faster development, lower integration costs, and
          seamless interoperability. Built with security, scalability, and
          compliance in mind, our Common API solution empowers businesses to
          innovate quickly and deliver connected experiences across platforms.
        </p>
      </div>
    </div>
  );
};

export default page;
