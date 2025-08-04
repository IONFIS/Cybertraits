"use client";
import React, { useState } from "react";

const HeroWithForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://cybertraits-psi.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert("Thanks! Our counsellor will contact you soon.");
        setFormData({ name: "", phone: "", email: "", course: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Server error. Please try again later.");
      console.error(err);
    }
  };
  
  

  return (
    <section className="bg-gradient-to-r from-green-50 to-[#EAF1F8] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto md:flex md:items-start md:gap-10">
        {/* Left: Hero Text + Actions */}
        <div className="flex-1 space-y-6 mb-12 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#264269] leading-tight">
            Secure Your Future in Cybersecurity & IT <br />
            <span className="text-[#4A7C3E]">With Cybertraits</span>
          </h1>
          <p className="text-lg text-gray-700">
            Join <strong>10,000+</strong> students learning with real-world tools and a job guarantee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#4A7C3E] hover:bg-[#3A6332] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
              Enroll Now
            </button>
            <a
              href="/brochure.pdf"
              download
              className="bg-white text-[#4A7C3E] border border-[#4A7C3E] hover:bg-green-50 font-semibold py-3 px-6 rounded-lg shadow-md transition text-center"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 bg-white shadow-xl rounded-2xl p-8 border border-[#264269]/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#264269]">
            Get Free Career Counselling
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="3621c1db-d920-4089-ad76-524ef329187b"></input>
          <input type="checkbox" name="botcheck" className="hidden" style={{display: 'None'}}></input>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full h-10 px-4 py-2 border border-gray-300 text-neutral-800 rounded-md shadow-sm focus:ring-[#4A7C3E] focus:border-[#4A7C3E]"
              />
            </div>

            {/* Phone */}
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

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border h-10 border-gray-300 text-neutral-800 rounded-md shadow-sm focus:ring-[#4A7C3E] focus:border-[#4A7C3E]"
              >
                <option value="" disabled selected>Select an option</option>
                {courses.map((course, idx) => (
                  <option key={idx} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
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

