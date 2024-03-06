import React, { useState } from "react";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import SupplierModal from "../components/SupplierModal";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Supplier Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 150 },
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

const rows = [
  {
    id: 1,
    name: "TechMart",
    email: "techmart@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "ElectroTech",
    email: "electrotech@example.com",
    phone: "234-567-8901",
  },
  {
    id: 3,
    name: "GameGear",
    email: "gamegear@example.com",
    phone: "345-678-9012",
  },
  {
    id: 4,
    name: "HomeTech Solutions",
    email: "hometech@example.com",
    phone: "456-789-0123",
  },
  {
    id: 5,
    name: "AudioMax",
    email: "audiomax@example.com",
    phone: "567-890-1234",
  },
  {
    id: 6,
    name: "GameHaven",
    email: "gamehaven@example.com",
    phone: "678-901-2345",
  },
  {
    id: 7,
    name: "SmartLiving Tech",
    email: "smartliving@example.com",
    phone: "789-012-3456",
  },
  {
    id: 8,
    name: "SkyView Innovations",
    email: "skyview@example.com",
    phone: "890-123-4567",
  },
  {
    id: 9,
    name: "HealthTech Wearables",
    email: "healthtech@example.com",
    phone: "901-234-5678",
  },
  {
    id: 10,
    name: "SoundWave Electronics",
    email: "soundwave@example.com",
    phone: "012-345-6789",
  },
  {
    id: 11,
    name: "EcoTech Solutions",
    email: "ecotech@example.com",
    phone: "123-456-7890",
  },
  {
    id: 12,
    name: "GamerGear Pro",
    email: "gamergear@example.com",
    phone: "234-567-8901",
  },
  {
    id: 13,
    name: "TechConnect",
    email: "techconnect@example.com",
    phone: "345-678-9012",
  },
  {
    id: 14,
    name: "NetLink Technologies",
    email: "netlink@example.com",
    phone: "456-789-0123",
  },
  {
    id: 15,
    name: "ChargePro",
    email: "chargepro@example.com",
    phone: "567-890-1234",
  },
  {
    id: 16,
    name: "DisplayTech",
    email: "displaytech@example.com",
    phone: "678-901-2345",
  },
  {
    id: 17,
    name: "SecureHome Systems",
    email: "securehome@example.com",
    phone: "789-012-3456",
  },
  {
    id: 18,
    name: "FitnessTech Pro",
    email: "fitnesstech@example.com",
    phone: "890-123-4567",
  },
  {
    id: 19,
    name: "PrintInnovate",
    email: "printinnovate@example.com",
    phone: "901-234-5678",
  },
  {
    id: 20,
    name: "LightTech Solutions",
    email: "lighttech@example.com",
    phone: "012-345-6789",
  },
];

const Suppliers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add");

  const handleAddSupplier = () => {
    setModalType("add");
    setOpenModal(true);
  };

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
          <div style={{ height: 650, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10, 15, 20]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
      {openModal && (
        <SupplierModal setOpenModal={setOpenModal} modalType={modalType} />
      )}
    </div>
  );
};

export default Suppliers;
