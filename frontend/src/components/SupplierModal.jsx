import React, { useEffect, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import newRequest from "../utils/newRequest";

const SupplierModal = ({ setOpenModal, modalType, refetch, supplierData }) => {
  const isUpdateType = modalType === "update";
  const [name, setName] = useState(supplierData ? supplierData.name : "");
  const [email, setEmail] = useState(supplierData ? supplierData.email : "");
  const [phone, setPhone] = useState(supplierData ? supplierData.phone : "");

  useEffect(() => {
    if (supplierData) {
      setName(supplierData.name);
      setEmail(supplierData.email);
      setPhone(supplierData.phone);
    }
  }, [supplierData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isUpdateType) {
        await newRequest.put(`/suppliers/update-supplier/${supplierData._id}`, {
          name,
          email,
          phone,
        });
      } else {
        await newRequest.post("/suppliers/add-supplier", {
          name,
          email,
          phone,
        });
      }
      setOpenModal(false);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              className="border border-blue-200 rounded-lg px-4 py-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Phone Number</label>
            <input
              className="border border-blue-200 rounded-lg px-4 py-1"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
          <button
            onClick={handleSubmit}
            className="w-40 bg-blue-400 text-white py-2 rounded-lg"
          >
            {isUpdateType ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierModal;
