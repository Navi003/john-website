"use client";
import { useState } from "react";

export default function RoundedCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <span
        className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-colors ${
          checked ? "bg-green-500 border-green-500" : "border-gray-400"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>
      <span className="text-sm text-gray-700">
        I agree to be contacted via email. My email will only be used for this
        purpose and will not be stored in the database.
      </span>
    </label>
  );
}
