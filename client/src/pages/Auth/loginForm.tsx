import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login.jpg";
const loginForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">Đăng Nhập</h2>
          <div className="flex flex-col py-2">
            <label>Họ và Tên</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Mật khẩu</label>
            <input className="border p-2" type="password" />
          </div>
          <Link to={"/"}>
            <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
              Đăng nhập
            </button>
          </Link>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Nhớ thông tin
            </p>
            <p>Tạo một tài khoản</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default loginForm;
