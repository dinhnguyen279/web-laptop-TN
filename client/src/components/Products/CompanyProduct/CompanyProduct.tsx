import React from "react";
import { Link } from "react-router-dom";
import { DataCompanyProduct } from "../dataProducts";

interface Props {
  dataProducts: DataCompanyProduct[];
}
const Product: React.FC<Props> = (Products) => {
  const Product = Products.dataProducts;
  return (
    <div className="bg-white py-5">
      <div className="container bg-black py-10">
        <div className="m-auto pb-4 w-1/2">
          <h1 className="text-4xl py-2 font-bold text-white text-center bg-[#30703a] border-[#93cb9c] border-2 rounded-3xl">
            Sản phẩm mới
          </h1>
        </div>
        <hr className="border-black border-2 m-auto w-14" />
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 p-2 gap-7 mx-10">
          {Product.map((pro, idx) => {
            return (
              <Link
                to="/store"
                className="hover:no-underline hover:text-black"
                key={idx + 1}
              >
                <div className="" key={idx + 1}>
                  <img
                    src={pro.image}
                    alt="texxt"
                    className="w-[100%] h-[100%] object-cover"
                  />
                  <div className="text-black bg-white p-4">
                    <div className="flex flex-col justify-start items-start space-y-3 pb-3">
                      <h1 className="text-3xl truncate hover:text-clip">
                        {pro.title}
                      </h1>
                      <span className="text-xl">{pro.subtitle}</span>
                      <div className="font-bold text-white text-base rounded-3xl bg-slate-800 shadow-xl shadow-slate-500/40">
                        <button className="border-2 px-3 py-2 rounded-3xl">
                          Mua ngay
                        </button>
                      </div>
                    </div>
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
