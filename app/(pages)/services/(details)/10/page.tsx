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
            Customized Campaign (Manufacturer, Retail, Distributor & Consumer-based)
          </h1>
          <h3 className="text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            Tailored marketing campaigns designed for every link in the supply chain — from manufacturers to consumers.
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
            <img src="/service/ten.png" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14 px-8 py-12 box-shadow">
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold">
          Overview :
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-4 leading-[30px]">
          Gist: Data-driven customized campaign services designed to engage your audience with personalized, targeted messages across multiple channels, boosting engagement and conversions.
        </p>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
          FinioTech Ltd. offers powerful, data-driven customized campaign services designed to engage your audience with personalized and targeted messages across multiple channels. Our solution leverages insights to create effective campaigns that enhance engagement, drive conversions, and build lasting customer relationships.
        </p>
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold mt-10">
          This service covers:
        </h2>
        <ul className="details">
          <li>Secure Data Handling</li>
          <li>Interactive Campaigns</li>
          <li>Targeted Campaigns</li>
          <li>Automated Campaigns</li>
          <li>Multi-Channel Integration</li>
          <li>High Deliverability & Reliability</li>
          <li>Real-Time Analytics & Reporting</li>
          <li>Multilingual and Dynamic Content</li>
  
        </ul>
      </div>
    </div>
  );
};

export default page;
