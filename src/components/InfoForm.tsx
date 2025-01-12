/* eslint-disable @next/next/no-img-element */
import Loader from "@/utils/Loader";
import React, { useState } from "react";

const InfoForm = ({ nextStage }: { nextStage: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!fullName || !username || !phoneNumber || !email) {
      setErrorMessage("All fields are required.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      // Storing values in local storage
      localStorage.setItem(
        "infoFormData",
        JSON.stringify({ fullName, username, phoneNumber, email })
      );
      setLoading(false);
      nextStage();
    }, 500);
  };

  return (
    <div className="flex items-center justify-center h-screen px-4 bg-white lg:border lg:shadow-lg">
      <div className="w-full h-full max-w-md mt-[0rem]">
        {/* Form Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Complete profile setup
          </h2>
          <p className="mt-3.5 text-[0.95rem] text-gray-500">
            Connect your socials for quick setup
          </p>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-4">
            <button className="flex items-center justify-center w-full h-[3.5rem] bg-gray-100 rounded-lg">
              <img src="/Instagram.png" alt="Instagram" className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center w-full h-[3.5rem] bg-gray-100 rounded-lg">
              <img src="/TikTok.png" alt="TikTok" className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center w-full h-[3.5rem] bg-gray-100 rounded-lg">
              <img src="/Google.png" alt="Google" className="w-6 h-6" />
            </button>
          </div>

          <p className="mt-6 text-[0.95rem] w-full text-start text-gray-500">
            Or enter manually
          </p>

          {/* Input Fields */}
          <div className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 text-gray-800 border border-[#00000033] rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 text-gray-800 border border-[#00000033] rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-4 py-3 text-gray-800 border border-[#00000033] rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-gray-800 border border-[#00000033] rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}

          <button
            className="w-full px-4 py-3 mt-8 relative top-[11.5rem] text-white bg-[#8A226F] rounded-full hover:bg-purple-700 focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
            type="button"
            onClick={handleSubmit}
          >
            {loading ? <Loader /> : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
