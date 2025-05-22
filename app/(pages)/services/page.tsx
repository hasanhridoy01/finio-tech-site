"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ServiceItem from "./ServiceItem";

export default function Services() {
  const router = useRouter();

  const items = [
    {
      id: 1,
      title: "Enterprise Solutions (SaaS)",
      image: "/service/one.png",
      discription:
        "FinioTech delivers Enterprise & Communication Solutions through scalable SaaS Solutions, enabling businesses to optimize operations, enhance customer interactions, and drive efficiency. Our solutions focus on seamless communication, business automation, and customer relationship management.",
    },
    {
      id: 2,
      title: "Common API Infrastructure",
      image: "/service/two.png",
      discription:
        "At Finiotech, we accelerate digital transformation through a unified Common API Infrastructure that connects your financial, retail, and logistics ecosystems with unmatched agility. Our API platform offers a standardized gateway for integrating third-party services—ranging from KYC, payments, and credit scoring to ERP...",
    },
    {
      id: 3,
      title: "Common API for Utility Bill Collection",
      image: "/service/three.png",
      discription:
        "At Finiotech, we simplify nationwide bill payments with our Common API Platform for Utility Bill Collection for DESCO, WASA, or PGCB. Designed to unify multiple service providers—electricity, gas, water, internet, and telecom—into a single, secure interface, our API empowers banks, fintechs, and payment apps to offer...",
    },
    {
      id: 4,
      title: "TradeX ERP",
      image: "/service/four.png",
      discription:
        " All-in-one ERP designed to streamline operations, boost efficiency, and drive growth, with a modular design that allows businesses to integrate only the features they need. TradeX ERP is an all-in-one business management software, Powered by Odoo- that helps organizations streamline operations... ",
    },
    {
      id: 5,
      title: "Salesforce",
      image: "/service/five.png",
      discription:
        " Salesforce services designed to streamline customer relationship management (CRM). We specialize in Salesforce implementation, customization, and integration, optimizing sales, marketing, and customer service operations to improve efficiency, enhance customer experiences, and drive growth...",
    },
    {
      id: 6,
      title: "HireIQ- Augment your workforce intelligently",
      image: "/service/six.png",
      discription:
        " Intelligent recruitment solution that streamlines hiring by connecting with top talent quickly using smart candidate matching, data analytics, and automated screening to enhance accuracy and reduce time-to-hire. FinioTech Ltd. offers HireIQ, a cutting-edge solution designed to str...",
    },
    {
      id: 7,
      title: "Bulk SMS (A2P SMS Service)",
      image: "/service/seven.png",
      discription:
        " A bulk SMS solution enabling seamless communication, with high deliverability, real-time reporting, and customizable messaging for businesses to reach large audiences efficiently.FinioTech Ltd. offers a powerful, secure, and scalable Bulk SMS platform designed to help businesses send promotional, transacti...",
    },
    {
      id: 8,
      title: "Top – Up",
      image: "/service/eight.png",
      discription:
        " A digital mobile top-up solution enabling seamless airtime, data, and DTH recharges, with real-time, secure transactions through integration with telecom operators. FinioTech Ltd. enables businesses to offer instant, secure, and seamless mobile top-up services for prepaid airtime, data, and DT...",
    },
    {
      id: 9,
      title: "Call Center Service (AI-BASED)",
      image: "/service/nine.png",
      discription:
        " Next-generation Call Center Services offering fast, intelligent, and personalized support with scalable, tech-driven solutions to enhance customer interactions and improve efficiency. At FinioTech, we offer next-generation Call Center Services that deliver fast, intelligent, and personalized customer support. Power",
    },
    {
      id: 10,
      title:
        "Customized Campaign (Manufacturer, Retail, Distributor & Consumer-based)",
      image: "/service/ten.png",
      discription:
        " Data-driven customized campaign services designed to engage your audience with personalized, targeted messages across multiple channels, boosting engagement and conversions. FinioTech Ltd. offers powerful, data-driven customized campaign...",
    },
  ];

  const handleDetailsClick = (id: number) => {
    router.push(`/services/${id}`);
  };
  return (
    <div className="container mx-auto md:pt-44 pt-28 md:px-0 px-5 h-auto">
      <div className="my-10">
        <h1 className="section-title md:leading-[55px] leading-8 md:text-[48px] text-[24px] mb-2 text-center md:text-start text-white">
          Services
        </h1>
        <h3 className="md:text-[18px] text-[14px] font-medium text-[#222222] text-center md:text-start md:w-[850px] w-full">
          Discover Cutting-Edge Financial Technologies Designed to Streamline
          Operations, Maximize Efficiency, and Drive Sustainable Growth for Your
          Business
        </h3>
      </div>
      {/* section-content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {items.map((item, index) => (
          <ServiceItem
            key={index}
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.discription}
          />
        ))}
      </div>
    </div>
  );
}
