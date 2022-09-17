import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import "../pay/pay.css";
const Pay = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="w-full flex justify-center px-40 my-5">
          <div className="w-2/3 p-4 relative">
            <h1 className="font-bold">THÔNG TIN THANH TOÁN</h1>
            <form action="">
              <input
                className="input-text"
                type="text"
                placeholder="Địa chỉ email"
              />
              <div className="flex input-text">
                <input className="mr-2" type="text" placeholder="Họ" />
                <input className="ml-2" type="text" placeholder="Tên" />
              </div>
              <input
                className="input-text"
                type="text"
                placeholder="Quốc gia"
              />
              <input className="input-text" type="text" placeholder="Địa chỉ" />
              <input
                className="input-text"
                type="text"
                placeholder="Tỉnh/Thành phố"
              />
              <input
                className="input-text"
                type="text"
                placeholder="Số điện thoại"
              />
            </form>
            <Link className="back-store absolute bottom-3 " to="/cart">
              <FontAwesomeIcon
                className="font-normal pr-2"
                icon={faArrowLeft}
              />
              Quay lại
            </Link>
          </div>
          <div className="w-3/6 px-5 py-3 border-2 border-[rgba(22,69,155,0.9)]">
            <h1 className="font-bold pb-2">ĐƠN HÀNG CỦA BẠN</h1>
            <table>
              <tr className="border-b border-stone-300 text-sm">
                <th>SẢN PHẨM</th>
                <th>TẠM TÍNH</th>
              </tr>
              <tr className="text-sm">
                <td>
                  Obagi SUZANOBAGIMD Soothing Complex Broad Spectrum SPF 25 × 1
                </td>
                <td>1,615,000₫</td>
              </tr>
            </table>
            <div className=" border-b  pt-4">
              <div className="flex justify-between text-sm pb-2 text-black font-medium">
                <p className="text-black">Tạm tính</p>
                <p className="text-black">1,615,000₫</p>
              </div>
              <div className="flex justify-between pb-2 text-sm font-medium">
                <p className="text-black">Tổng</p>
                <p className="text-black">1,615,000₫</p>
              </div>
            </div>

            <ul className=" pt-4">
              <li>
                <input type="radio" name="payment_method" />
                <label className="px-4 text-lg font-bold" htmlFor="">
                  Chuyển khoản ngân hàng
                </label>
                <div className="mb-5 pl-3">
                  <p className="text-black">
                    Quý khách vui lòng chuyển vào tải khoản dưới đây:{" "}
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      className="w-1/4"
                      src="https://www.bidv.com.vn/wps/wcm/connect/cf677e7d-6fef-4186-a910-f0c00fde0679/BIDV+Card+_Etran.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-cf677e7d-6fef-4186-a910-f0c00fde0679-mpY5Wsu"
                      alt=""
                    />
                    <div className="pl-4">
                      <p className="text-black font-bold">BIDV</p>
                      <p className="text-black">
                        Số tài khoản: {""}
                        <span className=" font-bold">000000000000000000</span>
                      </p>
                      <p className="text-black">
                        Người nhận: {""}
                        <span className=" font-bold">Trần Văn A</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <input type="radio" name="payment_method" />
                <label className="px-4 text-lg font-bold" htmlFor="">
                  Thanh toán khi nhận hàng
                </label>
              </li>
            </ul>
            <button
              type="submit"
              className="border px-3 py-2 my-4 bg-[rgb(23,69,153)] text-white font-bold hover:bg-[rgb(20,59,131)]"
            >
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pay;
