import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-gray-300 pt-10 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info with Logo */}
          <div className="flex flex-col items-start">
            <img
              src="\1.jpg" // ✅ Replace with your actual logo path
              alt="./1.jpg"
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-400">
              Cybertrait empowers professionals with top-notch cybersecurity
              training for real-world success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-[#4A7C3E] transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#4A7C3E] transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#4A7C3E] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#4A7C3E] transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#4A7C3E] transition">FAQs & Help</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <p className="flex items-center mb-2">
              <MapPin className="w-4 h-4 mr-2 text-[#4A7C3E]" />
              123 Street, Bangalore, Karnataka
            </p>
            <p className="flex items-center mb-2">
              <Phone className="w-4 h-4 mr-2 text-[#4A7C3E]" />
              +91 8683045908
            </p>
            <p className="flex items-center mb-4">
              <Mail className="w-4 h-4 mr-2 text-[#4A7C3E]" />
              support@cybertrait.com
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-[#4A7C3E] transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-[#4A7C3E] transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-[#4A7C3E] transition">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-[#4A7C3E] transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Subscribe to our Newsletter</h4>
            <p className="text-sm mb-4">
              Join our growing community for insights, updates, and more.
            </p>
            <form className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 px-4 rounded text-black pr-32 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute top-1 right-1 bottom-1 bg-[#4A7C3E] text-white px-4 py-2 rounded hover:bg-[#3A642F] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <a href="/" className="text-[#4A7C3E] hover:underline font-semibold">
          Cybertrait
        </a>{" "}
        — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
