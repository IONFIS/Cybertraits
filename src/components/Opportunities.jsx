"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ShieldCheck,
  Bug,
  Network,
  Cloud,
  Lock,
  Activity,
} from "lucide-react";

const jobs = [
  {
    title: "SOC Analyst",
    description:
      "Monitor, detect, and respond to security threats in real-time environments using SIEM tools.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    companies: ["EY", "TCS", "Wipro"],
  },
  {
    title: "Penetration Tester",
    description:
      "Conduct authorized simulated attacks to evaluate system security and report vulnerabilities.",
    icon: <Bug className="w-6 h-6 text-red-500" />,
    companies: ["Deloitte", "Accenture", "Bugcrowd"],
  },
  {
    title: "Cybersecurity Analyst",
    description:
      "Analyze security trends, investigate alerts, and assist with threat mitigation.",
    icon: <Activity className="w-6 h-6 text-green-600" />,
    companies: ["Infosys", "Capgemini", "IBM"],
  },
  {
    title: "Cloud Security Engineer",
    description:
      "Implement secure configurations, monitor cloud environments, and enforce compliance.",
    icon: <Cloud className="w-6 h-6 text-purple-600" />,
    companies: ["Microsoft", "Amazon", "Google Cloud"],
  },
  {
    title: "Security Consultant",
    description:
      "Provide strategic guidance and technical assessments to improve security posture.",
    icon: <Briefcase className="w-6 h-6 text-yellow-600" />,
    companies: ["KPMG", "Palo Alto", "PwC"],
  },
  {
    title: "Network Security Engineer",
    description:
      "Design and enforce secure networking frameworks and firewalls for large-scale infrastructures.",
    icon: <Network className="w-6 h-6 text-teal-600" />,
    companies: ["Cisco", "Check Point", "Fortinet"],
  },
  {
    title: "Application Security Engineer",
    description:
      "Embed security into DevOps, conduct code reviews, and prevent software vulnerabilities.",
    icon: <Lock className="w-6 h-6 text-pink-600" />,
    companies: ["Oracle", "Salesforce", "Zscaler"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const JobOpportunities = () => {
  return (
    <section className="bg-[#F9FAFB] py-16 px-4 sm:px-6 lg:px-10 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#264269] mb-4">
          Job Opportunities After Completing Our Courses
        </h2>
        <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
          Our career-focused programs unlock high-growth roles across the cybersecurity and tech landscape.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={idx}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-gradient-to-tr from-gray-100 to-gray-200 p-3 rounded-full shadow-inner">
                {job.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#264269]">
                {job.title}
              </h3>
            </div>

            <p className="text-sm text-gray-600 mb-4">{job.description}</p>

            <div className="text-xs text-gray-500 mt-auto">
              <span className="font-medium text-[#4A7C3E]">Hiring at: </span>
              {job.companies.join(", ")}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JobOpportunities;
