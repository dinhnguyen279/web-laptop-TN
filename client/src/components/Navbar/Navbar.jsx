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
      <div className="h-full max-w-full bg-white">
        <div className=" flex justify-center items-center container py-3 space-x-10">
          <div className="logo">
            <a href="/">
              <img className="w-full h-14 object-fill" src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <form className="">
              <div className="relative flex">
                  <input className="border bg-gray-200 rounded-xl h-8 outline-none pl-3 w-32 sm:w-48 xl:w-72" type="text" placeholder="Tìm kiếm" />
                <div className=" absolute top-0 right-0">
                  <button className="bg-[#45aece] py-1 px-2 rounded-r-xl w-full text-[#a8e3f3]">
                    <FontAwesomeIcon icon={faSearch}  />
                  </button>
                </div>
              </div>
            </form>
            <nav className="nav-main">
              <ul className="flex justify-center space-x-3 text-center"ref={navRef}>
                {/* text-[#45aece] */}
                <button className="nav-btn px-3 py-0" onClick={showNavbar}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
                <li>
                  <span><FontAwesomeIcon icon={faNotesMedical} className="icon" /> </span>
                  <p>Đăng ký</p>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faUser} className="icon"/></span>
                  <p>Đăng Nhập</p>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faCartArrowDown} className="icon"/></span>
                  <p>Giỏ hàng</p>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faPhoneSquare} className="icon"/></span>
                  <p>Tổng đài</p>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faVideoCamera} className="icon"/></span>
                  <p>Videos</p>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faRss}className="icon" /></span>
                  <p>Tin Công Nghệ</p>
                </li>
                <li className="">
                  <span><FontAwesomeIcon icon={faMessage}className="icon" /></span>
                  <p>Khuyến mãi</p> 
                </li>
              </ul>
              <button className="nav-btn flex lg:hidden" onClick={showNavbar}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </nav>
          </div>
          </div>
      </div>
    </>
  );
};
