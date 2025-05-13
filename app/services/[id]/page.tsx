import React from "react";

type PropsType = {
  params: Promise<{ id: string }>;
};

const ServicesDetails = async ({ params }: PropsType) => {
  const paramsData = await params;
  const serviceId = paramsData.id;

  console.log(serviceId);

  // Dummy data for demonstration
  const serviceData = {
    title: "AI-Powered Financial Analysis",
    shortInfo:
      "Leverage AI to gain real-time insights into your financial operations with powerful predictive analytics.",
    image: "/Frame 1000011454 (4).png",
    features: [
      "Real-time Monitoring",
      "Predictive Analytics",
      "Automated Reporting",
      "Seamless Integrations",
    ],
    fullDescription: `Our AI-Powered Financial Analysis service is designed to revolutionize the way businesses manage and interpret their financial data. Through the integration of advanced machine learning and real-time data processing, it enables organizations to gain deep insights into their financial health with unprecedented accuracy and speed.
    The platform automates complex calculations and consolidates data from multiple sources, offering a unified view of key financial metrics. It identifies trends, uncovers anomalies, and provides predictive forecasts that help businesses make proactive, strategic decisions.
    One of the standout features of this service is its predictive analytics capability. It not only reports past performance but also projects future outcomes, enabling better planning and risk management. Whether you're budgeting, forecasting, or conducting variance analysis, our tool delivers clarity and foresight.
    With seamless integration into existing financial software and tools, the transition is smooth and efficient. Automation reduces manual workloads, eliminates human error, and allows finance teams to focus on high-value tasks like strategy and growth.
    Ideal for startups, SMEs, and large enterprises, this service helps improve operational efficiency, optimize resources, and support data-driven decision-making. It's more than just a reporting tool—it's a strategic partner for modern finance teams looking to drive sustainable growth and innovation.`,
  };

  return (
    <div className="container mx-auto pt-28 px-5 md:px-0 md:pt-44 my-10">
      {/* Top Grid Section */}
      <div className="grid md:grid-cols-5 gap-10 items-center">
        {/* Left Image */}
        <div className="md:col-span-2">
          <div className="w-full h-full box-shadow-two overflow-hidden rounded-2xl py-5">
            <img
              src={serviceData.image}
              alt="Service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-3">
          <h1 className="section-title-two md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start">
            {serviceData.title}
          </h1>
          <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222] text-center md:text-start mb-4">
            {serviceData.shortInfo}
          </h3>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="">
                <h4 className="services-text-title mb-2 md:text-[18px] text-[16px]">
                  {feature}
                </h4>
                <p className="md:text-[16px] text-[14px] font-[500] text-[#222222] text-center md:text-start mb-2">
                  {`Explore how "${feature}" improves operations.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Full Description */}
      <div className="mt-14">
        <h2 className="services-text-title mb-2 md:text-[24px] text-[18px]">
          Description
        </h2>
        <p className="md:text-[16px] text-[14px] font-[500] text-[#222222] text-center md:text-start mb-2">
          {serviceData.fullDescription}
        </p>
      </div>
    </div>
  );
};

export default ServicesDetails;
