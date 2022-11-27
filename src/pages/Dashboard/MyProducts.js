import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  deleteSellerProduct,
  getSellerProducts,
  makeProductAdvertiseMent,
} from "../../apis/productApiCall";
import Loader from "../../components/shared/Loader";
const MyProducts = () => {
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["sellerProducts"],
    queryFn: getSellerProducts,
  });

  const handleClick = async (id) => {
    const { data } = await makeProductAdvertiseMent(id);
    data && refetch();
  };

  const handleDelete = async (id) => {
    const { data } = await deleteSellerProduct(id);
    data && refetch();
  };

  if (isLoading) {
    return <Loader />;
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
          <thead className="text-xs uppercase  text-slate-100 bg-slate-900">
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
                Status
              </th>
              <th scope="col" className="py-5 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((pd) => (
              <tr className="bg-white border-b border-t text-xs" key={pd._id}>
                <td className="py-4 px-6">
                  <img src={pd.image} alt="" className="h-10 rounded" />
                </td>
                <td className="py-4 px-6">{pd.name}</td>
                <td className="py-4 px-6">${pd.newPrice}</td>
                <td className="py-4 px-6">
                  {pd.isSold ? "Not Avaliable" : "Avaliable"}
                </td>
                <td className="py-4 px-6 ">
                  {pd.isAdvertised ? (
                    <button className="bg-slate-100 text-slate-900 px-3 py-1 rounded  mr-2">
                      Advertised
                    </button>
                  ) : (
                    <button
                      className="bg-slate-900 text-white px-3 py-1 rounded  mr-2"
                      onClick={() => handleClick(pd._id)}
                    >
                      Make Advertised
                    </button>
                  )}

                  <button
                    className="bg-red-900 text-white px-3 py-1 rounded"
                    onClick={() => {
                      console.log({ id: pd._id, name: pd.name });
                      handleDelete(pd._id);
                    }}
                  >
                    Delete
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
