import React, { useState } from "react";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import ProductModal from "../components/ProductModal";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add");

  const handleAddProduct = () => {
    setModalType("add");
    setOpenModal(true);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      newRequest.get("/inventory").then((res) => {
        return res.data;
      }),
  });

  const {
    isLoading: isLoadingSupplier,
    error: errorSupplier,
    data: dataSupplier,
  } = useQuery({
    queryKey: ["supplier"],
    queryFn: () =>
      newRequest.get("/suppliers").then((res) => {
        return res.data;
      }),
  });

  const getSupplierNameById = (supplierId) => {
    if (dataSupplier && dataSupplier.length > 0) {
      const supplier = dataSupplier.find(
        (supplier) => String(supplier._id).trim() === String(supplierId).trim()
      );
      return supplier ? supplier.name : "Unknown";
    } else {
      return "Loading...";
    }
  };

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
      headerName: "Product Name",
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.name}</div>;
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.category}</div>;
      },
    },
    {
      field: "desc",
      headerName: "Description",
      width: 400,
      renderCell: (params) => {
        return <div>{params.row.desc}</div>;
      },
    },
    {
      field: "price",
      headerName: "Price (RM)",
      type: "number",
      width: 90,
      renderCell: (params) => {
        return <div>{params.row.price}</div>;
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 90,
      renderCell: (params) => {
        return <div>{params.row.quantity}</div>;
      },
    },
    {
      field: "supplier",
      headerName: "Supplier",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/supplier/${params.row.supplierId}`}>
              {getSupplierNameById(params.row.supplierId)}
            </Link>
          </div>
        );
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
            <Link to={`/inventory/${params.row._id}`}>
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
        <h1 className="text-xl font-medium">Product List</h1>
        <button
          className="flex flex-row gap-2 items-center bg-blue-400 text-white rounded-lg py-2 px-6"
          onClick={handleAddProduct}
        >
          <BsPlusCircle className="text-white text-xl" />
          Add Product
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
          {isLoading || isLoadingSupplier ? ( // Check both isLoading and isLoadingSupplier
            <p>Loading...</p>
          ) : error || errorSupplier ? ( // Check both error and errorSupplier
            <p>Error: {error ? error.message : errorSupplier.message}</p>
          ) : data ? (
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
          ) : null}
        </div>
      </div>
      {openModal && (
        <ProductModal setOpenModal={setOpenModal} modalType={modalType} />
      )}
    </div>
  );
};

export default Products;
