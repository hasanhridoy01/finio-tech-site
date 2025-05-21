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
            Common API for Utility Bill Collection
          </h1>
          <h3 className="text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            A unified API enabling seamless integration and automation of
            utility bill payments.
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
            <img src="/service/three.png" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14 px-8 py-12 box-shadow">
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold">
          Overview :
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
          At Finiotech, we simplify nationwide bill payments with our Common API
          Platform for Utility Bill Collection for DESCO, WASA, or PGCB.
          Designed to unify multiple service providers—electricity, gas, water,
          internet, and telecom—into a single, secure interface, our API
          empowers banks, fintechs, and payment apps to offer seamless bill
          payment services with minimal integration effort. With real-time
          transaction updates, automated reconciliation, and regulatory
          compliance built-in, our platform reduces complexity and accelerates
          time-to-market—helping you deliver a smoother, smarter payment
        </p>
      </div>
    </div>
  );
};

export default page;
