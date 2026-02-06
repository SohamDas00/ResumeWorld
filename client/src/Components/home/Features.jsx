import { Bot, BriefcaseBusiness, ChevronsUp, Telescope } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-15 mb-25 mt-30">
      <div className="size-130 top-0 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]/70"></div>
      <div className="flex flex-col items-center justify-center max-w-80">
        <div className="p-6 aspect-square bg-violet-100 rounded-full">
          <Bot className="size-8"/>
        </div>
        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-base font-semibold text-slate-700">
            AI-Powered Optimization
          </h3>
          <p className="text-sm text-slate-600">
            Smart AI rewrites your resume with ATS-friendly keywords and strong action verbs.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-80">
        <div className="p-6 aspect-square bg-green-100 rounded-full">
          <ChevronsUp className="size-8" />
        </div>
        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-base font-semibold text-slate-700">
            Build in Minutes
          </h3>
          <p className="text-sm text-slate-600">
            Create a professional resume fast with guided steps and live preview.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-80">
        <div className="p-6 aspect-square bg-orange-100 rounded-full">
          <BriefcaseBusiness className="size-8" />
        </div>
        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-base font-semibold text-slate-700">
            Job-Specific Customization
          </h3>
          <p className="text-sm text-slate-600">
            Tailor your resume for each job with one click to boost interview chances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
