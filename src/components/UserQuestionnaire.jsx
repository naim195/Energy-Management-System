import { useState } from "react";
import { motion } from "framer-motion";
import CaseStudies from "./CaseStudies";

const MicrogridForm = () => {
  const [energySources, setEnergySources] = useState({
    solarPV: false,
    battery: false,
    dieselGenerator: false,
    powerGrid: false,
    localLoads: false,
  });
  const [useDiesel, setUseDiesel] = useState(null);
  const [hasCriticalLoad, setHasCriticalLoad] = useState(null);
  const [criticalLoad, setCriticalLoad] = useState("");
  const [hasNonCriticalLoad, setHasNonCriticalLoad] = useState(null);
  const [nonCriticalLoad, setNonCriticalLoad] = useState("");
  const [selectedOption, setSelectedOption] = useState("questionnaire");

  const handleEnergySourceChange = (source) => {
    setEnergySources((prev) => ({ ...prev, [source]: !prev[source] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      energySources,
      useDiesel,
      hasCriticalLoad,
      criticalLoad: hasCriticalLoad === "Yes" ? criticalLoad : null,
      hasNonCriticalLoad,
      nonCriticalLoad: hasNonCriticalLoad === "Yes" ? nonCriticalLoad : null,
    };
    console.log(formData);
    // handle form submission logic here
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="max-w mx-auto mt-10 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-lg">
      <div className="flex">
        {/* Left Section - Sidebar */}
        <div className="w-1/4 pr-6 border-r border-blue-200">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700">
            Options
          </h3>
          <ul className="space-y-2">
            <li>
              <button
                className={`w-full text-left p-2 rounded transition-all duration-300 ${
                  selectedOption === "questionnaire"
                    ? "bg-indigo-500 text-white"
                    : "hover:bg-indigo-100 text-indigo-600"
                }`}
                onClick={() => setSelectedOption("questionnaire")}
              >
                Questionnaire
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded transition-all duration-300 ${
                  selectedOption === "caseStudies"
                    ? "bg-indigo-500 text-white"
                    : "hover:bg-indigo-100 text-indigo-600"
                }`}
                onClick={() => setSelectedOption("caseStudies")}
              >
                Case Studies
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section - Main Content */}
        <div className="w-3/4 pl-6">
          <motion.h2
            className="text-3xl font-bold mb-6 text-center text-indigo-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Microgrid Configuration
          </motion.h2>

          {selectedOption === "questionnaire" && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <motion.div {...fadeInUp}>
                <label className="block font-semibold text-indigo-700 mb-2">
                  1. What energy sources does your microgrid have?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Solar PV",
                    "Battery",
                    "Diesel Generator",
                    "Power Grid",
                    "Local Loads",
                  ].map((source) => (
                    <label
                      key={source}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <input
                        type="checkbox"
                        checked={
                          energySources[source.toLowerCase().replace(" ", "")]
                        }
                        onChange={() =>
                          handleEnergySourceChange(
                            source.toLowerCase().replace(" ", ""),
                          )
                        }
                        className="form-checkbox h-5 w-5 text-indigo-600"
                      />
                      <span className="text-gray-700">{source}</span>
                    </label>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeInUp}>
                <label className="block font-semibold text-indigo-700 mb-2">
                  2. Is it ok to use Diesel Generator?
                </label>
                <div className="flex space-x-4">
                  {["Yes", "No"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <input
                        type="radio"
                        value={option}
                        name="useDiesel"
                        checked={useDiesel === option}
                        onChange={() => setUseDiesel(option)}
                        className="form-radio h-5 w-5 text-indigo-600"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeInUp}>
                <label className="block font-semibold text-indigo-700 mb-2">
                  3. Is there any critical load in your system?
                </label>
                <div className="flex space-x-4 mb-4">
                  {["Yes", "No"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <input
                        type="radio"
                        value={option}
                        name="hasCriticalLoad"
                        checked={hasCriticalLoad === option}
                        onChange={() => setHasCriticalLoad(option)}
                        className="form-radio h-5 w-5 text-indigo-600"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {hasCriticalLoad === "Yes" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <label className="block font-medium text-gray-700 mb-2">
                      Critical load (kW):
                    </label>
                    <input
                      type="number"
                      value={criticalLoad}
                      onChange={(e) => setCriticalLoad(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter critical load in kW"
                    />
                  </motion.div>
                )}
              </motion.div>

              <motion.div {...fadeInUp}>
                <label className="block font-semibold text-indigo-700 mb-2">
                  4. What is non-critical load demand?
                </label>
                <div className="flex space-x-4 mb-4">
                  {["Yes", "No"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <input
                        type="radio"
                        value={option}
                        name="hasNonCriticalLoad"
                        checked={hasNonCriticalLoad === option}
                        onChange={() => setHasNonCriticalLoad(option)}
                        className="form-radio h-5 w-5 text-indigo-600"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {hasNonCriticalLoad === "Yes" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <label className="block font-medium text-gray-700 mb-2">
                      Non-critical load (kW):
                    </label>
                    <input
                      type="number"
                      value={nonCriticalLoad}
                      onChange={(e) => setNonCriticalLoad(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter non-critical load in kW"
                    />
                  </motion.div>
                )}
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-md mt-6 hover:bg-indigo-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          )}

          {selectedOption === "caseStudies" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CaseStudies />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MicrogridForm;
