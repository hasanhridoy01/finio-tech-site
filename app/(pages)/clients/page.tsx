import React from "react";

const page = () => {
  return (
    <div>
      <div className="container mx-auto md:pt-44 pt-28 md:px-0 px-5 h-auto">
        <div className="mt-10 mb-18">
          <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start text-white">
            Clients
          </h1>
          <h3 className="text-[14px] font-medium text-[#222222] text-center md:text-start md:w-[850px] w-full">
            Partner Program for payments and beyond.
          </h3>
        </div>
        <div className="my-10">
          <h2 className=" text-2xl mb- text-center md:text-start font-bold text-[#555]">
            Trusted by Leading Companies.
          </h2>
          <h3 className="md:text-[18px] text-[14px] font-medium text-[#555] text-center md:text-start md:w-[850px] w-full">
            Finiotech We work with industry leaders and forward-thinking
            innovators to deliver the best software & solutions. Trusted by
            forward-thinking businesses to power their financial transformation.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="client">
              <div className="px-6 h-[150px] flex justify-center items-center">
                <img src="/client1.png" alt="client" className="" />
              </div>
              <div className="bg-white p-3 text-[#138B7D] text-xl font-normal text-center">
                Grameenphone
              </div>
            </div>
            <div className="client">
              <div className="px-6 h-[150px] flex justify-center items-center">
                <img src="/robi.png" alt="client" className="" />
              </div>
              <div className="bg-white p-3 text-[#138B7D] text-xl font-normal text-center">
                Robi
              </div>
            </div>
            <div className="client">
              <div className="px-6 h-[150px] flex justify-center items-center">
                <img src="/transsion.png" alt="client" className="" />
              </div>
              <div className="bg-white p-3 text-[#138B7D] text-xl font-normal text-center">
                Transsion
              </div>
            </div>
            <div className="client">
              <div className="px-6 h-[150px] flex justify-center items-center">
                <img src="/bili.png" alt="client" className="" />
              </div>
              <div className="bg-white p-3 text-[#138B7D] text-xl font-normal text-center">
                Bili
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
