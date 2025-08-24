import React from "react";
import Course from "../components/Course";
import ResponsiveContainer from "../components/ResponsiveContainer";
import HeadingTer from "../components/HeadingTer";

export default function page() {
  return (
    <ResponsiveContainer>
      <div className="mx-10 xl:mx-0">
        <div>
          <HeadingTer className=" mb-10">English Courses</HeadingTer>
        </div>
        <div className="grid grid-cols-1 gap-3.5">
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
        <div>
          <HeadingTer className="mb-10 mt-10">Hindi Courses</HeadingTer>
          <div className="grid grid-cols-1 gap-3.5">
            <Course />
            <Course />
            <Course />
            <Course />
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
