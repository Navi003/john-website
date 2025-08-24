import React, { Children } from "react";

export default function OfferBox({ children }) {
  return (
    <div className="p-3 bg-primary-dark border border-b-4 border-accent shadow-2xl hover:scale-90 transition-all ">
      <p className="text-gray-light text-[.6rem] lg:text-xl ">{children}</p>
    </div>
  );
}
