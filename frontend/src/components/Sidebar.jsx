import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BiPackage } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { RiTruckLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/auth/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] mt-20 w-11 lg:w-40 fixed bg-white border-r-[1px] border-blue-200 flex flex-col justify-between items-center lg:items-start lg:pl-6">
      <ul className="flex flex-col gap-8 items-center lg:items-start mt-10 ">
        <Link
          to={"/"}
          className={location.pathname === "/" ? "text-blue-400" : ""}
        >
          <li className="flex flex-row gap-2 relative cursor-pointer group">
            <LuLayoutDashboard
              className={`text-2xl ${
                location.pathname === "/" ? "text-blue-400" : "text-blue-900"
              } group-hover:text-blue-400 active:text-blue-400`}
            />
            <span className="hidden lg:block group-hover:text-blue-400">
              Dashboard
            </span>
          </li>
        </Link>
        <Link
          to={"/inventory"}
          className={location.pathname === "/inventory" ? "text-blue-400" : ""}
        >
          <li className="flex flex-row gap-2 relative cursor-pointer group">
            <BiPackage
              className={`text-2xl ${
                location.pathname === "/inventory"
                  ? "text-blue-400"
                  : "text-blue-900"
              } group-hover:text-blue-400 active:text-blue-400`}
            />
            <span className="hidden lg:block group-hover:text-blue-400">
              Products
            </span>
          </li>
        </Link>
        <Link
          to={"/supplier"}
          className={location.pathname === "/supplier" ? "text-blue-400" : ""}
        >
          <li className="flex flex-row gap-2 relative cursor-pointer group">
            <RiTruckLine
              className={`text-2xl ${
                location.pathname === "/supplier"
                  ? "text-blue-400"
                  : "text-blue-900"
              } group-hover:text-blue-400 active:text-blue-400`}
            />
            <span className="hidden lg:block group-hover:text-blue-400">
              Suppliers
            </span>
          </li>
        </Link>
        <Link
          to={"/profile/"}
          className={location.pathname === "/profile" ? "text-blue-400" : ""}
        >
          <li className="flex flex-row gap-2 relative cursor-pointer group">
            <BiUserCircle
              className={`text-2xl ${
                location.pathname === "/profile"
                  ? "text-blue-400"
                  : "text-blue-900"
              } group-hover:text-blue-400 active:text-blue-400`}
            />
            <span className="hidden lg:block group-hover:text-blue-400">
              Profile
            </span>
          </li>
        </Link>
      </ul>

      <ul className="mb-6 ">
        <Link onClick={handleLogout}>
          <li className="flex flex-row gap-2 relative cursor-pointer group ">
            <HiOutlineLogout className="text-2xl text-blue-900 group-hover:text-blue-400" />
            <span className="hidden lg:block group-hover:text-blue-400">
              Logout
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
