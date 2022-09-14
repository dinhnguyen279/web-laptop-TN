import React, { useRef  } from "react";
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
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import '../Navbar/navbar.css'
export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <>
      <div className=" h-full w-full bg-white">
        <div className=" flex justify-center  py-3 container space-x-10">
          <div className="logo">
            <a href="/">
              <img className="w-full h-14 object-fill" src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <form className="">
              <div className="relative flex">
                <div className="">
                  <input className="border bg-gray-200 rounded-xl h-8 outline-none pl-3 w-48 sm:w-72 lg:w-72" type="text" placeholder="Tìm kiếm" />
                </div>
                <div className=" absolute top-0 right-0">
                  <button className="bg-[#45aece] py-1 px-2 rounded-r-xl w-full text-[#a8e3f3]">
                    <FontAwesomeIcon icon={faSearch}  />
                  </button>
                </div>
              </div>
            </form>
            <nav className="nav-main">
              <ul className="flex justify-center items-center space-x-3 text-center "ref={navRef}>
                {/* text-[#45aece] */}
                <button className="nav-btn .nav-close-btn" onClick={showNavbar}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
                <li className="">
                  <span><FontAwesomeIcon icon={faNotesMedical} className="icon" /> </span>
                  <p>Đăng ký</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faUser} className="icon"/></span>
                  <p>Đăng Nhập</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faCartArrowDown} className="icon"/></span>
                  <p>Giỏ hàng</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faPhoneSquare} className="icon"/></span>
                  <p>Tổng đài</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faVideoCamera} className="icon"/></span>
                  <p>Videos</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faRss}className="icon" /></span>
                  <p>Tin Công Nghệ</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faMessage}className="icon" /></span>
                  <p>Khuyến mãi</p> 
                </li>
              </ul>
              <button className="nav-btn lg:hidden flex" onClick={showNavbar}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </nav>
          </div>
          </div>
      </div>
    </>
  );
};
