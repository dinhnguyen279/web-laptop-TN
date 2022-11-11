import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#dce4f1] w-[100%] py-5 font-sans">
      <h1 className="text-lg pb-2  mb-3 md:mb-4 md:text-5xl text-center">
        TƯ VẤN MIỄN PHÍ
      </h1>
      <hr className="border-black border-2 m-auto w-14" />
      <div className="flex justify-center flex-col lg:flex-row container max-w-full ">
        <form className="p-4">
          <div className=" text-gray-400 flex flex-col lg:flex-row w-full lg:space-x-2 space-x-0 lg:space-y-0 space-y-2 mb-2">
            <div className="bg-[#d5dde9] h-9 border-[1px] rounded-3xl border-[#2a54a4] px-2 outline-none">
              <input
                type="text"
                name="Họ và Tên"
                id=""
                placeholder="Họ và Tên"
                className="bg-transparent h-9 px-2 border-none outline-none w-full"
              />
            </div>
            <div className="bg-[#d5dde9] h-9 border-[1px] rounded-3xl border-[#2a54a4] px-2 outline-none">
              <input
                type="text"
                name="Số Điện Thoại"
                id=""
                placeholder="Số Điện Thoại"
                className="bg-transparent h-9 px-2 border-none outline-none w-full"
              />
            </div>
            <div className="bg-[#d5dde9] h-9 border-[1px] rounded-3xl border-[#2a54a4] px-2 outline-none">
              <input
                type="text"
                name="Email"
                id=""
                placeholder="Email"
                className="bg-transparent h-9 px-2 border-none outline-none w-full"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span>
              <textarea
                name="your-message"
                aria-required={true}
                aria-invalid={false}
                cols={10}
                rows={10}
                className="px-2 pt-2 border-[1px] border-[#2a54a4] rounded-2xl outline-none w-full bg-[#d5dde9]"
                placeholder="Nội dung tư vấn"
              ></textarea>
            </span>
            <br />
            <input
              type="submit"
              value="Gửi yêu cầu"
              placeholder="Gửi yêu cầu"
              className="border-2 outline-none bg-[#2a54a4] rounded-3xl font-black uppercase px-3 py-2 text-white w-full m-auto md:w-2/5"
            />
          </div>
        </form>
        <div className="flex flex-col p-4">
          <p className="mb-3 text-lg">
            Bạn cần tư vấn về dòng laptop nào, hãy đặt câu hỏi với chuyên viên
            của chúng tôi.
          </p>
          <a
            href="tel:0829954124"
            target="_self"
            className="hover:no-underline text-center border-2 outline-none bg-[#2a54a4] rounded-3xl font-black uppercase px-3 py-2 text-white "
          >
            <FontAwesomeIcon icon={faPhone} /> LIÊN HỆ CHÚNG TÔI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
