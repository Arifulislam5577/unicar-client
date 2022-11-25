import React from "react";
import Product from "../../components/shared/Product";

const AdvertisedMent = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="max-w-md mb-10 mx-auto text-center ">
          <h1 className="font-bold uppercase text-2xl">Advertised</h1>
          <p className="text-slate-600 text-sm mt-2">
            Business Messenger and start delivering personalized experiences at
            every stage of the customer journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default AdvertisedMent;
