import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaUsers,
  FaUserGraduate,
  FaSignInAlt,
  FaPlus,
  FaNotesMedical,
  FaBorderAll,
} from "react-icons/fa";
const Dashboard = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="w-full lg:col-span-1">
            <div className="p-5 bg-white border-t-4  border-t-slate-900">
              <div className="flex items-center gap-3 pb-3 border-b">
                <div class="relative">
                  <img
                    class="w-14 h-14 rounded"
                    src="https://images.barrons.com/im-637418?width=1280&size=1"
                    alt=""
                  />

                  <span class="-bottom-2 left-11 absolute inline-flex items-center p-1 mr-2 text-sm font-semibold text-white bg-blue-600 rounded-full  ">
                    <svg
                      aria-hidden="true"
                      class="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Icon description</span>
                  </span>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-600">
                    Elon Mask
                  </h2>
                  <p className="text-xs font-bold text-slate-400">Seller</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-col items-start gap-2 text-sm text-slate-500 w-full">
                <li className="w-full">
                  <Link
                    to="/dashboard"
                    className="py-2 px-3 hover:bg-slate-900 hover:text-white transition-all duration-200 w-full rounded flex items-center gap-1"
                  >
                    <FaNotesMedical />
                    My products
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/dashboard/myOrders"
                    className="py-2 px-3 hover:bg-slate-900 hover:text-white transition-all duration-200 w-full rounded flex items-center gap-1"
                  >
                    <FaBorderAll />
                    My orders
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/dashboard/addProduct"
                    className="py-2 px-3 hover:bg-slate-900 hover:text-white transition-all duration-200 w-full rounded flex items-center gap-1"
                  >
                    <FaPlus />
                    Add a product
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/dashboard/sellers"
                    className="py-2 px-3 hover:bg-slate-900 hover:text-white transition-all duration-200 w-full rounded flex items-center gap-1"
                  >
                    <FaUsers />
                    All sellers
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/dashboard/buyers"
                    className="py-2 px-3 hover:bg-slate-900 hover:text-white transition-all duration-200 w-full rounded flex items-center gap-1"
                  >
                    <FaUserGraduate />
                    All buyers
                  </Link>
                </li>
                <li className="w-full">
                  <button className="py-2 px-3 hover:bg-slate-900 hover:text-white transition-all duration-200 w-full rounded flex items-center gap-1">
                    <FaSignInAlt />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;