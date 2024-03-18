import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import SupplierModal from "../components/SupplierModal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

const SupplierInformation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("update");

  const handleUpdateSupplier = () => {
    setModalType("update");
    setOpenModal(true);
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["supplier._id"],
    queryFn: () =>
      newRequest.get(`/suppliers/${id}`).then((res) => {
        return res.data;
      }),
  });

  const handleDelete = async (e) => {
    try {
      await newRequest.delete(`/suppliers/delete-supplier/${id}`);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[calc(100vw-44px)] lg:w-[calc(100vw-160px)] h-[calc(100vh-80px)] pt-[102px] ml-11 lg:ml-40 px-6 relative">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <Link to={"/supplier"}>
            <BiChevronLeft className="text-2xl cursor-pointer" />
          </Link>
          <h1 className="text-xl font-medium">Supplier Information</h1>
        </div>
        <div className="flex flex-rpw gap-4">
          <button
            className=" bg-blue-400 text-white px-4 py-2 rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer"
            onClick={handleUpdateSupplier}
          >
            <BiSolidEdit />
            <span className="hidden md:block">Update Supplier</span>
          </button>
          <button
            className=" bg-red-500 text-white px-4 py-2 rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer"
            onClick={handleDelete}
          >
            <BiTrash />
            <span className="hidden md:block">Delete Supplier</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6">
        <div className="w-80 md:w-[500px] lg:w-[600px] bg-white rounded-lg shadow-custom p-4  flex flex-col ">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="flex flex-col gap-2">
              <div>
                <h4 className="font-medium">Supplier Name</h4>
                <p>{data?.name}</p>
              </div>

              <div className="flex flex-col gap-2 md:flex-row ">
                <div className="basis-1/2">
                  <h4 className="font-medium">Email</h4>
                  <p>{data?.email}</p>
                </div>
                <div className="basis-1/2">
                  <h4 className="font-medium">Phone Number</h4>
                  <p>{data?.phone}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <SupplierModal
          setOpenModal={setOpenModal}
          modalType={modalType}
          refetch={refetch}
          supplierData={data}
        />
      )}
    </div>
  );
};

export default SupplierInformation;
