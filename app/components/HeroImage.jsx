import Image from "next/image";
import React from "react";
import heroImage from "@/Images/heroImage.jpg";
import Link from "next/link";
import ResponsiveContainer from "./ResponsiveContainer";

function Rating() {
  return <span>4.8</span>;
}

export default function HeroImage() {
  return (
    <ResponsiveContainer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hero-container  md:order-2">
          <Image
            className="w-full contain-content hero-imag"
            src={heroImage}
            width={1200}
            height={1200}
          />
          <div className="rating-box">
            <Rating />
          </div>
        </div>

        <div className="flex justify-center flex-col gap-1.5 mt-9 mx-10 md:order-1">
          <h1 className="text-primary text-2xl font-semibold lg:text-5xl">
            Hi There, <br></br> I am Apurva Lamba your English Instruchtor
          </h1>
          <div className="flex gap-3 mt-4 flex-wrap sm:flex-nowrap md:flex md:flex-wrap lg:flex-nowrap">
            <div className="grow w-full">
              <Link
                href="/courses"
                className="bg-primary-dark px-9 py-1.5 text-gray-lightest text-center block"
              >
                Courses
              </Link>
            </div>
            <div className="grow w-full">
              <Link
                href="/book-course"
                className="border-2 border-primary-dark  px-9 py-1.5  block text-center "
              >
                Free trail lession
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
