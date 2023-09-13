import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLongArrowAltRight,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1A1A1A] dark:bg-gray-900 py-10 px-3">
        <div className="container mx-auto flex flex-col space-y-16">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-y-5">
            <div className="flex flex-col space-y-3 md:col-span-1 col-span-4">
              <h1 className="max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-4xl dark:text-white text-white">
                ChefOnline
              </h1>
              <p className="text-[#6c757d]">
                Best Software Development Company To Architect The Dream For
                Next Generation.
              </p>
              <div className="flex space-x-5">
                <div className="">
                  <h4 className="text-[25px] text-[#ffffff]">10000+</h4>
                  <p className="text-[#6c757d]">items sold</p>
                </div>
                <div className="">
                  <h4 className="text-[25px] text-[#ffffff]">40+</h4>
                  <p className="text-[#6c757d]">Products</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <span className="bg-[#252525] h-[50px] w-[50px] flex justify-center items-center">
                  <FaFacebookF size={18} color="#fff" />
                </span>
                <span className="bg-[#252525] h-[50px] w-[50px] flex justify-center items-center">
                  <FaPinterest size={18} color="#fff" />
                </span>
                <span className="bg-[#252525] h-[50px] w-[50px] flex justify-center items-center">
                  <FaLinkedinIn size={18} color="#fff" />
                </span>
                <span className="bg-[#252525] h-[50px] w-[50px] flex justify-center items-center">
                  <FaYoutube size={18} color="#fff" />
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="">
                <h4 className="text-[#fff] text-[20px]">Address</h4>
              </div>
              <div className="">
                <p className="text-[#6c757d]">
                  B-25, Mannan Plaza, 4th Floor Khilkhet, Dhaka-1229, Bangladesh
                </p>
              </div>
              <div className="">
                <p className="text-[#6c757d] font-bold">Email:</p>
              </div>
              <div>
                <p className="text-[#6c757d]">business@bdtask.com</p>
                <p className="text-[#6c757d]">info@bdtask.com</p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="">
                <h4 className="text-[#fff] text-[20px]">Phone</h4>
              </div>
              <div className="">
                <p className="text-[#6c757d] font-bold">Service:</p>
              </div>
              <div>
                <p className="text-[#6c757d]">+880-183-070-1422</p>
                <p className="text-[#6c757d]">+880-183-070-1422</p>
                <p className="text-[#6c757d]">+880-183-070-1422</p>
              </div>
              <div className="">
                <p className="text-[#6c757d] font-bold">Office Reception:</p>
              </div>
              <div>
                <p className="text-[#6c757d]">+880-183-070-1422</p>
              </div>
            </div>
          </div>
          <hr className="border-[#323233] border-[]" />
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <div className="">
                <h4 className="text-[#fff] text-[20px]">Disclaimer</h4>
              </div>
              <div className="flex flex-col space-y-3">
                <p className="text-[#6c757d]">
                  © 2023 bdtask. All Rights Reserved.
                </p>
              </div>
              <div>
                <p className="text-[#6c757d]">
                  Here all software, apps, themes, plugins, are our own
                  property. Therefore copying or reselling is strictly
                  prohibited.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="">
                <h4 className="text-[#fff] text-[20px]">Useful Links</h4>
              </div>
              <div className="">
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Service
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Blog
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Service
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Blog
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Service
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="">
                <h4 className="text-[#fff] text-[20px]">Useful Links</h4>
              </div>
              <div className="">
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Service
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Blog
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Service
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Blog
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Service
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="">
                <h4 className="text-[#fff] text-[20px]">Useful Links</h4>
              </div>
              <div className="">
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Service
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Blog
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Service
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Blog
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Service
                </Link>
                <Link to="#" className="text-[#6c757d] flex items-center">
                  <FaLongArrowAltRight className="mr-2" />
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className="border-[#323233] border-[]" />
      <footer className="bg-[#1A1A1A] dark:bg-gray-900 py-5 px-3">
        <div className="container mx-auto flex flex-col space-y-16">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-y-5">
            <div className="flex flex-wrap space-x-3 items-center md:justify-start justify-center">
              <img
                src="https://www.bdtask.com/asset/img/certificate/iso.png"
                alt=""
                className="w-[100px]"
              />
              <img
                src="https://www.bdtask.com/asset/img/certificate/basis.png"
                alt=""
                className="w-[100px]"
              />
              <img
                src="https://www.bdtask.com/asset/img/certificate/bacco-white.png"
                alt=""
                className="w-[100px]"
              />
              <img
                src="https://www.bdtask.com/asset/img/certificate/envato-white.png"
                alt=""
                className="w-[100px]"
              />
            </div>
            <div className="flex flex-wrap space-x-3 md:justify-end justify-center items-center space-y-3">
              <p className="text-[#6c757d] md:w-auto w-full md:text-left text-center">
                Pay with
              </p>
              <img
                src="https://www.bdtask.com/asset/img/payment/1.webp"
                alt=""
                className="w-[50px]"
              />
              <img
                src="https://www.bdtask.com/asset/img/payment/2.webp"
                alt=""
                className="w-[50px]"
              />
              <img
                src="https://www.bdtask.com/asset/img/payment/3.webp"
                alt=""
                className="w-[50px]"
              />
              <img
                src="https://www.bdtask.com/asset/img/payment/4.webp"
                alt=""
                className="w-[50px]"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
