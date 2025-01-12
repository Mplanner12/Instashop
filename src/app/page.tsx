/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Loader from "@/utils/Loader";
import Link from "next/link";
import { BiArrowToRight } from "react-icons/bi";

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const createdProducts = localStorage.getItem("shippingOptions");
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/onboarding";
    }, 1000);
  };
  return (
    <main className="w-full h-full">
      <div className="flex justify-center items-center h-screen bg-gray-50 px-[1rem]">
        <div className="w-full max-w-md px-4 sm:px-8 lg:mt-[-2.5rem]">
          {/* Illustration */}
          <div className="flex justify-center">
            <div className="mt-[5rem] w-80 h-60 rounded-full bg-[#00000008] flex justify-center items-center">
              {/* Replace with your illustration */}
              <img
                src="/sale-img.png"
                alt="Welcome Illustration"
                className="object-cover rounded-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center mt-6 lg:mt-2 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-1">Welcome</h1>
            <p className="text-gray-600 font-semibold mt-2 max-w-[85%] text-center">
              The safest platform to shop from social media vendors
            </p>
          </div>

          {/* Features List */}
          <div className="mt-6 mb-[7.5rem] lg:mb-[2rem] bg-[#FFEAFA] rounded-2xl py-3.5 px-5 shadow border border-[#8A226F]">
            <ul className="space-y-2">
              {[
                "Reach Millions of Shoppers",
                "Easy Product Listing",
                "Secure and Fast Payments",
                "Boost Your Visibility",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-black font-medium text-sm gap-x-3"
                >
                  <div className="flex border-2 border-[#8A226F] justify-center items-center py-2 px-2 rounded-full">
                    <FaCheck className="text-[#8A226F]" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="mt-6 w-full h-full flex flex-col justify-start items-center relative bottom-[0.5rem]">
            {createdProducts != null ? (
              <Link
                href="/product-list"
                className="flex items-center gap-2 mb-1.5"
              >
                <p className="text-[#8A226F] font-medium hover:underline">
                  Go to Product List
                </p>
                <p>
                  <BiArrowToRight size={24} className="text-[#8A226F]" />
                </p>
              </Link>
            ) : (
              ""
            )}
            <button
              onClick={handleClick}
              className="w-full flex justify-center items-center bg-[#8A226F] text-white py-3 rounded-full shadow-sm hover:bg-pink-800 transition shadow-[#8A226F]"
            >
              {loading ? <Loader /> : "Get started"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
