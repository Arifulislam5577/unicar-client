import React from "react";
import { GiClockwork } from "react-icons/gi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdLocationOn, MdReportOff } from "react-icons/md";
import { BsBagPlusFill, BsHeart } from "react-icons/bs";
const Product = () => {
  const dbUser = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className="lg:col-span-1 w-full">
      <div className="bg-white rounded-md shadow overflow-hidden  cursor-pointer transition-all duration-300">
        <div className="relative">
          <img
            src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-X/5253/1611841733029/front-left-side-47.jpg"
            alt="car"
            className="rounded-t-md"
          />

          <small className="flex absolute top-3 p-1 gap-1 rounded left-3 bg-white text-slate-900 items-center  text-xs gap-1">
            <GiClockwork />
            1hour ago
          </small>
        </div>

        <div className="px-5 py-3 ">
          <div className="flex items-center gap-1 mb-2">
            <small className="flex items-center  text-xs text-slate-500 gap-1">
              <MdLocationOn />
              Dhaka
            </small>
            <small className="flex items-center  text-xs text-slate-500 gap-1">
              <FaRegCalendarCheck />2 year used
            </small>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-700">
              Tesla Model 3X
            </h3>
          </div>

          <div className="flex items-center gap-2 justify-between my-2">
            <div className="flex items-center gap-1">
              <div className="relative">
                <img
                  src="https://images.barrons.com/im-637418?width=1280&size=1"
                  alt=""
                  className="h-8 w-8 rounded border border-slate-300"
                />
                {dbUser?.user?.isVerified && (
                  <span className="-bottom-1 left-5 absolute inline-flex items-center p-1 mr-2 text-sm font-semibold text-white bg-blue-600 rounded-full  ">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Icon description</span>
                  </span>
                )}
              </div>
              <div className="text-xs">
                <h2 className="text-slate-600 font-bold">Elon Mask</h2>
                <p className="text-slate-500">Seller</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs line-throw text-slate-400 line-through">
                $5,000
              </h3>
              <h3 className="text-sm text-slate-600">$4,000</h3>
            </div>
          </div>
          <div className="flex items-center justify-start text-center mt-3 text-slate-400 mb-2">
            <div className="flex items-center gap-2">
              <button
                className="hover:text-slate-700 duration-200 transition-all h-8 w-8 rounded bg-gray-200 flex items-center justify-center"
                title="Book Now"
              >
                <BsBagPlusFill size="16" />
              </button>
              <button
                className="hover:text-slate-700 duration-200 transition-all h-8 w-8 rounded bg-gray-200 flex items-center justify-center"
                title="Add to wishlist"
              >
                <BsHeart size="16" />
              </button>
              <button
                className="hover:text-slate-700 duration-200 transition-all h-8 w-8 rounded bg-gray-200 flex items-center justify-center"
                title="Report to admin"
              >
                <MdReportOff size="16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
