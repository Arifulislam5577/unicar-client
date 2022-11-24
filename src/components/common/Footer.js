import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-white bg-slate-900 mt-auto">
      <div className="mx-auto max-w-7xl container">
        <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-5">
          <div className="flex  flex-col">
            <h2 className="text-xl -mb-1 tracking-widest font-bold underline text-white">
              UNICAR
            </h2>
            <p className="text-xs tracking-tighter	mt-0 text-gray-600">
              Your favorite car
            </p>
          </div>
          <nav className="mb-8">
            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
              Product
            </p>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Features
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Integrations
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Documentation
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              FAQs
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Pricing
            </a>
          </nav>
          <nav className="mb-8">
            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
              About
            </p>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Press-Kit
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Company
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Privacy
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Blog
            </a>
          </nav>
          <nav className="mb-8">
            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
              Contact
            </p>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Twitter
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Email
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Advertising
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Chat
            </a>
          </nav>
          <nav className="mb-8">
            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
              Legal
            </p>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Terms of Service
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Cookie Policy
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Affiliate Program
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Manage Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
