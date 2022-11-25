import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="lg:w-2/6 md:w-3/5 bg-white p-10 mx-auto rounded border-t-4 border-t-slate-900">
          <h1 className=" text-slate-500 text-center">Create Your Account</h1>

          <form>
            <div className="my-4">
              <p className="text-sm text-slate-500 mb-1">
                <label htmlFor="email">Your Name</label>
              </p>
              <input
                type="text"
                className="bg-slate-100 w-full px-5 py-3 text-sm text-slate-700 focus:outline-none rounded placeholder:text-xs"
                placeholder="John Doe"
              />
            </div>
            <div className="my-4">
              <p className="text-sm text-slate-500 mb-1">
                <label htmlFor="email">Email Address</label>
              </p>
              <input
                type="email"
                className="bg-slate-100 w-full px-5 py-3 text-sm text-slate-700 focus:outline-none rounded placeholder:text-xs"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="my-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-slate-500">
                  <label htmlFor="email">Password</label>
                </p>
              </div>
              <input
                type="password"
                className="bg-slate-100 w-full px-5 py-3 text-sm text-slate-700 focus:outline-none rounded placeholder:text-xs"
                placeholder="******"
              />
            </div>
            <div className="my-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-slate-500">
                  <label htmlFor="email">Your Role</label>
                </p>
              </div>
              <select
                id="countries"
                className="bg-slate-100 w-full px-5 py-3 text-sm text-slate-700 focus:outline-none rounded placeholder:text-xs"
              >
                <option selected>Choose your role</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="my-4">
              <input
                type="submit"
                className="cursor-pointer text-white w-full px-5 py-3 text-sm  focus:outline-none rounded placeholder:text-xs bg-slate-900"
                value="SignIn"
              />
            </div>
            <div className="my-4">
              <p className="text-sm text-slate-500">
                Already have an account?{" "}
                <Link className="text-blue-500" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
