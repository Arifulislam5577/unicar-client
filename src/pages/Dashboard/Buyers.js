import React from "react";

const Buyers = () => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs uppercase bg-white text-slate-900 border-t-4 border-t-slate-900">
          <tr>
            <th scope="col" className="py-5 px-6">
              Username
            </th>
            <th scope="col" className="py-5 px-6">
              user email
            </th>
            <th scope="col" className="py-5 px-6">
              user role
            </th>

            <th scope="col" className="py-5 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-t">
            <td className="py-4 px-6">Elon Mask</td>
            <td className="py-4 px-6">elon@gmail.com</td>
            <td className="py-4 px-6">Buyer</td>
            <td className="py-4 px-6">
              <button className="bg-slate-900 text-white px-5 py-2 rounded mr-2">
                Verify
              </button>
              <button className="bg-red-900 text-white px-5 py-2 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Buyers;
