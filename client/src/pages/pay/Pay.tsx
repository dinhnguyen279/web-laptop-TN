import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../pay/pay.css";

const Pay = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5 mt-20 font-semibold font-sans ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-3">
            <h1 className="font-bold text-lg border-t-2 py-3 border-gray-300">
              THÔNG TIN THANH TOÁN
            </h1>
            <form action="" className="max-w-full bg-white p-4 rounded-xl">
              <div className="mb-4 relative">
                <input
                  type="text"
                  placeholder=" "
                  className="transition ease-linear border-2 focus:outline-none focus:border-[#0a0f9e] w-full px-2 h-10 text-sm form-input rounded-lg"
                />
                <label
                  htmlFor="email"
                  className="absolute top-[50%] left-5 translate-y-[-50%] select-none text-slate-400 form-label"
                >
                  Địa chỉ email
                </label>
              </div>
              <div className="mb-4 w-full grid grid-cols-2 gap-x-3 relative">
                <div className="">
                  <input
                    className="transition ease-linear border-2 focus:outline-none focus:border-[#0a0f9e] w-full px-2 h-10 text-sm form-input rounded-lg"
                    type="text"
                    placeholder=" "
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute top-[50%] left-5 translate-y-[-50%] select-none text-slate-400 form-label"
                  >
                    Họ
                  </label>
                </div>
                <div>
                  <input
                    className="transition ease-linear border-2 focus:outline-none focus:border-[#0a0f9e] w-full px-2 h-10 text-sm form-input rounded-lg"
                    type="text"
                    placeholder=" "
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute top-[50%] left-[53.5%] translate-y-[-50%] select-none text-slate-400 form-label-2"
                  >
                    Tên
                  </label>
                </div>
              </div>
              <div className="mb-4 relative">
                <input
                  className="transition ease-linear border-2 focus:outline-none focus:border-[#0a0f9e] w-full px-2 h-10 text-sm form-input rounded-lg"
                  type="text"
                  placeholder=" "
                />
                <label
                  htmlFor="country/region"
                  className="absolute top-[50%] left-5 translate-y-[-50%] select-none text-slate-400 form-label"
                >
                  Quốc gia/ Khu vực
                </label>
              </div>
              <div className="mb-4 w-full grid grid-cols-2 gap-x-3 relative">
                <div>
                  <input
                    className="transition ease-linear border-2 focus:outline-none focus:border-[#0a0f9e] w-full px-2 h-10 text-sm form-input rounded-lg"
                    type="text"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Address"
                    className="absolute top-[50%] left-5 translate-y-[-50%] select-none text-slate-400 form-label"
                  >
                    Địa chỉ
                  </label>
                </div>
                <div>
                  <input
                    className="transition ease-linear border-2 focus:outline-none focus:border-[#0a0f9e] w-full px-2 h-10 text-sm form-input rounded-lg"
                    type="text"
                    placeholder=" "
                  />
                  <label
                    htmlFor="City"
                    className="absolute top-[50%] left-[53.5%]  translate-y-[-50%] select-none text-slate-400 form-label-2"
                  >
                    Tỉnh/ Thành phố
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="transition ease-linear border-2 focus:outline-none focus:border-[#0a0f9e] w-full px-2 h-10 text-sm form-input rounded-lg"
                />
                <label
                  htmlFor="phone"
                  className="absolute top-[50%] left-5 translate-y-[-50%] select-none text-slate-400 form-label"
                >
                  Số điện thoại
                </label>
              </div>
            </form>
            <div className="my-4 text-xs">
              <Link
                className="border-2 font-medium border-black px-3 py-2  hover:no-underline hover:bg-[#45aece] hover:text-[#fff] hover:border-[#45aece]"
                to="/cart"
              >
                <FontAwesomeIcon className="pr-2" icon={faArrowLeft} />
                QUAY LẠI
              </Link>
            </div>
          </div>
          <div className="px-3">
            <div className="px-8 py-3 border-2 border-[#0a0f9e]">
              <h1 className="font-bold text-lg mb-2">ĐƠN HÀNG CỦA BẠN</h1>
              <table className="w-full mb-4">
                <thead>
                  <tr className="border-b border-gray-300 text-sm">
                    <th className="py-2">SẢN PHẨM</th>
                    <th className="py-2">TẠM TÍNH</th>
                  </tr>
                </thead>
                <tbody className="border-b border-gray-300">
                  <tr className="text-sm">
                    <td className="py-3">
                      <p className="font-thin">
                        Laptop Gaming Acer Nitro 5 Tiger AN515 58 79UJ
                        <strong className="font-semibold"> x&nbsp;2</strong>
                      </p>
                    </td>
                    <td className="py-3 font-bold">1,615,000₫</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-b border-gray-300 text-sm">
                    <th className="py-1">Tạm tính</th>
                    <td className="py-1 text-sm pb-2 font-bold">
                      <span>1,615,000₫</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300 text-sm">
                    <th className="py-1">Tổng</th>
                    <td className="py-1 pb-2 text-sm font-bold">
                      <span>1,615,000₫</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="mb-4">
                <ul className="">
                  <li>
                    <input type="radio" name="payment_method" />
                    <label
                      className="px-4 text-lg font-bold text-[#45aece]"
                      htmlFor=""
                    >
                      Chuyển khoản ngân hàng
                    </label>
                    <div>
                      <p>Quý khách vui lòng chuyển vào tải khoản dưới đây:</p>
                      <div className="flex justify-center bank m-4">
                        <img
                          className="w-1/4 object-scale-down"
                          src="https://www.bidv.com.vn/wps/wcm/connect/cf677e7d-6fef-4186-a910-f0c00fde0679/BIDV+Card+_Etran.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-cf677e7d-6fef-4186-a910-f0c00fde0679-mpY5Wsu"
                          alt=""
                        />
                        <div className="pl-4">
                          <p className=" font-bold text-[#45aece]">BIDV</p>
                          <p>
                            Số tài khoản:
                            <span className=" font-bold text-[#45aece]">
                              102870382453
                            </span>
                          </p>
                          <p>
                            Người nhận:
                            <span className=" font-bold text-[#45aece]">
                              Trần Văn A
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <input type="radio" name="payment_method" />
                    <label
                      className="px-4 text-lg font-bold text-[#45aece]"
                      htmlFor=""
                    >
                      Thanh toán khi nhận hàng
                    </label>
                  </li>
                </ul>
              </div>
              <button
                type="submit"
                className="border px-3 py-2 bg-[rgb(23,69,153)] text-white font-bold hover:bg-[#0a0f9e]"
              >
                ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pay;
