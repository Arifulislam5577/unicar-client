import React from "react";
import { Context } from "../../context/Context";

const WishList = () => {
  const { wishlistProduct } = Context();

  if (wishlistProduct.length === 0) {
    return (
      <div>
        <h1 className="text-xl font-bold uppercase">No Product in wishlist</h1>
        <p className="text-slate-600 text-sm mt-1">
          You did not add any product
        </p>
      </div>
    );
  }

  return <div>WishlistProduct</div>;
};

export default WishList;
