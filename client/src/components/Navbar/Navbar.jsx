import React from "react";
import logo from "../../assets/images/logoNew.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faNotesMedical,
  faUser,
  faMessage,
  faCartArrowDown,
  faPhoneSquare,
  faVideoCamera,
  faRss,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <>
      <div className=" h-full w-full  bg-white">
        <div className="flex justify-center  py-2 container space-x-10">
          <div className="logo">
            <a href="/">
              <img className="w-full h-14 object-contain" src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <form className="">
              <div className="relative flex">
                <div className="">
                  <input className="border bg-gray-200 rounded-xl w-72 h-8 outline-none pl-3" type="text" placeholder="Tìm kiếm" />
                </div>
                <div className=" absolute top-0 right-0">
                  <button className="bg-[#45aece] py-1 px-2 rounded-r-xl w-full text-[#a8e3f3]">
                    <FontAwesomeIcon icon={faSearch}  />
                  </button>
                </div>
              </div>
            </form>
            <div className="nav1">
              <ul className="flex space-x-3 text-center text-[#45aece]">
                <li className="">
                  <span><FontAwesomeIcon icon={faNotesMedical} /> </span>
                  <p> Đăng ký </p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faUser} /></span>
                  <p>  Đăng Nhập</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faCartArrowDown} /></span>
                  <p>  Giỏ hàng</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faPhoneSquare} /></span>
                  <p>Tổng đài</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faVideoCamera} /></span>
                  <p> Videos</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faRss} /></span>
                  <p> Tin Công Nghệ</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faMessage} /></span>
                  <p>Khuyến mãi</p> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
