"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function BookMeeting() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="md:w-[175px] w-[140px] md:h-[55px] h-[40px] primary-button">
            Book A Meeting
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.13 8.48002C20.96 10.69 20.96 14.31 17.13 16.52L14.04 18.3L10.95 20.08C7.13 22.29 4 20.48 4 16.06V12.5V8.94002C4 4.52002 7.13 2.71002 10.96 4.92002L13.21 6.22002"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-start section-title md:text-[48px] text-[24px] mb-0">
              Schedule A Meeting
            </DialogTitle>
            <DialogDescription className="text-start text-[16px] font-medium">
              Discover Cutting-Edge Financial Technology Designed to Streamline
              Operations, Maximize Efficiency, and Drive Sustainable Growth for
              Your Business
            </DialogDescription>
          </DialogHeader>
          <div
            className="grid md:grid-cols-2 grid-cols-1 gap-4 py-4 overflow-y-auto"
            style={{ height: "calc(100vh - 430px)" }}
          >
            <div className="col-span-full md:col-span-1">
              <div className="">
                <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222]">
                  Full name
                </h3>
                <input
                  className="contact-input-style w-full"
                  type="text"
                  placeholder="Enter Full name"
                />
              </div>
            </div>
            <div className="col-span-full md:col-span-1">
              <div className="">
                <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222]">
                  Country
                </h3>
                <select
                  className="contact-input-style w-full overflow-hidden px-2 appearance-none"
                  style={{ color: "#555555" }}
                >
                  <option value="">Select your country</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="india">India</option>
                  <option value="japan">Japan</option>
                  <option value="france">France</option>
                </select>
              </div>
            </div>
            <div className="col-span-full md:col-span-1">
              <div className="">
                <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222]">
                  Phone Number
                </h3>
                <input
                  className="contact-input-style w-full"
                  type="number"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="col-span-full md:col-span-1">
              <div className="">
                <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222]">
                  Email
                </h3>
                <input
                  className="contact-input-style w-full"
                  type="text"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div className="col-span-full md:col-span-1">
              <div className="">
                <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222]">
                  Email
                </h3>
                <input
                  className="contact-input-style w-full"
                  type="text"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div className="col-span-full md:col-span-1">
              <div className="">
                <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222]">
                  Email
                </h3>
                <input
                  className="contact-input-style w-full"
                  type="text"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div className="col-span-full md:col-span-2">
              <h3 className="md:text-[18px] text-[14px] font-[500] text-[#222222]">
                Select Meeting Day
              </h3>
              <div className="flex flex-wrap gap-3 mt-2.5">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    className={`px-5 py-4 rounded-[8px] border text-sm font-semibold transition-all  cursor-pointer
              ${selectedDays.includes(day) ? "unselect" : "select"}`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-span-full md:col-span-2">
              <textarea
                className="contact-input-style w-full"
                rows={4}
                placeholder="Write Here"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="py-2 px-6">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
