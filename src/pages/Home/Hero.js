import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
      <div className="flex flex-col items-start justify-center container md:py-24 py-14">
        <span className="mb-3 text-sm rounded px-3 text-white bg-slate-900 badge">
          Pro Car
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
          Great customer relationships start here.
        </h1>
        <form className="w-full mb-6">
          <label className="sr-only">Your Email</label>

          <div className="w-full form-append  lg:flex">
            <input
              className="text-slate-900 form-input form-input-lg p-3 focus:outline-none placeholder:text-sm rounded-l"
              type="email"
              placeholder="Enter your email..."
              required
            />
            <button
              className="text-white bg-slate-900 hover:bg-slate-800 btn btn-lg px-3 py-3 text-sm rounded-r"
              type="submit"
            >
              Get Started
            </button>
          </div>
        </form>
        <p className="pr-0 mb-4 text-sm text-slate-800 tracking-relaxed lg:pr-16">
          Get the #1 Business Messenger and start delivering personalized
          experiences at every stage of the customer journey.
        </p>
      </div>
      <div className="flex items-center">
        <img
          src="/images/hero.png"
          alt="car"
          className="object-fit w-full "
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
