import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
function Nav() {
  return (
    <div>
      <div className=" px-13 py-3 bg-black">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div class="flex justify-center">
              <img
                src="/src/assets/download.png"
                alt="logo"
                class="h-11 w-auto"
              />
            </div>

            <ul className="hidden md:flex space-x-6 text-white text-sm font-bold">
              <li>Domain Names</li>
              <li>Website & Hosting</li>
              <li>Commerce</li>
              <li>Email & Marketing</li>
              <li>Expert Services</li>
              <li>More</li>
            </ul>
          </div>

          <div className="hidden md:flex space-x-6 text-white text-sm font-semibold">
            <h4>Contact Us</h4>
            <h4>Help</h4>
             
            <div className="flex items-center space-x-1 cursor-pointer">
              <h4>Sign In</h4>
              <FaAngleDown className="text-sm" />
            </div>

            <LuShoppingCart className="text-2xl font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
