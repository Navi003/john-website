import React from "react";

export default function ResponsiveContainer({ children }) {
  return <div className="xl:max-w-[1200px] mx-auto px-2">{children}</div>;
}
