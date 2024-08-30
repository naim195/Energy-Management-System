import { useState } from "react";
import CaseStudy1 from "./caseStudies/CaseStudy1";
import CaseStudy2 from "./caseStudies/CaseStudy2";
import TechnoAnalysis from "./caseStudies/TechnoAnalysis";

const CaseStudies = () => {
  const [activeSection, setActiveSection] = useState("Case Study 1");

  return (
    <div className="p-6">
      <div className="flex justify-center mb-6">
        <button
          className={`mx-2 px-4 py-2 rounded-lg ${
            activeSection === "Case Study 1"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("Case Study 1")}
        >
          Case Study 1
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-lg ${
            activeSection === "Case Study 2"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("Case Study 2")}
        >
          Case Study 2
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-lg ${
            activeSection === "Techno Analysis"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("Techno Analysis")}
        >
          Techno-economic Analysis
        </button>
      </div>
      <div className="border p-6 rounded-lg bg-white shadow-md bg-gradient-to-r from-blue-100 to-green-100">
        {activeSection === "Case Study 1" && <CaseStudy1 />}
        {activeSection === "Case Study 2" && <CaseStudy2 />}
        {activeSection === "Techno Analysis" && <TechnoAnalysis />}
      </div>
    </div>
  );
};
export default CaseStudies;
