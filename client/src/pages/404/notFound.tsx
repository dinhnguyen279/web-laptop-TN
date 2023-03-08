import React from "react";
import "./notFound.css";
const notFound = () => {
  return (
    <section className="page_404 mt-20 mx-auto w-[100%]">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-sm-offset-1 text-center">
              <div className="four_zero_four_bg"></div>
              <div className="contant_box_404">
                <h3 className="h2">Có vẻ bạn đang đi lạc</h3>
                <p>Trang bạn tìm kiếm không có sẵn!</p>
                <div className="btn-transition md:w-1/4 w-full">
                  <a href="/" className="link_404 btn-transition-child">
                    Trang Chủ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default notFound;
