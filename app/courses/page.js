import React from "react";
import Course from "../components/Course";
import ResponsiveContainer from "../components/ResponsiveContainer";
import HeadingTer from "../components/HeadingTer";

export default function page() {
  return (
    <ResponsiveContainer>
      <div className="mx-10 xl:mx-0">
        <div>
          <HeadingTer className=" mb-10 md:text-2xl">
            English Courses
          </HeadingTer>
        </div>
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:gap-15">
          <Course slug="1" />
          <Course slug="2" />
          <Course slug="3" />
          <Course slug="4" />
        </div>
        <div>
          <HeadingTer className="mb-10 mt-10 md:text-2xl">
            Hindi Courses
          </HeadingTer>
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2  lg:gap-15">
            <Course slug="5" />
            <Course slug="6" />
            <Course slug="7" />
            <Course slug="8" />
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
