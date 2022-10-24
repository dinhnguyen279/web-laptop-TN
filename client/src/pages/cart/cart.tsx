import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../cart/cart.css";
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="py-5 mt-20 container font-semibold">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-8 grid grid-cols-1">
            <table>
              <thead>
                <tr className="h-12 boder-solid border-b-2">
                  <th className="p-2 col-span-3">SẢN PHẨM</th>
                  <th className="p-2">GIÁ</th>
                  <th className="p-2">SỐ LƯỢNG</th>
                  <th className="p-2 hidden lg:block">TẠM TÍNH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2">
                    <div className="flex items-center flex-wrap">
                      <FontAwesomeIcon
                        className="text-slate-400 hover:text-slate-800"
                        icon={faCircleXmark}
                      />
                      <img
                        className="w-20 px-3"
                        src="https://product.hstatic.net/1000026716/product/79uj_d0c75e24084a4dabb5b50902c3d32963.png"
                        alt=""
                      />
                      <p>Laptop Gaming Acer Nitro 5 Tiger AN515 58 79UJ</p>
                    </div>
                  </td>
                  <td className="px-2">37,990,000₫</td>
                  <td className="px-2 ">
                    <div className="flex">
                      <input
                        className="w-full p-1 border-[0.1rem] border-solid border-[#29335c] rounded-tl-[50%] rounded-bl-[50%] bg-gray-300 hover:bg-[#45aece] hover:text-white"
                        type="button"
                        value="-"
                      />
                      <p className="w-full p-2 border-[0.1rem] border-t-[#29335c] border-solid border-b-[#29335c] bg-gray-300">
                        1
                      </p>
                      <input
                        className="w-full p-1 border-[0.1rem] border-solid border-[#29335c] rounded-br-[50%] rounded-tr-[50%] bg-gray-300 hover:bg-[#45aece] hover:text-white"
                        type="button"
                        value="+"
                      />
                    </div>
                  </td>
                  <td className="px-2 ">
                    <div className="hidden lg:block">37,990,000₫</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className=" my-4 font-medium text-xs hover:no-underline hover:bg-[#45aece] hover:text-[#fff] hover:border-[#45aece]">
              <Link className="border-2 border-black px-3 py-2 " to="/">
                <FontAwesomeIcon className="pr-2" icon={faArrowLeft} />
                TIẾP TỤC XEM SẢN PHẨM
              </Link>
            </div>
          </div>
          <div className="border-l-2 px-8">
            <div className="">
              <div>
                <h2 className="text-lg font-bold pb-2 border-b-2">
                  Cộng giỏ hàng
                </h2>
                <div className="flex justify-between border-b py-2 ">
                  <p className="text-black">Tạm tính</p>
                  <p className="text-black font-medium">37,990,000₫</p>
                </div>
                <div className="flex justify-between border-b py-2">
                  <p className="text-black">Tổng</p>
                  <p className="text-black font-bold">37,990,000₫</p>
                </div>
              </div>
              <div className="text-center my-3">
                <Link to="/pay">
                  <button className="border bg-[#45aece] text-white font-bold w-full h-9">
                    TIẾN HÀNH THANH TOÁN
                  </button>
                </Link>
              </div>
              <div>
                <h2 className="text-lg font-bold pb-2 border-b-2">
                  Phiếu ưu đãi
                </h2>
                <form action="" className="flex flex-col">
                  <input
                    className="mt-3 input-text box-border border border-solid border-[#ddd] px-3 h-9 text-base max-w-full align-middle bg-white text-[#333]"
                    type="text"
                    placeholder="Mã ưu đãi"
                  />
                  <input
                    className="mt-3 input-submit overflow-hidden relative bg-[#f9f9f9] h-9 text-[#666] text-base border border-solid border-[#ddd] transform-none font-normal hover:bg-[#45aece] hover:text-[#fff] hover:border-[#45aece]"
                    type="submit"
                    value="Áp dụng"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
