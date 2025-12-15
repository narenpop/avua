import React, { useState } from "react";
import FilterSection from "./FilterSection";
import FilterChips from "./FilterChips";
import InputWithTags from "./InputWithTags";

const jobsData = [
  {
    id: 1,
    title: "Data Engineer at Microsoft",
    company: "Microsoft",
    location: "Hyderabad, Telangana, India",
    type: "Full-time",
    workmode: "Hybrid",
    salary: "₹15,00,000 - ₹25,00,000 a year",
    posted: "posted in last 24 hours",
    logo: "./jobIcon.png",
    jobDesc:
      "We’re looking for a talented Product Designer to join our team and help shape intuitive, user-centered digital experiences. In this role, you’ll collaborate closely with product managers, engineers, and other..."
  },
  {
    id: 2,
    title: "Data Engineer at Microsoft",
    company: "Microsoft",
    location: "Hyderabad, Telangana, India",
    type: "Full-time",
    workmode: "Hybrid",
    salary: "₹15,00,000 - ₹25,00,000 a year",
    posted: "posted in last 24 hours",
    logo: "./jobIcon.png",
    jobDesc:
      "We’re looking for a talented Product Designer to join our team and help shape intuitive, user-centered digital experiences. In this role, you’ll collaborate closely with product managers, engineers, and other..."
  },
  {
    id: 3,
    title: "Data Engineer at Microsoft",
    company: "Microsoft",
    location: "Hyderabad, Telangana, India",
    type: "Full-time",
    workmode: "Hybrid",
    salary: "₹15,00,000 - ₹25,00,000 a year",
    posted: "posted in last 24 hours",
    logo: "./jobIcon.png",
    jobDesc:
      "We’re looking for a talented Product Designer to join our team and help shape intuitive, user-centered digital experiences. In this role, you’ll collaborate closely with product managers, engineers, and other..."
  },
  {
    id: 4,
    title: "Data Engineer at Microsoft",
    company: "Microsoft",
    location: "Hyderabad, Telangana, India",
    type: "Full-time",
    workmode: "Hybrid",
    salary: "₹15,00,000 - ₹25,00,000 a year",
    posted: "posted in last 24 hours",
    logo: "./jobIcon.png",
    jobDesc:
      "We’re looking for a talented Product Designer to join our team and help shape intuitive, user-centered digital experiences. In this role, you’ll collaborate closely with product managers, engineers, and other..."
  },
  {
    id: 5,
    title: "Data Engineer at Microsoft",
    company: "Microsoft",
    location: "Hyderabad, Telangana, India",
    type: "Full-time",
    workmode: "Hybrid",
    salary: "₹15,00,000 - ₹25,00,000 a year",
    posted: "posted in last 24 hours",
    logo: "./jobIcon.png",
    jobDesc:
      "We’re looking for a talented Product Designer to join our team and help shape intuitive, user-centered digital experiences. In this role, you’ll collaborate closely with product managers, engineers, and other..."
  }
  
];

const JOBS_PER_PAGE = 4;

export default function Results() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobsData.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = jobsData.slice(startIndex, startIndex + JOBS_PER_PAGE);

  return (
    <div className="flex flex-col lg:flex-row w-full my-10 gap-6 px-4 lg:px-0 mb-10">
      {/* LEFT SECTION */}
      <div className="w-full lg:basis-[70%]">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-4 rounded-xl mb-6 shadow-sm"
          >
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3">
              <div className="flex gap-4 items-center">
                <img src={job.logo} alt={job.company} className="w-12 h-12" />
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
              </div>

              <p className="text-sm text-[#00B67A]">{job.posted}</p>
            </div>

            {/* META */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 items-start sm:items-center mb-4 text-sm">
              <span className="flex items-center gap-1">
                <img src="./map.png" alt="" /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <img src="./Timer.png" alt="" /> {job.type}
              </span>
              <span className="flex items-center gap-1">
                <img src="./navigation.svg" alt="" /> {job.workmode}
              </span>
              <span className="flex items-center gap-1">
                <img src="./Sector.svg" alt="" /> IT Sector
              </span>

              <button className="sm:ml-auto w-full sm:w-auto bg-[#EFE3FF] text-[#502F99] rounded-md px-4 py-2">
                View jobs
              </button>
            </div>

            <div className="my-4 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

            {/* DESCRIPTION */}
            <div className="flex gap-2 text-[14px] text-gray-700">
              <img src="./magic.svg" alt="" />
              <p>{job.jobDesc}</p>
            </div>
          </div>
        ))}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 disabled:opacity-40"
            >
              ‹
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-4xl border ${
                  currentPage === i + 1
                    ? "bg-purple-600 text-white"
                    : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 disabled:opacity-40"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:basis-[30%]">
        <div className="bg-white rounded-2xl shadow-sm p-4 lg:sticky lg:top-24">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold bg-gradient-to-r from-[#000000] to-[#502F99] bg-clip-text text-transparent">
              Filter to match your needs
            </h3>
            <button className="text-sm text-[#e4b6b7]">Clear all</button>
          </div>

          <FilterSection title="Date">
            <FilterChips options={["All", "Last 24 hours", "Last week", "Last month"]} />
          </FilterSection>

          <FilterSection title="Job preference">
            <FilterChips options={["Full time", "Part time", "Freelance"]} />
          </FilterSection>

          <FilterSection title="Employment Model">
            <FilterChips options={["On-site", "Remote", "Hybrid"]} />
          </FilterSection>

          <FilterSection title="Keywords" collapsible>
            <InputWithTags placeholder="Enter keywords" tags={["Chemical", "AI"]} />
          </FilterSection>

          <FilterSection title="Companies" collapsible>
            <InputWithTags placeholder="Enter companies" tags={["Google", "Microsoft"]} />
          </FilterSection>

          <button className="w-full mt-6 searchBtn text-white py-3 rounded-xl font-medium">
            Refine search
          </button>
        </div>
      </div>
    </div>
  );
}


