import Link from "next/link";
import React from "react";
import HeadingTer from "./HeadingTer";
import students from "@/Images/students.jpg";
import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";

export const experience = [
  {
    text: "Dual Master’s Degrees in English Literature and Education",
    id: "1",
  },
  {
    text: "Certified in Adult Learning, Diversity, and Career Training",
    id: "2",
  },
  { text: "Fluent in English, Hindi, and German", id: "3" },
  {
    text: "Experience teaching in schools, universities, companies, and language institutes",
    id: "4",
  },
  { text: " Lessons delivered with clarity, warmth, and purpose", id: "5" },
];

export default function AboutMeSection() {
  return (
    <ResponsiveContainer>
      <section className="mx-10 xl:mx-0">
        <p className="mt-10 text-[.8rem] lg:text-2xl">
          With two master’s degrees and over a decade of experience, I’ve had
          the privilege of teaching English and Hindi to a wide range of
          learners across Austria and other European countries — from teenagers
          preparing for high-school exams (Matura) to international executives
          delivering global presentations or attending meetings with confidence{" "}
          <span>
            <Link
              className="text-primary underline cursor-pointer"
              href="about-me"
            >
              Read More...
            </Link>
          </span>
        </p>
        <div>
          <HeadingTer>What Sets Me Apart</HeadingTer>
          <ul className="mt-4 lg:mt-10">
            {experience.map((exp, id) => {
              return (
                <li className="lg:text-xl" key={id}>
                  ✅{exp.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-4">
          <Image
            width={1200}
            height={1200}
            src={students}
            alt="Apurva lambha with stundets"
          ></Image>
        </div>
      </section>
    </ResponsiveContainer>
  );
}
