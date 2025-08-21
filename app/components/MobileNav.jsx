import Link from "next/link";
import React from "react";

export default function MobileNav() {
  return (
    <nav>
      <ul className="flex gap-2.5 p-3 bg-gray-dark">
        <li className="text-gray-light">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-me">About Me</Link>
        </li>

        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/book-course">Book Course</Link>
        </li>
        <li>
          <Link href="/faq">Faq</Link>
        </li>
      </ul>
    </nav>
  );
}
