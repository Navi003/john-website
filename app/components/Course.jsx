import Link from "next/link";
import React from "react";

export default function Course({ slug }) {
  return (
    <div className="p-4 shadow-lg bg-[#CCFFF8] rounded-md flex flex-col gap-3">
      <div>
        <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
        <p>Students from Grade 5 upwards (Final Exam Preparation – MATURA )</p>
      </div>
      <div className="flex justify-center gap-2.5">
        <Link
          href="/book-course"
          className="grow-1 bg-accent-hover rounded-xl p-1 font-semibold text-white text-center"
        >
          Book now
        </Link>
        <Link
          href={`courses/${slug}`}
          className="grow-1  bg-primary-dark p-1 rounded-xl font-semibold text-white text-center"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
