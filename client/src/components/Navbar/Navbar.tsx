import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faNotesMedical,
  faUser,
  faMessage,
  faCartArrowDown,
  faPhoneSquare,
  faRss,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../Navbar/navbar.css";
const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };
  return (
    <div className="relative">
      <div className="fixed z-50 top-0 left-0 w-full flex bg-white justify-center items-center py-3 space-x-10 ">
        <div className="logo bg-black text-white px-4 py-3 text-lg font-bold">
          <a href="/">Technology</a>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <form className="">
            <div className="relative flex">
              <input
                className="border bg-gray-200 rounded-xl h-8 outline-none pl-3 w-32 sm:w-48 xl:w-72"
                type="text"
                placeholder="Tìm kiếm"
              />
              <div className=" absolute top-0 right-0">
                <button className="bg-black py-[0.34rem] px-2 rounded-r-xl w-full text-white">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
          <nav className="nav-main">
            <div
              className="flex justify-center space-x-3 text-center"
              ref={navRef}
            >
              <button
                className="nav-btn px-4 py-0 rounded-sm"
                onClick={showNavbar}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="sm:text-3xl text-2xl"
                />
              </button>
              <a href="/" className="hover:no-underline">
                <span>
                  <FontAwesomeIcon icon={faNotesMedical} className="icon" />{" "}
                </span>
                <p>Đăng ký</p>
              </a>
              <a href="/" className="hover:no-underline">
                <span>
                  <FontAwesomeIcon icon={faUser} className="icon" />
                </span>
                <p>Đăng Nhập</p>
              </a>
              <a href="/" className="hover:no-underline">
                <span>
                  <FontAwesomeIcon icon={faPhoneSquare} className="icon" />
                </span>
                <p>Tổng đài</p>
              </a>
              <a href="/" className="hover:no-underline">
                <span>
                  <FontAwesomeIcon icon={faRss} className="icon" />
                </span>
                <p>Tin Công Nghệ</p>
              </a>
              <a href="/" className="hover:no-underline">
                <span>
                  <FontAwesomeIcon icon={faMessage} className="icon" />
                </span>
                <p>Khuyến mãi</p>
              </a>
              <a href="/cart" className="hover:no-underline">
                <span>
                  <FontAwesomeIcon icon={faCartArrowDown} className="icon" />
                </span>
                <p>Giỏ hàng</p>
              </a>
            </div>
            <button
              className="nav-btn py-2 rounded-sm px-3 flex lg:hidden"
              onClick={showNavbar}
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
