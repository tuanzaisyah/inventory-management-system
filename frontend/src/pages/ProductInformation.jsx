import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import ProductModal from "../components/ProductModal";
import { Link } from "react-router-dom";

const ProductInformation = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("update");

  const handleUpdateProduct = () => {
    setModalType("update");
    setOpenModal(true);
  };
  return (
    <div className="w-[calc(100vw-44px)] lg:w-[calc(100vw-160px)] h-[calc(100vh-80px)] pt-[102px] ml-11 lg:ml-40 px-6 relative">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <Link to={"/inventory"}>
            <BiChevronLeft className="text-2xl cursor-pointer" />
          </Link>
          <h1 className="text-xl font-medium">Product Information</h1>
        </div>
        <div className="flex flex-rpw gap-4">
          <button
            className=" bg-blue-400 text-white px-4 py-2 rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer"
            onClick={handleUpdateProduct}
          >
            <BiSolidEdit />
            <span className="hidden md:block">Update Product</span>
          </button>
          <button className=" bg-red-500 text-white px-4 py-2 rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer">
            <BiTrash />
            <span className="hidden md:block">Delete Product</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="max-w-xl bg-white rounded-lg shadow-custom p-4  flex flex-col items-center">
          <img
            className="w-auto h-48 lg:h-64 object-cover"
            src="/assets/img/noImage.jpeg"
            alt="productImg"
          />

          <div className="flex flex-col gap-2 mt-6">
            <div>
              <h4 className="font-medium">Product Name</h4>
              <p>Wireless Earbuds</p>
            </div>
            <div>
              <h4 className="font-medium">Product Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                vero suscipit, facere minima fuga laborum veritatis eius totam
                iure fugiat rerum itaque saepe, unde, hic perferendis architecto
                eos eum? Odit.
              </p>
            </div>

            <div className="flex flex-row">
              <div className="basis-1/2">
                <h4 className="font-medium">Category</h4>
                <p>Audio Devices</p>
              </div>
              <div className="basis-1/2">
                <h4 className="font-medium">Supplier</h4>
                <p>AudioMaz</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/2">
                <h4 className="font-medium">Quantity</h4>
                <p>59</p>
              </div>
              <div className="basis-1/2">
                <h4 className="font-medium">Price (RM)</h4>
                <p>129.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <ProductModal setOpenModal={setOpenModal} modalType={modalType} />
      )}
    </div>
  );
};

export default ProductInformation;
