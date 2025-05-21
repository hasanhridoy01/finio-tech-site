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
            Salesforce
          </h1>
          <h3 className="text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            Leading cloud-based CRM platform for sales, service, marketing, and beyond.
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
            <img src="/service/five.png" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14 px-8 py-12 box-shadow">
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold">
          Overview :
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-4 leading-[30px]">
          Gist: Salesforce services designed to streamline customer relationship management (CRM). We specialize in Salesforce implementation, customization, and integration, optimizing sales, marketing, and customer service operations to improve efficiency, enhance customer experiences, and drive growth.
        </p>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
          FinioTech Ltd., leveraging the power of Salesforce, offers comprehensive Salesforce services to help businesses streamline customer relationship management (CRM). We specialize in Salesforce implementation, customization, and integration to optimize sales, marketing, and customer service operations. Our solutions are tailored to your unique business needs, helping you improve efficiency, enhance customer experiences, and drive growth with Salesforce's robust capabilities.
        </p>
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold mt-10">
          This service covers:
        </h2>
        <ul className="details">
          <li>Tracks Sales Activities</li>
          <li>Supports Customer Service</li>
          <li>Cloud-Based CRM Platform</li>
          <li>Enhances Customer Loyalty</li>
          <li>Manages Customer Relationships</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
