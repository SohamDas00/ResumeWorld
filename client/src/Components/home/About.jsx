import React from "react";
import { dummyResumeData } from "../../assets/resume-builder-assets/assets/assets";
import { MoveRight } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
        <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://img.freepik.com/free-photo/resume-new-business-launch-plan-concept_53876-124948.jpg?semt=ais_user_personalization&w=740&q=80"
            alt="Resume about"
          />
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            What we do?
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-[#DDD9FF]"></div>
          <p className="mt-8">
            We help job seekers create smart, ATS-friendly, and professional resumes in minutes using the power of AI.{" "}
          </p>
          <p className="mt-4">
            Our platform simplifies the entire resume-building process—from structuring content to optimizing it for recruiters—so you can focus on landing interviews, not formatting documents.
          </p>
          <p className="mt-4">
            Whether you’re a student, fresher, or experienced professional, our AI-powered resume builder helps you stand out in today’s competitive job market.
          </p>
          <a
            href="#"
            className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-green-600 to-[#31e63a] py-3 px-8 rounded-full text-white"
          >
            <span>Read more</span>
            <MoveRight className="ml-1 w-5"/>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
