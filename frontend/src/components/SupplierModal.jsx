import React from "react";
import { LuImagePlus } from "react-icons/lu";

const SupplierModal = ({ setOpenModal, modalType }) => {
  const isUpdateType = modalType === "update";
  return (
    <div className="w-full h-full absolute top-[80px] right-0 left-0 bottom-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="w-80 md:w-max h-max bg-white rounded-lg shadow-custom p-4">
        <h1 className="text-xl font-medium">
          {isUpdateType ? "Update Supplier" : "New Supplier"}
        </h1>

        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-1">
            <label>Supplier Name</label>
            <input
              className="border border-blue-200 rounded-lg px-4 py-1"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              className="border border-blue-200 rounded-lg px-4 py-1"
              type="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Phone Number</label>
            <input
              className="border border-blue-200 rounded-lg px-4 py-1"
              type="text"
              id="phone"
            />
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
            {isUpdateType ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierModal;
