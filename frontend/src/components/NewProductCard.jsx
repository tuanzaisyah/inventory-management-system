import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const NewProduct = () => {
  return (
    <div className="w-52 bg-white rounded-lg shadow-custom mt-4 p-4 flex flex-col gap-6">
      <div className="flex flex-col items-start">
        <h3 className="">Product 1</h3>
        <h4 className="text-sm text-blue-600">Category</h4>
      </div>

      <div className="flex flex-col items-center">
        <img
          className="w-auto h-40 object-cover"
          src="./assets/img/noImage.jpeg"
          alt="new product"
        />
      </div>
      <div className="flex flex-col items-end">
        <Link to={"/inventory/:id"}>
          <span className="flex flex-row gap-1 items-center text-sm cursor-pointer hover:text-blue-400">
            Product Details <BiRightArrowAlt className="text-base" />{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewProduct;
