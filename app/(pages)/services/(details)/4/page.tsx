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
            TradeX ERP
          </h1>
          <h3 className="text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            Comprehensive ERP solution streamlining trade, inventory, and
            operations management.
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
            <img src="/service/four.png" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14 px-8 py-12 box-shadow">
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold">
          Overview :
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-4 leading-[30px]">
          Gist: All-in-one ERP designed to streamline operations, boost
          efficiency, and drive growth, with a modular design that allows
          businesses to integrate only the features they need.
        </p>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
          TradeX ERP is an all-in-one business management software, Powered by
          Odoo- that helps organizations streamline operations, boost
          efficiency, and drive growth. With a modular design, businesses in
          Bangladesh can integrate only the features they need, making it
          suitable for companies of all sizes. It’s integrated with Odoo ERP
          solution as Official Partner of Odd that streamlines business
          processes, from finance to supply chain management, ensuring
          operational efficiency.
        </p>
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold mt-10">
          This service covers:
        </h2>
        <ul className="details">
          <li>All-in-One </li>
          <li>Supports Scalable Growth</li>
          <li>Modular Functional Integration</li>
          <li>Streamlines Business Operations</li>
          <li>Improves Organizational Efficiency</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
