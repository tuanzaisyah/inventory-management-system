import React from "react";

const navbar = () => {
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
        <div className="flex flex-col">
          <p>A'isyah</p>
          <span className="text-sm">@aisyah</span>
        </div>
        <img
          className="w-auto h-9 object-cover rounded-full border border-blue-200"
          src="/assets/img/noAvatar.png"
          alt="profilePic"
        />
      </div>
    </div>
  );
};

export default navbar;
