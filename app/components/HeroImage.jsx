import Image from "next/image";
import React from "react";
import heroImage from "@/Images/heroImage.jpg";
import Link from "next/link";

function Rating() {
  return (
    <span
      className="px-12 py-3.5 bg-primary
  absolute top-145 left-70
  text-gray-lightest
  text-xl
  "
    >
      4.8
    </span>
  );
}

export default function HeroImage() {
  return (
    <div>
      <Image src={heroImage} width={1200} height={1200} />
      <div className="mt-16 ml-9 mr-16">
        <h1 className="text-primary text-2xl font-semibold">
          Hi There, <br></br> I am Apurva Lamba your English Instruchtor
        </h1>
        <div className="flex gap-3 mt-4">
          <div>
            <Link
              href="/courses"
              className="bg-accent px-10 py-1.5s text-gray-lightest"
            >
              Courses
            </Link>
          </div>
          <div>
            <button>Free trail lession</button>
          </div>
        </div>
        <Rating></Rating>
      </div>
    </div>
  );
}
