import React from "react";
import { GiClockwork } from "react-icons/gi";
import { MdLocationOn, MdReportOff } from "react-icons/md";
import { BsBagPlusFill, BsHeart } from "react-icons/bs";
const Product = () => {
  return (
    <div className="lg:col-span-1 w-full">
      <div className="bg-white rounded-md shadow overflow-hidden  cursor-pointer transition-all duration-300">
        <img
          src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-X/5253/1611841733029/front-left-side-47.jpg"
          alt="car"
          className="rounded-t-md"
        />

        <div className="px-5 py-3 ">
          <div className="flex items-center gap-2 mb-2">
            <small className="flex items-center gap-1 text-xs text-slate-500">
              <GiClockwork />
              1hour ago
            </small>
            <small className="flex items-center gap-1 text-xs text-slate-500">
              <MdLocationOn />
              Dhaka
            </small>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-700">
              Tesla Model 3X
            </h3>
            <h3 className="text-sm font-bold text-slate-400">$4,000</h3>
          </div>
          <p className="text-slate-400 text-sm my-1 hidden sm:block">
            Business Messenger and start delivering personalized stage of the
            customer journey.
          </p>
          <div className="flex items-center justify-between text-center mt-3 text-slate-400 mb-2">
            <div>
              <img
                src="https://images.barrons.com/im-637418?width=1280&size=1"
                alt=""
                className="h-11 w-11 rounded border-2 border-slate-300"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                className="hover:text-slate-700 duration-200 transition-all h-10 w-10 rounded bg-gray-200 flex items-center justify-center"
                title="Book Now"
              >
                <BsBagPlusFill size="20" />
              </button>
              <button
                className="hover:text-slate-700 duration-200 transition-all h-10 w-10 rounded bg-gray-200 flex items-center justify-center"
                title="Add to wishlist"
              >
                <BsHeart size="20" />
              </button>
              <button
                className="hover:text-slate-700 duration-200 transition-all h-10 w-10 rounded bg-gray-200 flex items-center justify-center"
                title="Report to admin"
              >
                <MdReportOff size="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
