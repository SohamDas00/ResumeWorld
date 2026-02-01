import React from "react";
import { dummyResumeData } from "../../assets/resume-builder-assets/assets/assets";

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
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
