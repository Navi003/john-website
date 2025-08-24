import React from "react";
import SectionHeading from "../components/SectionHeading";
import HeadingTer from "../components/HeadingTer";
import Image from "next/image";
import { experience } from "../components/AboutMeSection";
import students from "@/Images/students.jpg";
import ResponsiveContainer from "../components/ResponsiveContainer";

export default function page() {
  return (
    <ResponsiveContainer>
      <h2 className="text-[1rem] lg:text-4xl mt-2 lg:mt-5">About me</h2>
      <p className="mt-10 text-[.8rem] lg:text-2xl">
        With two Master&#39;s degrees in Education and English, as well as
        numerous certifications in adult education, I bring over 13 years of
        teaching experience—particularly with high school graduates preparing
        for final exams (Matura), executives, and corporate employees in group
        settings. My passion for languages and teaching emerged early on, and I
        have continuously developed my skills in this field ever since. Today,
        this passion shapes my teaching: practical, engaging, and tailored to
        the individual needs of each participant. My goal is not just to teach a
        language, but to make it come alive—through real-life methods,
        interactive activities, and clear structures that make learning both
        effective and enjoyable. Whether in one-on-one sessions or group
        classes, I focus on customized instruction that delivers exactly what’s
        needed—be it exam preparation, business communication, or professional
        development. Many of my clients appreciate my clear teaching style, the
        friendly yet professional learning environment, and my ability to
        explain even complex topics in a simple, practical, and relatable way.
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
    </ResponsiveContainer>
  );
}
