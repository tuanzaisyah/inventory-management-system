import React, { useState } from "react";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import ProductModal from "../components/ProductModal";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "category", headerName: "Category", width: 200 },
  { field: "desc", headerName: "Description", width: 400 },
  {
    field: "price",
    headerName: "Price (RM)",
    type: "number",
    width: 90,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 90,
  },
  { field: "supplier", headerName: "Supplier", width: 150 },
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

const rows = [
  {
    id: 1,
    name: "Smartphone X",
    category: "Mobile Devices",
    desc: "Powerful smartphone with advanced features",
    price: 799.99,
    quantity: 100,
    supplier: "TechMart",
  },
  {
    id: 2,
    name: "UltraBook Pro",
    category: "Laptops",
    desc: "Slim and high-performance ultrabook for professionals",
    price: 1299.99,
    quantity: 50,
    supplier: "ElectroTech",
  },
  {
    id: 3,
    name: "VR Gaming Headset",
    category: "Gaming Accessories",
    desc: "Immersive virtual reality experience for gamers",
    price: 399.99,
    quantity: 30,
    supplier: "GameGear",
  },
  {
    id: 4,
    name: "4K Smart TV",
    category: "Televisions",
    desc: "Ultra-high-definition smart TV for cinematic viewing",
    price: 899.99,
    quantity: 20,
    supplier: "HomeTech Solutions",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    category: "Audio Devices",
    desc: "Compact and noise-canceling wireless earbuds",
    price: 129.99,
    quantity: 50,
    supplier: "AudioMax",
  },
  {
    id: 6,
    name: "Gaming Console Elite",
    category: "Gaming Consoles",
    desc: "High-performance gaming console for enthusiasts",
    price: 499.99,
    quantity: 25,
    supplier: "GameHaven",
  },
  {
    id: 7,
    name: "Smart Home Hub",
    category: "Smart Home",
    desc: "Centralized hub for home automation and control",
    price: 199.99,
    quantity: 40,
    supplier: "SmartLiving Tech",
  },
  {
    id: 8,
    name: "Camera Drone X",
    category: "Drones",
    desc: "High-resolution camera drone for aerial photography",
    price: 599.99,
    quantity: 15,
    supplier: "SkyView Innovations",
  },
  {
    id: 9,
    name: "Fitness Tracker Pro",
    category: "Wearable Tech",
    desc: "Advanced fitness tracker with health monitoring",
    price: 79.99,
    quantity: 60,
    supplier: "HealthTech Wearables",
  },
  {
    id: 10,
    name: "Portable Bluetooth Speaker",
    category: "Audio Devices",
    desc: "Compact and portable speaker with wireless connectivity",
    price: 49.99,
    quantity: 75,
    supplier: "SoundWave Electronics",
  },
  {
    id: 11,
    name: "Smart Thermostat",
    category: "Smart Home",
    desc: "Energy-efficient thermostat with smart home integration",
    price: 129.99,
    quantity: 35,
    supplier: "EcoTech Solutions",
  },
  {
    id: 12,
    name: "Gaming Mouse RGB",
    category: "Gaming Accessories",
    desc: "High-precision gaming mouse with customizable RGB lighting",
    price: 69.99,
    quantity: 50,
    supplier: "GamerGear Pro",
  },
  {
    id: 13,
    name: "HD Webcam",
    category: "Computer Accessories",
    desc: "High-definition webcam for video conferencing and streaming",
    price: 89.99,
    quantity: 25,
    supplier: "TechConnect",
  },
  {
    id: 14,
    name: "Smart WiFi Router",
    category: "Networking",
    desc: "Advanced WiFi router for seamless internet connectivity",
    price: 129.99,
    quantity: 30,
    supplier: "NetLink Technologies",
  },
  {
    id: 15,
    name: "Wireless Charging Pad",
    category: "Mobile Accessories",
    desc: "Qi-compatible wireless charging pad for smartphones",
    price: 29.99,
    quantity: 100,
    supplier: "ChargePro",
  },
  {
    id: 16,
    name: "Curved Gaming Monitor",
    category: "Monitors",
    desc: "Immersive curved monitor for gaming and productivity",
    price: 399.99,
    quantity: 20,
    supplier: "DisplayTech",
  },
  {
    id: 17,
    name: "Smart Doorbell",
    category: "Home Security",
    desc: "Video doorbell with smart security features",
    price: 149.99,
    quantity: 30,
    supplier: "SecureHome Systems",
  },
  {
    id: 18,
    name: "Bluetooth Fitness Earphones",
    category: "Wearable Tech",
    desc: "Wireless earphones with fitness tracking capabilities",
    price: 59.99,
    quantity: 40,
    supplier: "FitnessTech Pro",
  },
  {
    id: 19,
    name: "3D Printer Deluxe",
    category: "Printers",
    desc: "High-precision 3D printer for professional use",
    price: 799.99,
    quantity: 10,
    supplier: "PrintInnovate",
  },
  {
    id: 20,
    name: "Smart LED Bulbs",
    category: "Smart Home",
    desc: "Energy-efficient LED bulbs with smart lighting features",
    price: 19.99,
    quantity: 50,
    supplier: "LightTech Solutions",
  },
];

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add");

  const handleAddProduct = () => {
    setModalType("add");
    setOpenModal(true);
  };

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
        <ProductModal setOpenModal={setOpenModal} modalType={modalType} />
      )}
    </div>
  );
};

export default Products;
