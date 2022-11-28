import React from "react";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./CheckOut";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payment = () => {
  const { state } = useLocation();

  console.log(state);
  const { productInfo, buyerInfo } = state;
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  justify-between">
          <div className="lg:col-span-1">
            <img
              src={productInfo.image}
              className="rounded-lg"
              alt={productInfo.name}
            />

            <div className="py-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl text-slate-900">
                  {productInfo.name}{" "}
                  <span className="text-sm text-slate-500 capitalize">
                    ({productInfo.category})
                  </span>
                </h2>
                <p className="text-sm  text-slate-600">
                  Order By {buyerInfo.userName}
                </p>
                <h2 className="font-bold  text-slate-600">
                  ${productInfo.newPrice}
                </h2>
              </div>
              <p className="text-sm text-slate-600 my-2 text-justify">
                {productInfo.description}
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Elements stripe={stripePromise}>
              <Checkout productInfo={productInfo} />
            </Elements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
