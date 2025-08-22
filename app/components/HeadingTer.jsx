import React from "react";

export default function HeadingTer({ children }) {
  return (
    <h3 className="text-primary-dark font-bold text-[.8rem] mt-3.5">
      {children}
    </h3>
  );
}
