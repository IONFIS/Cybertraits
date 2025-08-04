"use client";
import React, { useState } from "react";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaShieldAlt,
  FaBug,
  FaLock,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";

// All Courses with Module Lists
const allCourses = [
  {
    id: 1,
    title: "Ethical Hacking Fundamentals",
    category: "Red Teaming",
    duration: "6 Weeks",
    level: "Beginner",
    price: "₹ 0",
    icon: <FaBug />,
    modules: [
      "Linux Basics",
      "Networking Fundamentals",
      "Footprinting & Recon",
      "Scanning & Enumeration",
      "Vulnerability Assessment",
    ],
  },
  {
    id: 2,
    title: "Network Penetration Testing",
    category: "Red Teaming",
    duration: "8 Weeks",
    level: "Advanced",
    price: "₹ 19,999",
    icon: <FaNetworkWired />,
    modules: [
      "Network Layers & Protocols",
      "Scanning & Mapping Networks",
      "Sniffing & MITM Attacks",
      "Firewall Evasion",
      "Privilege Escalation",
    ],
  },
  {
    id: 3,
    title: "Web Application Pentesting",
    category: "Red Teaming",
    duration: "6 Weeks",
    level: "Intermediate",
    price: "₹ 14,999",
    icon: <FaBug />,
    modules: [
      "OWASP Top 10",
      "Authentication & Sessions",
      "SQL Injection",
      "XSS & CSRF",
      "Report Writing",
    ],
  },
  {
    id: 4,
    title: "API Security & Testing",
    category: "Red Teaming",
    duration: "4 Weeks",
    level: "Intermediate",
    price: "₹ 9,999",
    icon: <FaBug />,
    modules: [
      "REST & SOAP Basics",
      "Authentication Flaws",
      "Common API Attacks",
      "Security Headers",
      "Burp Suite for APIs",
    ],
  },
  {
    id: 5,
    title: "Mobile Application Pentesting",
    category: "Red Teaming",
    duration: "5 Weeks",
    level: "Advanced",
    price: "₹ 12,999",
    icon: <FaBug />,
    modules: [
      "Android & iOS Basics",
      "Static & Dynamic Analysis",
      "Data Storage Issues",
      "Reverse Engineering",
      "Instrumentation Tools",
    ],
  },
  {
    id: 6,
    title: "Active Directory Attacks",
    category: "Red Teaming",
    duration: "4 Weeks",
    level: "Advanced",
    price: "₹ 17,999",
    icon: <FaBug />,
    modules: [
      "Windows Internals",
      "AD Enumeration",
      "Kerberoasting",
      "Pass-the-Hash",
      "Lateral Movement",
    ],
  },
  {
    id: 7,
    title: "Cloud Security & Pentesting",
    category: "Red Teaming",
    duration: "6 Weeks",
    level: "Advanced",
    price: "₹ 21,999",
    icon: <MdSecurity />,
    modules: [
      "Cloud Architecture",
      "IAM Misconfigurations",
      "S3 Bucket Attacks",
      "Azure Pentesting",
      "GCP Security",
    ],
  },
  {
    id: 8,
    title: "Blue Team SOC Analyst",
    category: "Blue Teaming",
    duration: "6 Weeks",
    level: "Intermediate",
    price: "₹ 15,999",
    icon: <RiShieldUserLine />,
    modules: [
      "SIEM Tools (Splunk, ELK)",
      "Log Analysis",
      "Threat Detection",
      "Incident Response",
      "SOC Reporting",
    ],
  },
  {
    id: 9,
    title: "Digital Forensics & Incident Response",
    category: "Blue Teaming",
    duration: "5 Weeks",
    level: "Advanced",
    price: "₹ 13,999",
    icon: <FaShieldAlt />,
    modules: [
      "Evidence Collection",
      "Disk & Memory Forensics",
      "Timeline Analysis",
      "Malware Triage",
      "Legal Considerations",
    ],
  },
  {
    id: 10,
    title: "Python for Beginners",
    category: "Programming",
    duration: "4 Weeks",
    level: "Beginner",
    price: "₹ 0",
    icon: <FaLaptopCode />,
    modules: [
      "Syntax & Variables",
      "Loops & Functions",
      "File Handling",
      "Object-Oriented Programming",
      "Mini Projects",
    ],
  },
  {
    id: 11,
    title: "Full Stack Web Development",
    category: "Programming",
    duration: "10 Weeks",
    level: "Intermediate",
    price: "₹ 0",
    icon: <FaLaptopCode />,
    modules: [
      "HTML/CSS/JS Basics",
      "React & Tailwind",
      "Node.js & Express",
      "MongoDB",
      "Capstone Project",
    ],
  },
  {
    id: 12,
    title: "Cybersecurity Job Guarantee Program",
    category: "Job Guarantee",
    duration: "12 Weeks",
    level: "Intermediate",
    price: "₹ 49,999",
    icon: <FaLock />,
    modules: [
      "Fundamentals of Security",
      "Hands-on Red/Blue Labs",
      "Resume & LinkedIn Optimization",
      "Mock Interviews",
      "Placement Assistance",
    ],
  },
];

const filters = ["All", "Job Guarantee", "Red Teaming", "Blue Teaming", "Programming"];

const InDemandCourses = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filteredCourses = allCourses.filter((course) => {
    const matchesFilter =
      selectedFilter === "All" || course.category === selectedFilter;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="bg-[#F2F6FA] py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#264269]">Our Most In-Demand Courses</h2>
          <p className="text-[#264269] mt-2">Explore by category or search by interest</p>
        </div>

        <div className="mb-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#4A7C3E]"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedFilter === filter
                  ? "bg-[#4A7C3E] text-white"
                  : "bg-white text-[#264269] border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow border p-6 hover:shadow-md transition"
              >
                <div className="text-[#4A7C3E] text-3xl mb-3">{course.icon}</div>
                <h3 className="text-lg font-semibold text-[#264269]">{course.title}</h3>
                <p className="text-sm text-gray-600">Duration: {course.duration}</p>
                <p className="text-sm text-gray-600 mb-1">Category: {course.category}</p>
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    course.level === "Beginner"
                      ? "bg-green-100 text-green-700"
                      : course.level === "Intermediate"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {course.level}
                </span>

                <p className="text-[#4A7C3E] text-lg font-bold mt-3">{course.price}</p>

                <div className="mt-4 flex flex-col gap-2">
                  <button
                    onClick={() =>
                      setExpanded(expanded === course.id ? null : course.id)
                    }
                    className="text-sm border border-[#4A7C3E] text-[#4A7C3E] py-2 rounded hover:bg-[#4A7C3E] hover:text-white transition"
                  >
                    {expanded === course.id ? "Hide Modules" : "View Modules"}
                  </button>
                  <button className="text-sm bg-[#264269] text-white py-2 rounded hover:bg-[#1E2D4D] transition">
                    Enroll Now
                  </button>
                </div>

                {expanded === course.id && (
                  <ul className="list-disc mt-4 ml-5 text-sm text-gray-700 space-y-1">
                    {course.modules.map((mod, idx) => (
                      <li key={idx}>{mod}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No courses found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default InDemandCourses;
