import React from "react";
import getCurrentUser from "../utils/getCurrentUser";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

const Navbar = () => {
  const user = getCurrentUser();

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${user._id}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="w-screen bg-white h-20 px-6 fixed flex flex-row justify-between items-center border-b-[1px] border-blue-200">
      <div className="flex flex-row gap-2">
        <img
          className="w-auto h-8"
          src="/assets/img/inventoryLogo.png"
          alt="logo"
        />
        <span className="font-logo font-medium text-2xl">INVENTORY</span>
      </div>

      <div className="flex flex-row gap-2 items-center">
        {isLoading ? (
          "loading"
        ) : error ? (
          "Something went wrong!"
        ) : (
          <>
            <div className="flex flex-col">
              <p>{data?.name}</p>
              <span className="text-sm">@{data?.username}</span>
            </div>
            <img
              className="w-auto h-9 object-cover rounded-full border border-blue-200"
              src={data?.img || "/assets/img/noAvatar.png"}
              alt="profilePic"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
