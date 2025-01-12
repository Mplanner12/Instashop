"use client";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import Loader from "@/utils/Loader";

const Page: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.location.href = "/edit-product-details";
  };
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index: number) => setCurrentSlide(index),
  };
  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen px-4 sm:px-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="w-full flex justify-between items-center mt-[0.5rem] mb-6">
          <div className="flex items-center justify-start gap-x-2">
            <Link href="/" className="text-gray-500 hover:text-black">
              <IoMdArrowBack size={24} />
            </Link>
            <h1 className="text-lg font-semibold text-gray-800">
              Product preview
            </h1>
          </div>
          <div>
            <BiDotsVerticalRounded size={24} />
          </div>
        </div>

        {/* Product Image */}
        <div className="relative w-full">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index}>
                <img
                  src="/prod-img.png"
                  alt={`Product ${index}`}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
            ))}
          </Slider>
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-lg">
            {currentSlide + 1}/5
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-[#3B3B3B] mb-2">
            Gucci bag – the epitome of luxury and sophistication
          </h2>
          <div className="flex w-full justify-between items-center space-x-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#3B3B3B]">₦18.0</span>
              <span className="text-sm text-gray-400">₦28.0</span>
              <span className="text-sm font-extralight text-gray-50 bg-[#8A226F] px-2 py-1 rounded-2xl">
                25% OFF
              </span>
            </div>
            <div className="flex items-center space-x-1 text-yellow-300">
              <span className="text-xl">★★★★☆</span>
              <span className="text-sm text-gray-600">(5 sold)</span>
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Select variants
          </h3>
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-500">Size: SMALL</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Filter", "Filter", "Filter", "Filter", "Filter", "Filter"].map(
                (variant, index) => (
                  <button
                    key={index}
                    className="px-3 py-1.5 border rounded-full text-sm text-gray-700 bg-gray-100 hover:bg-[#3B3B3B] hover:text-gray-50 font-light"
                  >
                    {variant}
                  </button>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-medium text-gray-500">Color: White</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Filter", "Filter", "Filter"].map((variant, index) => (
                <button
                  key={index}
                  className="px-3 py-1.5 border rounded-full text-sm text-gray-700 bg-gray-100 hover:bg-[#3B3B3B] hover:text-gray-50 font-light"
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700">
            Product description
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Wholesale and drop shipping are both welcomed. For wholesale, we
            will offer discounts or free express shipping, which only takes 3–7
            days to arrive...
          </p>
          <button className="mt-2 text-[#8A226F] text-sm font-medium">
            Read more
          </button>
        </div>

        {/* About Vendor */}
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700">
            About this vendor
          </h3>
          <div className="flex items-center mt-3 space-x-3">
            <img
              src="/store-img.png"
              alt="Vendor"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                Gucci Store
              </h4>
              <div className="flex items-center text-xs text-gray-600 space-x-2">
                <span>Fashion</span>
                <span>•</span>
                <span>5.4 ★</span>
                <span>•</span>
                <span>100k</span>
              </div>
            </div>
            <button className="ml-auto text-[#8A226F] text-sm font-medium">
              Follow
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Vendor description: You can track your parcel on the following
            website using your tracking number: www.17track...
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "Quality goods",
              "Nice designs",
              "Quality goods",
              "Nice designs",
            ].map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-sm rounded-lg text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Publish Button */}
        <div className="p-4">
          <button
            onClick={handleSubmit}
            className="w-full bg-[#8A226F] text-white py-2 rounded-lg hover:bg-[#8A226F] transition"
          >
            {loading ? <Loader /> : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
