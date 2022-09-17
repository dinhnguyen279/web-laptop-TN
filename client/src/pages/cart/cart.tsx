import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowAltCircleLeft,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import "../cart/cart.css";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className=" py-5 ">
        <div className="container flex justify-center pb-5">
          <div className="px-8 w-1/2 pl-20 relative">
            <table>
              <tr>
                <th className="px-3">SẢN PHẨM</th>
                <th className="px-3">GIÁ</th>
                <th className="px-3">SỐ LƯỢNG</th>
                <th className="px-3">TẠM TÍNH</th>
              </tr>
              <tr>
                <td className=" flex items-center px-3">
                  <FontAwesomeIcon
                    className=" text-slate-400 hover:text-slate-800"
                    icon={faCircleXmark}
                  />
                  <img
                    className="w-20 px-3"
                    src="https://zomedical.vn/wp-content/uploads/2020/12/Artboard-24-1-225x270.png"
                    alt=""
                  />
                  Obagi SUZANOBAGIMD Soothing Complex Broad Spectrum SPF 25
                </td>
                <td className="text-center px-3 font-semibold">1,615,000₫</td>
                <td className="text-center flex px-3">
                  <input className="btn-left px-1 " type="button" value="-" />
                  <p className="text-number">1</p>
                  <input className="btn-right  px-1" type="button" value="+" />
                </td>
                <td className="text-center px-3 font-semibold">1,615,000₫</td>
              </tr>
            </table>
            <Link className="back-store absolute bottom-3 " to="/">
              <FontAwesomeIcon
                className="font-normal pr-2"
                icon={faArrowLeft}
              />
              TIẾP TỤC XEM SẢN PHẨM
            </Link>
          </div>
          <div className="border"></div>
          <div className="px-8 w-2/5">
            <div className="w-4/5 ">
              <div>
                <h2 className="text-lg font-bold pb-2 border-b-2">
                  Cộng giỏ hàng
                </h2>
                <div className="flex justify-between border-b py-2 ">
                  <p className="text-black">Tạm tính</p>
                  <p className="text-black font-medium">1,615,000₫</p>
                </div>
                <div className="flex justify-between border-b py-2">
                  <p className="text-black">Tổng</p>
                  <p className="text-black font-bold">1,615,000₫</p>
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
                  <input className="mt-3" type="text" placeholder="Mã ưu đãi" />
                  <input className="mt-3" type="submit" value="Áp dụng" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
