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
            Top – Up
          </h1>
          <h3 className="text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            Instant mobile and DTH recharge solutions for seamless prepaid
            balance management.
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
            <img src="/service/eight.png" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14 px-8 py-12 box-shadow">
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold">
          Overview :
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-4 leading-[30px]">
          A digital mobile top-up solution enabling seamless airtime, data, and
          DTH recharges, with real-time, secure transactions through integration
          with telecom operators.
        </p>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
          FinioTech Ltd. enables businesses to offer instant, secure, and
          seamless mobile top-up services for prepaid airtime, data, and DTH
          recharges. Our platform connects with major telecom operators,
          supporting real-time transactions through a robust and scalable
          system.
        </p>
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold mt-10">
          This service covers:
        </h2>
        <ul className="details">
          <li>Wide Agent Network</li>
          <li>Flexible Payment Methods</li>
          <li>Instant and Seamless Recharge</li>
          <li>Secure and Reliable Transactions</li>
          <li>Competitive Commission for Agents</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
