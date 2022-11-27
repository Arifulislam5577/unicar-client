import React from "react";
import { FaTimes } from "react-icons/fa";
import { Context } from "../../context/Context";

const Modal = ({ product, setShowModal }) => {
  const { user } = Context();
  const { name, newPrice, _id } = product;

  return (
    <div className="modal bg-slate-800 py-14 px-10  rounded  text-black lg:w-2/5 w-5/6  shadow relative overflow-hidden">
      <button
        className="absolute right-0 top-0 p-2 bg-red-900 text-white "
        onClick={() => setShowModal(false)}
      >
        <FaTimes />
      </button>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            defaultValue={user?.displayName}
            readOnly
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="title"
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            defaultValue={user?.email}
            readOnly
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="title"
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            defaultValue={name}
            readOnly
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            defaultValue={newPrice}
            readOnly
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="your location"
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            placeholder="your phone number"
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="lg:col-span-2 w-full">
          <button className="bg-slate-900 text-white w-full py-3 rounded">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
