import React from "react";
import { X } from "lucide-react";


function InputWithTags({ placeholder, tags }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded-lg px-3 py-2 text-sm mb-3"
      />

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
            <X size={14} className="cursor-pointer" />
          </span>
        ))}
      </div>
    </>
  );
}
export default InputWithTags;