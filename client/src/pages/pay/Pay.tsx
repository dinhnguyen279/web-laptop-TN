import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../pay/pay.css";

const Pay = () => {
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleCheckout = () => {
    setLoad(!load);
    setTimeout(() => {
      setSuccess(!success);
      setLoad(load);
    }, 2000);
  };
  // useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      {load && (
        <div className="wrapper_loader">
          <div className="loader"></div>
        </div>
      )}

      {!success && (
        <div className="container py-5 mt-20 font-semibold font-sans ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-y-0 space-y-4 gap-x-5">
            <div className="px-3 bg-white rounded-lg border-t-4 py-3 border-green-700">
              <h1 className="font-bold text-lg ">THÔNG TIN THANH TOÁN</h1>
              <form action="" className="max-w-full p-4">
                <div className="mb-4 relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="transition ease-linear border-2 focus:outline-none focus:border-gray-600 w-full px-2 h-10 text-sm form-input rounded-lg"
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
                      className="transition ease-linear border-2 focus:outline-none focus:border-gray-600 w-full px-2 h-10 text-sm form-input rounded-lg"
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
                      className="transition ease-linear border-2 focus:outline-none focus:border--gray-600 w-full px-2 h-10 text-sm form-input rounded-lg"
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
                    className="transition ease-linear border-2 focus:outline-none focus:border--gray-600 w-full px-2 h-10 text-sm form-input rounded-lg"
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
                      className="transition ease-linear border-2 focus:outline-none focus:border--gray-600 w-full px-2 h-10 text-sm form-input rounded-lg"
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
                      className="transition ease-linear border-2 focus:outline-none focus:border--gray-600 w-full px-2 h-10 text-sm form-input rounded-lg"
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
                    className="transition ease-linear border-2 focus:outline-none focus:border--gray-600 w-full px-2 h-10 text-sm form-input rounded-lg"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute top-[50%] left-5 translate-y-[-50%] select-none text-slate-400 form-label"
                  >
                    Số điện thoại
                  </label>
                </div>
              </form>
              <p className="text-lg text-red-500 font-bold">
                Lưu ý: Những thông tin trên là bắt buộc, hãy nhập thật kỹ càng.
                Shop xin cảm ơn!
              </p>
              <div className="my-4 text-xs">
                <Link
                  className="border-2 font-medium border-black px-3 py-2  hover:no-underline hover:bg-black hover:text-[#fff]"
                  to="/cart"
                >
                  <FontAwesomeIcon className="pr-2" icon={faArrowLeft} />
                  QUAY LẠI
                </Link>
              </div>
            </div>
            <div className="px-3 border-2 border-t-4 border-green-700 rounded-lg">
              <div className="px-8 py-3 ">
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
                          Củ sạc nhanh 30W Ugreen 90901 cao cấp
                          <strong className="font-semibold"> x&nbsp;2</strong>
                        </p>
                      </td>
                      <td className="py-3 font-bold">369,000₫</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-b border-gray-300 text-sm">
                      <th className="py-1">Tạm tính</th>
                      <td className="py-1 text-sm pb-2 font-bold">
                        <span>369,000₫</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 text-sm">
                      <th className="py-1">Tổng</th>
                      <td className="py-1 pb-2 text-sm font-bold">
                        <span>369,000₫</span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div className="mb-4">
                  <ul className="">
                    <li>
                      <input type="radio" name="payment_method" />
                      <label
                        className="px-4 text-lg font-bold text-green-700"
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
                            <p className=" font-bold text-green-700"> BIDV</p>
                            <p>
                              Số tài khoản:
                              <span className=" font-bold text-green-700">
                                {" "}
                                102870382453
                              </span>
                            </p>
                            <p>
                              Người nhận:
                              <span className=" font-bold text-green-700">
                                {" "}
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
                        className="px-4 text-lg font-bold text-green-700"
                        htmlFor=""
                      >
                        Thanh toán khi nhận hàng
                      </label>
                    </li>
                  </ul>
                </div>
                <button
                  type="submit"
                  className="border px-3 py-2 bg-green-700 text-white font-bold hover:bg-black transition-all ease-in-out"
                  onClick={handleCheckout}
                >
                  ĐẶT HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {success && (
        <section className="py-5 text-center w-full mt-20 text-2xl">
          <div className="p-5 space-y-4 flex flex-col justify-center items-center">
            <h1>Bạn đã đặt hàng thành công!</h1>
            <p>Vui lòng check mail.</p>

            <Link
              className="bg-yellow-400 px-4 py-2 hover:no-underline hover:bg-black hover:text-white rounded-lg transition-all ease-linear"
              to={"/"}
            >
              Trở về trang chủ
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default Pay;
