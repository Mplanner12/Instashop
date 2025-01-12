import Loader from "@/utils/Loader";
import React, { useState } from "react";

const EForm = ({ nextStage }: { nextStage: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if (!inputValue) {
      setErrorMessage("Please enter a phone number or email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      // Storing value in local storage
      localStorage.setItem("eFormData", JSON.stringify({ inputValue }));
      setLoading(false);
      nextStage();
    }, 500);
  };

  return (
    <div className="w-full h-full max-w-md mt-[3rem]">
      {/* Form Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Enter your phone number or email to get started
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          We will send you a verification code for confirmation
        </p>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Enter phone number or email"
            className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
            value={inputValue}
            onChange={handleInputChange}
          />
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}
        </div>

        <button
          className="w-full px-4 py-3 mt-8 relative top-[27.5rem] text-white bg-[#8A226F] rounded-full hover:bg-purple-700 focus:ring-2 focus:ring-[#8A226F] focus:outline-none"
          type="button"
          onClick={handleSubmit}
        >
          {loading ? <Loader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default EForm;
