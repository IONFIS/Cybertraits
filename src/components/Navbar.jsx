"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 text-xl font-bold">
          <img src="/1.jpg" alt="logo" className="h-12" />
          {/* If you want text next to the logo, uncomment below */}
          {/* <span className="text-[#264269]">CYBERTRAITS</span> */}
        </a>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-[#264269]"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static bg-white w-full md:w-auto left-0 top-full md:bg-transparent md:shadow-none shadow-md transition-all`}
        >
          <a
            href="/"
            className="block px-4 py-2 text-[#4A7C3E] font-semibold hover:text-[#264269]"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-[#264269] hover:text-[#4A7C3E]"
          >
            About
          </a>
          <a
            href="/services"
            className="block px-4 py-2 text-[#264269] hover:text-[#4A7C3E]"
          >
            Services
          </a>

          {/* Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              className="flex items-center px-4 py-2 text-[#264269] hover:text-[#4A7C3E] w-full"
            >
              Courses
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
            <div
              className={`${
                pagesDropdownOpen ? "block" : "hidden"
              } md:group-hover:block absolute bg-white shadow-md rounded-md z-10 w-48 mt-1`}
            >
              <a
                href="/team"
                className="block px-4 py-2 text-[#264269] hover:bg-gray-100"
              >
                CEH v13
              </a>
              <a
                href="/testimonial"
                className="block px-4 py-2 text-[#264269] hover:bg-gray-100"
              >
                Digital Forensics
              </a>
            </div>
          </div>

          <a
            href="/contact"
            className="block px-4 py-2 text-[#264269] hover:text-[#4A7C3E]"
          >
            Contact
          </a>

          {/* Optional: Google Translate */}
          <div id="google_translate_element" className="px-4 py-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
