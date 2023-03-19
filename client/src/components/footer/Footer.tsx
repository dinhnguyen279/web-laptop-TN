import {
  faHome,
  faMailBulk,
  faArrowRight,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-wrapper">
      <div className="container">
        <div className="row row-footer">
          <div className="col pt-3 text-left">
            <div>
              <p>HOTLINE</p>
              <br />
              <h3 className="font-black">
                <strong>0902.388977 (giờ HC)</strong>
              </h3>
              <h3 className="font-black">
                <strong>091.2222.592 (24/7)</strong>
              </h3>
            </div>
            <div className="col text-left px-0">
              <h4 className="text-lg mb-1 leading-10 pt-3">
                <strong>HNtechonology.vn</strong>
              </h4>
              <p className="text-lg">HN TECHNOLOGY</p>
              <ul className="leading-9">
                <li>
                  <FontAwesomeIcon className="faCircle" icon={faHome} />
                  abcxyz, Q.10, HCM
                </li>
                <li>
                  <FontAwesomeIcon className="faCircle" icon={faMailBulk} />
                  shopphukien@gmail.vn
                </li>
                <li>
                  <FontAwesomeIcon className="faCircle" icon={faClock} />
                  08:30 - 20:00 (chủ nhật nghỉ)
                </li>
                <li>
                  <FontAwesomeIcon className="faCircle" icon={faPhone} />
                  Hotline: 091.2222.592 (24/7)
                </li>
              </ul>
            </div>
          </div>

          <div className="col colum-footer text-left">
            <div>
              <p>Tư vấn (08:30-19:00)</p>
              <br />
              <h2 className="font-black text-xl">
                <strong>Mr. Vũ Huy Nhân 0123456789</strong>
              </h2>
            </div>
            <div className="col colum-footer text-left">
              <div className="text-left leading-7">
                <ul>
                  <li>
                    <FontAwesomeIcon className="faCircle" icon={faPhone} />
                    Tư vấn 1: 0902677745 (8h30 - 19h)
                  </li>
                  <li>
                    <FontAwesomeIcon className="faCircle" icon={faPhone} />
                    Tư vấn 2: 093.8449788 (8h30 - 19h)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col colum-footer text-left">
            <div>
              <p> Góp ý kiếu nại</p>
              <br />
              <h3 className="font-black text-xl">0938449788(44/7)</h3>
            </div>

            <div className="col colum-footer text-left">
              <h2 className="text-xl">
                <strong>Chính sách</strong>
              </h2>
              <div className="flex flex-col justify-start">
                <div className="menu-item">
                  <a href="/">
                    <span>Chính sách bảo vệ thông tin cá nhân </span>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="/">
                    <span> Chính sách vận chuyển và giao nhận </span>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="/">
                    <span>Chính sách đổi trả và hoàn tiền</span>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="/">
                    <span>Chính sách bảo hành </span>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="/">
                    <span> Chính sách giải quyết tranh chấp và khiếu nại </span>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="/">
                    <span>Chính sách và quy định chung </span>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="/">
                    <span>Chính sách kiểm hàng</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 pt-3 pb-4 text-center">
        Copyright {new Date().getFullYear()} &copy; HN TECHNOLOGY
      </div>
    </footer>
  );
};

export default Footer;
