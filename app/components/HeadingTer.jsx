import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";

export default function HeadingTer({ children, className }) {
  return (
    <ResponsiveContainer>
      <h3
        className={`text-primary-dark font-bold text-[.8rem] mt-3.5 lg:text-2xl lg:mt-10 ${className}`}
      >
        {children}
      </h3>
    </ResponsiveContainer>
  );
}
