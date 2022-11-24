import React from "react";
import { SiTesla, SiBmw, SiNissan } from "react-icons/si";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-1 w-full">
            <div className="py-8 px-5 flex items-center flex-col justify-center text-center bg-white rounded-md">
              <p className="text-center mb-2">
                <SiTesla color="#0f172a" size="44" />
              </p>

              <h2 className="uppercase font-bold text-slate-900">
                Tesla Brand
              </h2>
              <Link
                className="text-sm text-white mt-2 bg-slate-900 px-3 py-1 rounded "
                to="/category/tesla"
              >
                See all
              </Link>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="py-8 px-5 flex items-center flex-col justify-center text-center bg-white rounded-md">
              <p className="text-center mb-2">
                <SiBmw color="#0f172a" size="44" />
              </p>

              <h2 className="uppercase font-bold text-slate-900">BMW Brand</h2>
              <Link
                className="text-sm text-white mt-2 bg-slate-900 px-3 py-1 rounded "
                to="/category/bmw"
              >
                See all
              </Link>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="py-8 px-5 flex items-center flex-col justify-center text-center bg-white rounded-md">
              <p className="text-center mb-2">
                <SiNissan color="#0f172a" size="44" />
              </p>

              <h2 className="uppercase font-bold text-slate-900">
                Nissan Brand
              </h2>
              <Link
                className="text-sm text-white mt-2 bg-slate-900 px-3 py-1 rounded "
                to="/category/nissan"
              >
                See all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
