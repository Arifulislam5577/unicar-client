import React from "react";

const MyOrders = () => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-center ">
        <thead className="text-xs uppercase bg-white text-slate-900 border-t-4 border-t-slate-900">
          <tr>
            <th scope="col" className="py-5 px-6">
              Image
            </th>
            <th scope="col" className="py-5 px-6">
              Title
            </th>

            <th scope="col" className="py-5 px-6">
              Price
            </th>
            <th scope="col" className="py-5 px-6">
              <button>Payment status</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-t">
            <td className="py-4 px-6">Tesla Model 3X</td>
            <td className="py-4 px-6">Tesla Model 3X</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6">
              <button className="bg-slate-900 text-white px-5 py-2 rounded">
                Pay Now
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
