import React, { Children } from "react";

export default function OfferBox({ children }) {
  return (
    <div className="p-3 bg-primary-dark">
      <p className="text-gray-light text-[.6rem]">{children}</p>
    </div>
  );
}
