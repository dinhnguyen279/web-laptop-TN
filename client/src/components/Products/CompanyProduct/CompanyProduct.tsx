import React from "react";
import { Link } from "react-router-dom";
import { DataCompanyProduct } from "../dataProducts";

interface Props {
  dataProducts: DataCompanyProduct[];
}
const Product: React.FC<Props> = (Products) => {
  const Product = Products.dataProducts;
  return (
    <div className="w-full h-full bg-white space-y-4 py-5 ">
      <div className="container">
        <h1 className="text-lg mb-3 md:mb-4 md:text-5xl text-center ">
          Laptop hàng đầu Việt Nam
        </h1>
        <hr className="border-black border-2 m-auto w-14" />
        <div className="container grid sm:grid-cols-2 md:grid-cols-3 p-2 gap-4 grid-cols-2">
          {Product.map((pro, idx) => {
            return (
              <Link
                to="/store"
                className=" hover:no-underline hover:text-black"
                key={idx + 1}
              >
                <div
                  className="text-center rounded-xl transition ease-in hover:scale-105"
                  key={idx + 1}
                >
                  <img
                    src={pro.image}
                    alt=""
                    className="object-contain w-3/4 sm:h-full h-[20vh]"
                  />
                  <div className="font-bold sm:text-2xl text-xs">
                    {pro.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
