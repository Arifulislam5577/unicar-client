import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUser } from "../../apis/authApiCall";

const Sellers = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUser("seller"),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <h1>{error}</h1>;
  } else if (data.length === 0) {
    return <h1>No User</h1>;
  } else {
    return (
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs uppercase bg-slate-900 text-slate-100 ">
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
            {data?.map((user) => (
              <tr className="bg-white border-b border-t">
                <td className="py-4 px-6">{user.userName}</td>
                <td className="py-4 px-6">{user.userEmail}</td>
                <td className="py-4 px-6">{user.userRole}</td>
                <td className="py-4 px-6">
                  {user.isVerified ? (
                    <button
                      disabled
                      className="bg-slate-100 text-slate-900 px-5 py-2 rounded mr-2"
                    >
                      Verifed
                    </button>
                  ) : (
                    <button className="bg-slate-900 text-white px-5 py-2 rounded mr-2">
                      Verify
                    </button>
                  )}

                  <button className="bg-red-900 text-white px-5 py-2 rounded">
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

export default Sellers;
