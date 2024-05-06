import { Link } from "react-router-dom";
import Button from "./Button";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section className="gradient pt-20">
        <div className="container flex items-center lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full relative mx-auto">
            <div
              className="relative bg-no-repeat z-10"
              style={{
                backgroundImage: "url(/images/download.png)",
              }}
            >
              <img src="/images/frame1.png" alt="frame1" />
            </div>

            <div
              className="bg-no-repeat absolute -top-10 left-48 "
              style={{
                backgroundImage: "url(/images/download.png)",
              }}
            >
              <img
                src="/images/frame2.png"
                alt="frame2"
                className="h-[468px]"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative md:mt-0 mt-20">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="absolute left-0 top-8 h-[76px]"
            />
            <div className="relative pl-12">
              <img
                src="/images/line.png"
                alt="line"
                className="absolute -top-8 left-0"
              />
              <h1 className="font-semibold sm:text-4xl text-3xl">
                Download the <br /> <span className="text-primary">Medify</span>{" "}
                App
              </h1>

              <p className="font-bold text-[#414146] my-4">
                Get the link to download the app
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center h-12 bg-[#FAFBFE] border border-[#F0F0F0]">
                <div className="h-full w-16 flex items-center justify-center border-r border border-[#B4B4BE]/30 font-bold text-sm text-black">
                  +91
                </div>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="h-full text-sm placeholder:text-sm placeholder:text-[#B4B4BE] w-full outline-0 px-4"
                />
              </div>
              <Button label="Send SMS" onClick={() => {}} />
            </div>

            <div className="flex items-center sm:flex-row flex-col  gap-4 my-6">
              <img
                src="/images/google-play.png"
                alt="google-play"
                className="h-16"
              />
              <img
                src="/images/apple-store.png"
                alt="apple-store"
                className="h-16"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1B3C74] text-white py-10 z-10">
        <div className="container">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            <div className="flex sm:flex-col gap-8 min-[356px]:flex-row flex-col justify-between">
              <Link to="/">
                <img src="/images/logo.png" alt="logo" className="w-28" />
              </Link>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-primary"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-primary"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-primary"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-primary"
                >
                  <FaPinterestP size={20} />
                </a>
              </div>
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">About Us</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Our Pricing</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Our Gallery</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Appointment</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Privacy Policy</span>
              </li>
            </ul>

            <ul className="space-y-2">
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Orthology</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Neurology</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Dental Care</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Opthalmology</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Cardiology</span>
              </li>
            </ul>

            <ul className="space-y-2">
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">About Us</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Our Pricing</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Our Gallery</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Appointment</span>
              </li>
              <li className="flex items-center gap-1">
                <MdChevronRight size={24} />
                <span className="text-lg font-medium">Privacy Policy</span>
              </li>
            </ul>
          </div>

          <hr className="mt-12 opacity-40" />

          <p className="pt-8">Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
        </div>

        
      </footer>
    </>
  );
};

export default Footer;
