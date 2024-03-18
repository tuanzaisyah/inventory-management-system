import React, { useState } from "react";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import SupplierModal from "../components/SupplierModal";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

const Suppliers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add");

  const handleAddSupplier = () => {
    setModalType("add");
    setOpenModal(true);
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["supplier"],
    queryFn: () =>
      newRequest.get("/suppliers").then((res) => {
        return res.data;
      }),
  });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      renderCell: (params) => {
        return <div>{params.row._id}</div>;
      },
    },
    {
      field: "name",
      headerName: "Supplier Name",
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.name}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.email}</div>;
      },
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      renderCell: (params) => {
        return <div>{params.row.phone}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 450,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="flex flex-row justify-center bg-blue-300 text-blue-400 py-1 px-4 rounded-lg">
            <Link to={`/supplier/${params.row._id}`}>
              <button className="">View</button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-[calc(100vw-44px)] lg:w-[calc(100vw-160px)] h-[calc(100vh-80px)] pt-[102px] ml-11 lg:ml-40 px-6 pb-4 relative">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-medium">Supplier List</h1>
        <button
          className="flex flex-row gap-2 items-center bg-blue-400 text-white rounded-lg py-2 px-6"
          onClick={handleAddSupplier}
        >
          <BsPlusCircle className="text-white text-xl" />
          Add Supplier
        </button>
      </div>

      <div className="w-full h-full bg-white rounded-lg p-4 shadow-custom mt-6 ">
        <div className="flex flex-row justify-center mb-6">
          <div className="w-full max-w-2xl flex items-center px-6 py-2 rounded-full border border-blue-200 ">
            <input className="w-full " type="text" placeholder="Search" />
            <BsSearch className="text-xl " />
          </div>
        </div>
        <div>
          <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              <div style={{ height: 650, width: "100%" }}>
                <DataGrid
                  rows={data}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  pageSizeOptions={[5, 10, 15, 20]}
                  checkboxSelection
                  getRowId={(row) => row._id}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {openModal && (
        <SupplierModal
          setOpenModal={setOpenModal}
          modalType={modalType}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Suppliers;
