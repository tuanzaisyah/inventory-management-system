import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import ProfileModal from "../components/ProfileModal";
import { Link } from "react-router-dom";
import newRequest from "../utils/newRequest";
import { QueryClient, useQuery } from "@tanstack/react-query";
import getCurrentUser from "../utils/getCurrentUser";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  const user = getCurrentUser();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${user._id}`).then((res) => {
        return res.data;
      }),
  });

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
        {isLoading ? (
          "loading"
        ) : error ? (
          "Something went wrong!"
        ) : (
          <div className="w-80 md:w-[500px] lg:w-[600px] bg-white rounded-lg shadow-custom p-4 ">
            <div className="flex flex-col items-center">
              <img
                className="w-auto h-40 lg:h-48 rounded-full border border-blue-200 object-cover"
                src={data?.img || "/assets/img/noAvatar.png"}
                alt="profilePic"
              />
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <div className="flex flex-col gap-2 md:flex-row ">
                <div className="basis-1/2">
                  <h4 className="font-medium">Name</h4>
                  <p>{data?.name}</p>
                </div>
                <div className="basis-1/2">
                  <h4 className="font-medium">Username</h4>
                  <p>@{data?.username}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row ">
                <div className="basis-1/2">
                  <h4 className="font-medium">Email</h4>
                  <p>{data?.email}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {openModal && (
        <ProfileModal
          setOpenModal={setOpenModal}
          userData={data}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Profile;
