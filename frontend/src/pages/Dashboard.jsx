import React from "react";
import NewProductCard from "../components/NewProductCard";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import getCurrentUser from "../utils/getCurrentUser";

const Dashboard = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="w-[calc(100vw-44px)] lg:w-[calc(100vw-160px)] h-[calc(100vh-80px)] pt-[102px] ml-11 lg:ml-40 px-6 flex flex-col gap-6 ">
      <div className="flex flex-col lg:flex-row gap-6 lg:basis-1/2">
        <div className="lg:basis-3/4">
          <h1 className="text-xl font-medium">Welcome to Inventory</h1>
          <h2 className="">Hello {currentUser.name}, welcome back!</h2>

          <div className="flex flex-col lg:flex-row gap-4 mt-4 ">
            <div className="bg-white rounded-lg shadow-custom p-4 flex flex-col gap-4 lg:basis-1/2">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-medium">Total Product</h3>
                  <h4 className="text-3xl">1000</h4>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-2xl text-green ">45%</p>
                  <span>this month</span>
                </div>
              </div>
              <div>graph</div>
            </div>

            <div className="bg-white rounded-lg shadow-custom p-4 flex flex-col gap-4 lg:basis-1/2">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-medium">Total Cost</h3>
                  <h4 className="text-3xl">1000</h4>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-2xl text-red-600 ">-15%</p>
                  <span>this month</span>
                </div>
              </div>
              <div>graph</div>
            </div>
          </div>
        </div>

        <div className="lg:basis-1/4">
          <h1 className="text-xl font-medium">Recent Activity</h1>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-auto h-10 object-cover rounded-full border border-blue-200"
                src="/assets/img/noAvatar.png"
                alt="profilePic"
              />
              <div>
                <p>name</p>
                <span>Added new product</span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-auto h-10 object-cover rounded-full border border-blue-200"
                src="/assets/img/noAvatar.png"
                alt="profilePic"
              />
              <div>
                <p>name</p>
                <span>Added new product</span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-auto h-10 object-cover rounded-full border border-blue-200"
                src="/assets/img/noAvatar.png"
                alt="profilePic"
              />
              <div>
                <p>name</p>
                <span>Added new product</span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-auto h-10 object-cover rounded-full border border-blue-200"
                src="/assets/img/noAvatar.png"
                alt="profilePic"
              />
              <div>
                <p>name</p>
                <span>Added new product</span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-auto h-10 object-cover rounded-full border border-blue-200"
                src="/assets/img/noAvatar.png"
                alt="profilePic"
              />
              <div>
                <p>name</p>
                <span>Added new product</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:basis-1/2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-medium">New Product</h1>
          <Link to={"/inventory"}>
            <span className="flex flex-row gap-1 items-center text-sm cursor-pointer hover:text-blue-400">
              See all product <BiRightArrowAlt className="text-base" />{" "}
            </span>
          </Link>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center lg:justify-start flex-wrap ">
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
