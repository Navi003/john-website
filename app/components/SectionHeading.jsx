import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";

export default function SectionHeading({ children }) {
  return (
    <div className="bg-primary w-full mt-16 py-2 px-10">
      <ResponsiveContainer>
        <h2 className="text-gray-light text-xl">{children}</h2>
      </ResponsiveContainer>
    </div>
  );
}
