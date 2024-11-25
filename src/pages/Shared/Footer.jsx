import { BsLightningChargeFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 md:px-12 lg:px-24 bg-black text-white">
        <div className="container py-8 mx-auto">
          <div className="flex flex-col md:flex-row items-center text-center justify-between mb-6">
            <a className="text-xl font-bold mb-2 md:mb-0 flex items-center gap-1"><span><BsLightningChargeFill /></span>eLife</a>

            <div className="flex flex-wrap gap-8">
              <Link
                to="/"
                className="text-sm transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="text-sm transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Products
              </Link>

              <Link
                to="/services"
                className="text-sm transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Services
              </Link>

              <Link
                to="/about"
                className="text-sm transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                About
              </Link>
            </div>
          </div>
          <p className="max-w-[560px] text-gray-400 text-center md:text-left">
            eLife is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility we are open 7 days a week.
          </p>

          <div className="flex flex-col gap-3 items-center mt-8 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium text-gray-400 dark:text-gray-300">
              © Copyright 2021. All Rights Reserved.
            </p>

            <div className="flex gap-3">
              <FaFacebookSquare size={22}></FaFacebookSquare>
              <FaInstagram size={22}></FaInstagram>
              <FaTwitter size={22}></FaTwitter>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
