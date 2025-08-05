"use client";
import React, { useRef, useState } from "react";

const HeroWithForm = () => {
  const formRef = useRef(null);
  const nameInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const [popup, setPopup] = useState({ visible: false, message: "", type: "success" });

  const showPopup = (message, type = "success") => {
    setPopup({ visible: true, message, type });
    setTimeout(() => {
      setPopup({ visible: false, message: "", type: "success" });
    }, 4000);
  };

  const courses = [
    "Ethical Hacking Fundamentals",
    "Network Penetration Testing",
    "Web Application Pentesting",
    "API Security & Testing",
    "Mobile Application Pentesting",
    "Active Directory Attacks",
    "Cloud Security & Pentesting",
    "Blue Team SOC Analyst",
    "Digital Forensics & Incident Response",
    "Python for Beginners",
    "Full Stack Web Development",
    "Cybersecurity Job Guarantee Program",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessKey = "3621c1db-d920-4089-ad76-524ef329187b";

    const data = {
      access_key: accessKey,
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        showPopup("✅ Thanks for submitting! Our counsellor will contact you soon.", "success");
        setFormData({ name: "", phone: "", email: "", course: "" });
      } else {
        showPopup("❌ Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      showPopup("❌ An error occurred. Please try again later.", "error");
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-green-50 to-[#EAF1F8] py-12 px-4 md:px-16">
      {/* Popup Notification */}
      {popup.visible && (
        <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-md shadow-lg text-sm font-medium transition-all duration-300
          ${popup.type === "success" ? "bg-green-100 text-green-800 border border-green-300" : "bg-red-100 text-red-800 border border-red-300"}`}>
          {popup.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto md:flex md:items-start md:gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6 mb-12 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#264269] leading-tight">
            Secure Your Future in Cybersecurity & IT <br />
            <span className="text-[#4A7C3E]">With Cybertraits</span>
          </h1>
          <p className="text-lg text-gray-700">
            Join <strong>10,000+</strong> students learning with real-world tools and a job guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToForm}
              className="bg-[#4A7C3E] hover:bg-[#3A6332] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
            >
              Enroll Now
            </button>
            <a
              href="/"
              download
              className="bg-white text-[#4A7C3E] border border-[#4A7C3E] hover:bg-green-50 font-semibold py-3 px-6 rounded-lg shadow-md transition text-center"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div
          ref={formRef}
          className="flex-1 bg-white shadow-xl rounded-2xl p-8 border border-[#264269]/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#264269]">
            Get Free Career Counselling
          </h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value="3621c1db-d920-4089-ad76-524ef329187b" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "None" }} />

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                ref={nameInputRef}
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full h-10 px-4 py-2 border border-gray-300 text-neutral-800 rounded-md shadow-sm focus:ring-[#4A7C3E] focus:border-[#4A7C3E]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full h-10 px-4 py-2 border border-gray-300 text-neutral-800 rounded-md shadow-sm focus:ring-[#4A7C3E] focus:border-[#4A7C3E]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full h-10 px-4 py-2 border border-gray-300 text-neutral-800 rounded-md shadow-sm focus:ring-[#4A7C3E] focus:border-[#4A7C3E]"
              />
            </div>

            {/* Course Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border h-10 border-gray-300 text-neutral-800 rounded-md shadow-sm focus:ring-[#4A7C3E] focus:border-[#4A7C3E]"
              >
                <option value="" disabled>Select an option</option>
                {courses.map((course, idx) => (
                  <option key={idx} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#264269] hover:bg-[#1f3553] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
              >
                Submit & Get Free Counselling
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;

