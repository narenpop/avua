import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 shadow-sm rounded-4xl">
      <ul className="flex items-center gap-6 mb-4 sm:mb-0">
        <li>
          <img src="./logo.svg" alt="logo" className="w-24" />
        </li>
        <li className="hidden sm:block">Products</li>
        <li className="hidden sm:block">Applicant</li>
        <li className="hidden sm:block">Job Openings</li>
      </ul>

      <button className="border px-6 py-2 rounded-full text-sm">
        Sign up to Auva today
      </button>
    </nav>
  );
}
