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
            Call Center Service (AI-BASED)
          </h1>
          <h3 className="text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            Intelligent, AI-driven call center solutions for automated and
            efficient customer support.
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
            <img src="/service/nine.png" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14 px-8 py-12 box-shadow">
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold">
          Overview :
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-4 leading-[30px]">
          Gist: Next-generation Call Center Services offering fast, intelligent,
          and personalized support with scalable, tech-driven solutions to
          enhance customer interactions and improve efficiency.
        </p>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#555] text-center md:text-start mb-2 leading-[30px]">
          At FinioTech, we offer next-generation Call Center Services that
          deliver fast, intelligent, and personalized customer support. Powered
          by AI-based solutions, our scalable, tech-driven platform integrates
          automation and real-time analytics, helping businesses enhance
          customer interactions, boost efficiency, and provide exceptional
          service across multiple channels.
        </p>
        <h2 className=" mb-2 md:text-[24px] text-[18px] font-bold mt-10">
          This service covers:
        </h2>
        <ul className="details">
          <li>Scalable Solutions</li>
          <li>Efficient Call Routing</li>
          <li>Omni-Channel Integration</li>
          <li>Personalized Customer Experience</li>
          <li>High First Call Resolution (FCR) Rate</li>
          <li>Real-Time Monitoring and Quality Assurance</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
