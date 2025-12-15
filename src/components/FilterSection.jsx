import React from "react";
import { ChevronDown } from "lucide-react";

function FilterSection({ title, children, collapsible }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium">{title}</h4>
        {collapsible && <ChevronDown size={16} />}
      </div>
      {children}
    </div>
  );
}
export default FilterSection;