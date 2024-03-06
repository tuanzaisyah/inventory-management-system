import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen p-6 lg:p-8 flex flex-col lg:flex-row gap-14 lg:gap-28 items-center justify-center ">
      <div className="flex flex-row gap-4  items-center justify-center ">
        <img
          className="w-auto h-16 lg:h-28"
          src="../assets/img/inventoryLogo.png"
          alt="logo"
        />
        <span className="font-logo font-medium text-black text-[40px] lg:text-6xl">
          INVENTORY
        </span>
      </div>

      <div className="w-full max-w-[600px] bg-white rounded-2xl border border-blue-200 py-8 px-6 ">
        <h1 className="font-medium text-3xl text-center mb-8 lg:mb-10">
          LOGIN
        </h1>

        <form className="flex flex-col items-center">
          <div className="w-full flex flex-col gap-4 lg:gap-5 mb-8 lg:mb-10">
            <input
              className="border border-blue-200 rounded-2xl py-4 px-6"
              type="text"
              placeholder="Username"
            />

            <input
              className="border border-blue-200 rounded-2xl py-4 px-6"
              type="password"
              placeholder="Password"
            />
          </div>

          <button className="bg-blue-400 rounded-xl py-2 px-14 text-lg font-medium text-white mb-4">
            Login
          </button>
          <p className="text-sm">
            Don't have an account?{" "}
            <Link className="link" to={"/auth/sign-up"}>
              <span className="text-sm underline cursor-pointer hover:text-blue-400">
                Sign Up
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
