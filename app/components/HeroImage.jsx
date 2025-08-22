import Image from "next/image";
import React from "react";
import heroImage from "@/Images/heroImage.jpg";
import Link from "next/link";

function Rating() {
  return <span>4.8</span>;
}

export default function HeroImage() {
  return (
    <div>
      <div className="hero-container">
        <Image
          className="w-full contain-content hero-image"
          src={heroImage}
          width={1200}
          height={1200}
        />
        <div className="rating-box">
          <Rating />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-1.5 mt-9 mx-10">
        <h1 className="text-primary text-2xl font-semibold">
          Hi There, <br></br> I am Apurva Lamba your English Instruchtor
        </h1>
        <div className="flex gap-3 mt-4">
          <div>
            <Link
              href="/courses"
              className="bg-accent px-9 py-1.5 text-gray-lightest"
            >
              Courses
            </Link>
          </div>
          <div>
            <Link
              href="/book-course"
              className="border-2 border-accent  px-9 py-1.5"
            >
              Free trail lession
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
