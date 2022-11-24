import React from "react";
import { Link } from "react-router-dom";
import { MdBarChart } from "react-icons/md";
const Header = () => {
  return (
    <header className="header py-5 bg-blue-100 bg-opacity-25">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex  flex-col">
            <h2 className="text-xl -mb-1 tracking-widest font-bold underline text-slate-900">
              UNICAR
            </h2>
            <p className="text-xs tracking-tighter	mt-0 text-gray-600">
              Your favorite car
            </p>
          </div>

          <ul className="lg:flex items-center gap-5 text-sm hidden">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <button className="bg-slate-900 hover:bg-slate-800 rounded py-2.5  px-8  text-white text-sm">
                Login
              </button>
            </li>
          </ul>

          <button className="-rotate-90 lg:hidden">
            <MdBarChart size={32} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
