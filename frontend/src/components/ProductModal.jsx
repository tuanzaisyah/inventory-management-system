import React from "react";
import { LuImagePlus } from "react-icons/lu";

const ProductModal = ({ setOpenModal, modalType }) => {
  const isUpdateType = modalType === "update";
  return (
    <div className="w-full h-full absolute top-[80px] right-0 left-0 bottom-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="w-80 md:w-max h-max bg-white rounded-lg shadow-custom p-4">
        <h1 className="text-xl font-medium">
          {isUpdateType ? "Update Product" : "New Product"}
        </h1>

        <div className="flex flex-row gap-4 items-center justify-center mt-10">
          <img
            className="w-auto h-40 object-cover"
            src="/assets/img/noImage.jpeg"
            alt="productImg"
          />
          <label htmlFor="file">
            <LuImagePlus className="text-3xl text-blue-900 cursor-pointer" />
          </label>
          <input type="file" id="file" name="file" className="hidden" />
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-1">
            <label>Product Name</label>
            <input
              className="border border-blue-200 rounded-lg px-4 py-1"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Description</label>
            <input
              className="border border-blue-200 rounded-lg px-4 py-1"
              type="text"
              id="desc"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Category</label>
            <input
              className="border border-blue-200 rounded-lg px-4 py-1"
              type="text"
              id="category"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="flex flex-col gap-1 lg:basis-1/2">
              <label>Supplier</label>
              <select
                className="border border-blue-200 rounded-lg px-4 py-1 outline-none"
                name="supplier"
                id="supplier"
              >
                <option>Please Select</option>
                <option value="supplier">Supplier</option>
              </select>
            </div>
            <div className="flex flex-row gap-6 lg:gap-4 lg:basis-1/2">
              <div className="flex flex-col gap-1 basis-1/2">
                <label>Price (RM)</label>
                <input
                  className="w-full border border-blue-200 rounded-lg px-4 py-1"
                  type="number"
                  id="price"
                />
              </div>
              <div className="flex flex-col gap-1 basis-1/2">
                <label>Quantity</label>
                <input
                  className="w-full border border-blue-200 rounded-lg px-4 py-1"
                  type="number"
                  id="quantity"
                />
              </div>
            </div>
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

export default ProductModal;
