import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import ProfileModal from "../components/ProfileModal";
import { Link } from "react-router-dom";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-[calc(100vw-44px)] lg:w-[calc(100vw-160px)] h-[calc(100vh-80px)] pt-[102px] ml-11 lg:ml-40 px-6 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Your Profile</h1>

        <button
          className=" bg-blue-400 text-white px-4 py-2 rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          <BiSolidEdit />
          <span className="hidden md:block">Update Profile</span>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="w-80 md:w-[500px] lg:w-[600px] bg-white rounded-lg shadow-custom p-4 ">
          <div className="flex flex-col items-center">
            <img
              className="w-auto h-40 lg:h-48 rounded-full border border-blue-200 object-cover"
              src="/assets/img/noAvatar.png"
              alt="profilePic"
            />
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <div className="flex flex-col gap-2 md:flex-row ">
              <div className="basis-1/2">
                <h4 className="font-medium">Name</h4>
                <p>A'isyah</p>
              </div>
              <div className="basis-1/2">
                <h4 className="font-medium">Username</h4>
                <p>@aisyah</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row ">
              <div className="basis-1/2">
                <h4 className="font-medium">Email</h4>
                <p>techmart@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && <ProfileModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Profile;
