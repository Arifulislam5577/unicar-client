import React from "react";

const AddProducts = () => {
  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 items-center mb-4">
        <div className="w-full md:col-span-6">
          <input
            type="text"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="title"
          />
        </div>
        <div className="w-full md:col-span-2">
          <input
            type="number"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="original price"
          />
        </div>
        <div className="w-full md:col-span-2">
          <input
            type="number"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="new price"
          />
        </div>
        <div className="w-full md:col-span-2">
          <input
            type="number"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="purchase Year"
          />
        </div>
        <div className="w-full md:col-span-3">
          <input
            type="number"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="used Year"
          />
        </div>
        <div className="w-full md:col-span-3">
          <input
            type="text"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="phone number"
          />
        </div>
        <div className="w-full md:col-span-3">
          <select
            id="countries"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
          >
            <option selected>Choose condition</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
        </div>
        <div className="w-full md:col-span-3">
          <select
            id="countries"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
          >
            <option selected>Choose category</option>
            <option value="tesla">Tesla</option>
            <option value="bmw">Bmw</option>
            <option value="nissan">Nissan</option>
          </select>
        </div>
        <div className="w-full md:col-span-6">
          <input
            type="text"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="location"
          />
        </div>
        <div className="w-full md:col-span-6">
          <textarea
            type="text"
            className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="description"
            rows="5"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default AddProducts;
