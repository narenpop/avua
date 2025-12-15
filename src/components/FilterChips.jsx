import React from "react";

function FilterChips({ options }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((item) => (
        <button
          key={item}
          className="px-3 py-1 rounded-full text-sm border border-purple-200 text-purple-700 hover:bg-purple-50"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
export default FilterChips;