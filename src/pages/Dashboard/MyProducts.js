import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSellerProducts } from "../../apis/authApiCall";

const MyProducts = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["sellerProducts"],
    queryFn: getSellerProducts,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <h1>{error}</h1>;
  } else if (data.length === 0) {
    return (
      <div>
        <h1 className="text-xl font-bold uppercase">No Product</h1>
        <p className="text-slate-600 text-sm mt-1">
          You did not add any product
        </p>
      </div>
    );
  } else {
    return (
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left ">
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
            {data?.map((pd) => (
              <tr className="bg-white border-b border-t" key={pd._id}>
                <td className="py-4 px-6">
                  <img src={pd.image} alt="" className="h-10 rounded" />
                </td>
                <td className="py-4 px-6">{pd.name}</td>
                <td className="py-4 px-6">${pd.newPrice}</td>
                <td className="py-4 px-6">
                  <button className="bg-slate-900 text-white px-5 py-2 rounded">
                    Pay Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default MyProducts;
