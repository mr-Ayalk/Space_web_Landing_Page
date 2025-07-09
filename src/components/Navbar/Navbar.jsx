import React from "react";
import Logo from "../../assets/logo-icon-light-transparent.png";
function Navbar() {
  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 blackdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="" className="size-10" />
            <span>Bamah Engineering</span>
          </div>

          <div className="text-white">
            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Galaxy</a>
              </li>
              <li>
                <a href="#">Satelite</a>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="text-white border-2 border-white px-3 py-1 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
