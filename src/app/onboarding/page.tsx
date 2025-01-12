"use client";
import EForm from "@/components/EForm";
import InfoForm from "@/components/InfoForm";
import StoreForm from "@/components/StoreForm";
import React, { useState } from "react";

const Page: React.FC = () => {
  const [formStage, setFormStage] = useState(0);

  const nextStage = () => setFormStage((prev) => prev + 1);
  const prevStage = () => setFormStage((prev) => (prev >= 1 ? prev - 1 : prev));

  return (
    <div className="flex items-center justify-start h-screen px-4 bg-white">
      <div className="w-full h-full max-w-md mt-[3rem]">
        {/* Back Button and Header */}
        <div className="flex items-center space-x-2">
          <button className="text-gray-600" onClick={prevStage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Get started</h1>
        </div>

        {/* Progress Indicator */}
        <div className="flex mt-6 space-x-2">
          <div
            className={`w-1/3 h-1 rounded-full ${
              formStage >= 0 ? "bg-[#8A226F]" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-1/3 h-1 rounded-full ${
              formStage >= 1 ? "bg-[#8A226F]" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-1/3 h-1 rounded-full ${
              formStage >= 2 ? "bg-[#8A226F]" : "bg-gray-300"
            }`}
          ></div>
        </div>

        {/* Form Section */}
        {formStage === 0 && <EForm nextStage={nextStage} />}
        {formStage === 1 && <InfoForm nextStage={nextStage} />}
        {formStage === 2 && <StoreForm />}
      </div>
    </div>
  );
};

export default Page;
