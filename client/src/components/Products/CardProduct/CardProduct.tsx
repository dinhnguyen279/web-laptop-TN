import React from "react";
import ProductImg from "../../../assets/images/1.jpg";
import "../products.css";
import { Link } from "react-router-dom";
import { DataProducts } from "../dataProducts";

interface Props {
  dataProducts: DataProducts[];
}
const CardProduct: React.FC<Props> = (dataProducts) => {
  const Products = dataProducts.dataProducts;

  return (
    <div className=" w-full h-full bg-[#f0f0f0] space-y-4 font-sans mt-10">
      <div className="w-full relative">
        <img
          src={ProductImg}
          alt="intro"
          className="w-[100%] md:h-[40vh] lg:h-[60vh] rounded-lg"
        />
        <div className="w-full flex items-center lg:justify-around flex-col lg:flex-row absolute bottom-0 left-0 from-[#000] bg-gradient-to-tr text-center">
          <div>&nbsp;</div>
          <div className="text-white py-3">
            <h1 className="font-bold text-3xl">Cáp sạc</h1>
            <div className="uppercase flex ">
              <a href="/" className="hover:no-underline">
                Trang chủ
              </a>
              <span>/</span>
              <a href="#pro" className="hover:no-underline">
                Cáp sạc
              </a>
            </div>
          </div>
          <form className="">
            <select className="outline-none text-white border-[#2862b4] border-2 rounded-3xl px-3 py-2 bg-slate-400">
              <option value="STT">Thứ tự mặc định</option>
              <option value="New">Mới nhất</option>
              <option value="Up">Thấp tới cao</option>
              <option value="Down">Cao tới thấp</option>
            </select>
          </form>
        </div>
      </div>
      <div
        className="container grid sm:grid-cols-3 py-4 gap-4 grid-cols-2"
        id="pro"
      >
        {Products.map((pro, idx) => {
          return (
            <Link
              to="/product"
              key={idx + 1}
              className="hover:no-underline hover:text-black"
            >
              <div
                className=" border-4 border-green-900 grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-10 p-2 rounded-xl cursor-pointer hover:scale-105 bg-white "
                key={idx + 1}
              >
                <img
                  src={pro.image}
                  alt="img card product"
                  className="object-cover w-full h-full"
                />
                <div className="md:space-y-4 space-y-1">
                  <div className="font-bold sm:text-2xl text-sm">
                    {pro.title}
                  </div>
                  <div className="smtext-2xl text-xs">
                    <div className="grid grid-cols-2 border-dashed border-t-2 border-b-2">
                      <div className="border-r-2 border-dashed">
                        Cổng
                        <p className="text-orange-300 font-semibold">
                          {pro.vga}
                        </p>
                      </div>
                      <div className="pl-2">
                        Bảo hành
                        <p className="text-orange-300 font-semibold">
                          {pro.cpu}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 border-b-2 border-dashed">
                      <div className="border-r-2 border-dashed ">
                        Công suất
                        <p className="font-bold"> {pro.display}</p>
                      </div>
                      <div className="pl-2">
                        Kích thước
                        <p className="font-bold">{pro.ram}</p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:text-xl text-xs">{pro.description}</div>
                  <div className="sm:text-xl text-base font-sans text-red-500 font-extrabold">
                    {pro.price}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardProduct;
