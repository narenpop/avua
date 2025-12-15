import React from "react";

export default function Discover() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-0 my-10">
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-[#864EFF] to-[#502F99] bg-clip-text text-transparent mb-3">
          Discover Your Next Career Move
        </h2>
        <p className="text-gray-600 mb-6">
          Explore new opportunities updated daily
        </p>

        <div className="bg-white p-4 rounded-3xl flex flex-col sm:flex-row gap-4 shadow-md">
          <input
            className="w-full border px-3 py-2 rounded-lg"
            placeholder="Search job by title"
          />
          <input
            className="w-full border px-3 py-2 rounded-lg"
            placeholder="Search location"
          />
          <button className="search-button self-stretch sm:self-auto">
            <img src="./searchBtn.svg" alt="" />
          </button>
        </div>
      </div>

      <img
        src="./resumescore.png"
        className="w-64 sm:w-80 lg:w-[338px] ml-0 lg:ml-[250px]"
        alt="resumescore"
      />
    </div>
  );
}

