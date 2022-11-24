import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdTaxiAlert } from "react-icons/md";
const Featured = () => {
  return (
    <div className="bg-slate-900 py-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-1 w-full">
            <div className="p-5 flex items-center flex-col justify-center text-center">
              <p className="text-center mb-2">
                <FaShippingFast color="white" size="44" />
              </p>

              <h2 className="uppercase font-bold text-white">
                Free shipping Service
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Business Messenger and start delivering personalized experiences
                at every stage of the customer journey.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="p-5 flex items-center flex-col justify-center text-center">
              <p className="text-center mb-2">
                <RiSecurePaymentLine color="white" size="44" />
              </p>

              <h2 className="uppercase font-bold text-white">
                REFOUND available
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Business Messenger and start delivering personalized experiences
                at every stage of the customer journey.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="p-5 flex items-center flex-col justify-center text-center">
              <p className="text-center mb-2">
                <MdTaxiAlert color="white" size="44" />
              </p>

              <h2 className="uppercase font-bold text-white">
                Third party not allowed
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Business Messenger and start delivering personalized experiences
                at every stage of the customer journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
