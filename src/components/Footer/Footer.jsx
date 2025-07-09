import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";
function Footer() {
  return (
    <div className="bg-gray-800 text-white  px-1 mx-auto relative z-50">
      <section className="max-w-[1200px] mx-auto text-white px-5">
        <div className="grid md:grid-cols-3 py-5">
          {/* firist col */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p>
              Get Exclusive <span className="font-bold">Update</span>
              straight to your inbox
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                type="text"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                placeholder="Email"
              />
              <button className="primary-button">OK</button>
            </div>
          </div>

          {/* second col */}

          {/* Second col group */}
          <div className="col-span-2 md:pl-10">
            {/* Small screens: grid with 2 columns; Large: grid with 3 columns */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Quick Links 1 */}
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>

              {/* Quick Links 2 */}
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="py-8 px-4 col-span-2 lg:col-span-1">
                <h1 className="text-xl font-bold mb-3">Contact Us</h1>
                <div className="flex items-center gap-2">
                  <HiLocationMarker />
                  <p>Ethiopia, Addis Ababa</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdMessage />
                  <p>abc@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdCall />
                  <p>+251926184233</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom section */}

        <div className="hidden sm:block">
          <div className=" flex justify-between items-center py-6 border-t-2 border-gray-400">
            <span className="text-sm text-gray-400">
              copyright &copy; 2025 by Farez Engineering
            </span>
            <div className="flex items-center justify-center gap-4 pb-4">
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
            <span className="text-sm text-gray-400">
              <ul className="flex gap-3">
                <li>Privacy and Policy</li>
                <li>Terms & Condition</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
