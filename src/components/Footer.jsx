import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#111111] text-white px-6 md:px-20 py-10">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <p className="text-left mb-2 md:mb-0 font-bold">
            Sign Up for more news and special Offers
          </p>
          <p className="text-left md:ml-auto font-bold text-[#888]">
            We love taking your calls
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex w-full md:w-1/2">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2text-[#999] w-full bg-[#444] m-0"
            />
            <button className="bg-white px-6 py-2 text-black transition m-0">
              Sign Up
            </button>
          </div>
          <h1 className="text-xl font-bold text-left md:text-right w-full md:w-auto">
            GoDaddy Guides
          </h1>
        </div>
      </div>

      <hr className="border-gray-700 mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        <ul>
          <li className="font-bold mb-2 text-sm">About GoDaddy</li>
          <li className="text-xs text-[#777] p-2 font-semibold">About Us</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Careers</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Press</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Blog</li>
        </ul>
<ul>
  <li className="font-bold p-2 text-sm">Help Center</li>
  <li className="text-xs text-[#777] p-2 font-semibold">Product 1</li>
  <li className="text-xs text-[#777] p-2 font-semibold">Product 2</li>
  <li className="text-xs text-[#777] p-2 font-semibold">Product 3</li>
  <li className="text-xs text-[#777] p-2 font-semibold">Product 4</li>
</ul>
  

        <ul>
          <li className="font-bold mb-2 text-sm">Resources</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Help Center</li>
          <li className="text-xs text-[#777] p-2 font-semibold">FAQ</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Contact</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Live Chat</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Help Center</li>
          <li className="text-xs text-[#777] p-2 font-semibold">FAQ</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Contact</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Live Chat</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Help Center</li>
          <li className="text-xs text-[#777] p-2 font-semibold">FAQ</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Contact</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Live Chat</li>
        </ul>

        <ul>
          <li className="font-bold mb-2 text-sm">Partner Program</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Privacy Policy</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Terms of Service</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Cookie Policy</li>
      
        </ul>

        <ul>
          <li className="font-bold mb-2 text-sm">Accounts</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Facebook</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Twitter</li>
          <li className="text-xs text-[#777] p-2 font-semibold">Instagram</li>
          <li className="text-xs text-[#777] p-2 font-semibold">LinkedIn</li>
        </ul>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-[#777] text-center md:text-left">
          © 2026 YourCompany. All rights reserved.
        </div>

        <div className="flex gap-4 text-white text-xl">
          <FaFacebook />
          <FaSquareXTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
