import React from "react";
import { LuImagePlus } from "react-icons/lu";

const ProfileModal = ({ setOpenModal }) => {
  return (
    <div className="w-full h-full absolute top-[80px] right-0 left-0 bottom-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="w-80 md:w-max h-max bg-white rounded-lg shadow-custom p-4">
        <h1 className="text-xl font-medium">Update Profile</h1>

        <div className="flex flex-row gap-4 items-center justify-center mt-10">
          <img
            className="w-auto h-40 lg:h-48 rounded-full border border-blue-200 object-cover"
            src="/assets/img/noAvatar.png"
            alt="profilePic"
          />
          <label htmlFor="file">
            <LuImagePlus className="text-3xl text-blue-900 cursor-pointer" />
          </label>
          <input type="file" id="file" name="file" className="hidden" />
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 ">
            <div className="flex flex-col gap-1">
              <label>Name</label>
              <input
                className="border border-blue-200 rounded-lg px-4 py-1"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Username</label>
              <input
                className="border border-blue-200 rounded-lg px-4 py-1"
                type="text"
                id="username"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 ">
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                className="border border-blue-200 rounded-lg px-4 py-1"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                className="border border-blue-200 rounded-lg px-4 py-1"
                type="password"
                id="password"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 mt-10 justify-center lg:justify-end">
          <button
            className="w-40 bg-blue-300 py-2 rounded-lg"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
          <button className="w-40 bg-blue-400 text-white py-2 rounded-lg">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
