import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await newRequest.post("/auth/register", { ...user });
      navigate("/auth/login");
    } catch (err) {
      console.log(err);
    }
  };

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
          SIGN UP
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="w-full flex flex-col gap-4 lg:gap-5 mb-8 lg:mb-10">
            <input
              className="border border-blue-200 rounded-2xl py-4 px-5"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              className="border border-blue-200 rounded-2xl py-4 px-5"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              className="border border-blue-200 rounded-2xl py-4 px-5"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="border border-blue-200 rounded-2xl py-4 px-5"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <button className="bg-blue-400 rounded-xl py-2 px-14 text-lg font-medium text-white mb-4">
            Sign Up
          </button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link className="link" to={"/auth/login"}>
              <span className="text-sm underline cursor-pointer hover:text-blue-400">
                Login
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
