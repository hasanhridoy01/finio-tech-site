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
            Bulk SMS (A2P SMS Service)
          </h1>
          <h3 className="text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            High-volume, reliable messaging service for automated customer
            engagement and notifications.
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
            <img src="/service/seven.png" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14 px-8 py-12 box-shadow">
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold">
          Overview :
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-4 leading-[30px]">
          Gist: A bulk SMS solution enabling seamless communication, with high
          deliverability, real-time reporting, and customizable messaging for
          businesses to reach large audiences efficiently.
        </p>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
          FinioTech Ltd. offers a powerful, secure, and scalable Bulk SMS
          platform designed to help businesses send promotional, transactional,
          and OTP messages with exceptional efficiency and reliability. Our
          platform ensures high deliverability, providing real-time delivery
          reports and the ability to customize messages for targeted
          communication. With multilingual support and a user-friendly
          interface, businesses can easily connect with their audience, improve
          engagement, and streamline messaging operations.
        </p>
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold mt-10">
          This service covers:
        </h2>
        <ul className="details">
          <li>API Integration</li>
          <li>High Delivery Rate</li>
          <li>Multilingual Support</li>
          <li>Real-Time Delivery Reports</li>
          <li>Scalable and Cost-Effective</li>
          <li>Secure Messaging Gateway</li>
          <li>Customizable SMS Templates</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
