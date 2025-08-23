import React from "react";
import HeadingTer from "./HeadingTer";
import OfferBox from "./OfferBox";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <div className="mx-10">
      <HeadingTer>
        Languages open doors – both professionally and personally.
      </HeadingTer>
      <p className="text-justify text-[.6rem] mt-2.5">
        Whether you're preparing for exams, expanding your business skills, or
        simply love languages — I’m here to guide you. Where every lesson is
        tailored to your goals, your pace, and your success. I offer tailored
        language training for both individuals and companies. This includes:
      </p>
      <div className="mt-11">
        <h3 className="mb-3.5">WHAT I OFFER</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
          <OfferBox>
            Preparation for the English Matura or exams like IELTS, TOEFL,
            Cambridge etc.
          </OfferBox>
          <OfferBox>Business English for executives and management</OfferBox>
          <OfferBox>
            Corporate group training and professional workshops
          </OfferBox>
          <OfferBox>
            Customized Hindi lessons for business or academic purposes
          </OfferBox>
        </div>
        <div className="mt-5">
          <Link
            href="/courses"
            className="bg-accent px-9 py-1.5 text-gray-lightest"
          >
            Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
