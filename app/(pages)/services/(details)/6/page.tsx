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
            HireIQ- Augment your workforce intelligently
          </h1>
          <h3 className="text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            HireIQ – Intelligently augment your workforce with AI-powered hiring
            and talent optimization solutions.
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
            <img src="/service/six.png" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14 px-8 py-12 box-shadow">
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold">
          Overview :
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-4 leading-[30px]">
          Intelligent recruitment solution that streamlines hiring by connecting
          with top talent quickly using smart candidate matching, data
          analytics, and automated screening to enhance accuracy and reduce
          time-to-hire.
        </p>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
          FinioTech Ltd. offers HireIQ, a cutting-edge solution designed to
          streamline your recruitment process, allowing you to connect with top
          talent quickly and efficiently. With smart candidate matching, data
          analytics, and automated screening, HireIQ helps businesses identify
          the best candidates faster, enhance hiring accuracy, and reduce
          time-to-hire.
        </p>
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold mt-10">
          This service covers:
        </h2>
        <ul className="details">
          <li>Expert Recruiting Team</li>
          <li>Scalable Staffing Options</li>
          <li>Data-Driven Recruitment</li>
          <li>Access to a Large Talent Pool</li>
          <li>Customizable Hiring Solutions</li>
          <li>Streamlined Recruitment Process</li>
          <li>Seamless Integration with HR Systems</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
