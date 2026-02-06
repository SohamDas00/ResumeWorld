import { Check, MoveRight, Video } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <div className="min-h-[90vh] pb-20">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          <a href="/">
            <img src="/Logo.svg" alt="logo" className="h-12" />
          </a>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
            <a href="#" className="hover:text-green-600 transition">
              Home
            </a>
            <a href="#about" className="hover:text-green-600 transition">
              About
            </a>
            <a href="#features" className="hover:text-green-600 transition">
              Features
            </a>
            <a href="#testimonials" className="hover:text-green-600 transition">
              Testimonials
            </a>
            <a href="#contactus" className="hover:text-green-600 transition">
              Contact us
            </a>
          </div>

          <div className="flex gap-2">
            <Link
              to="/app?state=register"
              className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
            >
              Get started
            </Link>
            <Link
              to="/login?state=login"
              className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
            >
              Login
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-100 bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#testimonials" className="text-white">
            Testimonials
          </a>
          <a href="#contactus" className="text-white">
            Contact us
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex"
          >
            X
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-100 blur-[100px] opacity-30"></div>

          {/* Headline + CTA */}
          <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-20 md:leading-[70px]">
            Land your dream job with{" "}
            <span className=" bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-nowrap">
              AI-powered{" "}
            </span>{" "}
            Resume.
          </h1>

          <p className="max-w-md text-center text-base my-7">
            Build a standout, professional resume for free in minutes
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 ">
            <Link
              to="/app?state=register"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors"
            >
              Get started
              <MoveRight className="ml-2 w-5"/>
            </Link>
            <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-100 transition rounded-full px-7 h-12 text-slate-700">
              <Video className="text-gray-400"/>
              <span>Try demo</span>
            </button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-15">
            <p className="flex items-center gap-2">
              <Check className="text-green-600 size-5"/>
              <span className="text-slate-400">AI-optimized content</span>
            </p>
            <p className="flex items-center gap-2">
              <Check className="text-green-600 size-5"/>
              <span className="text-slate-400">100% Free</span>
            </p>
            <p className="flex items-center gap-2">
              <Check className="text-green-600 size-5"/>
              <span className="text-slate-400">Instant PDF download</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;