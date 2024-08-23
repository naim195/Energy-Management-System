import { useState } from "react";
import IndividualHouse from "./IndividualHouse";

const UserQuestionnaire = () => {
  const [activeSection, setActiveSection] = useState("Individual House");

  return (
    <div className="p-6 bg-gradient-to-b from-blue-200 to-green-200">
      <div className="flex justify-center mb-6">
        <button
          className={`mx-2 px-4 py-2 rounded-lg ${
            activeSection === "Individual House"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("Individual House")}
        >
          Individual House
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-lg ${
            activeSection === "Apartments"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("Apartments")}
        >
          Apartments
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-lg ${
            activeSection === "Micro Industry"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("Micro Industry")}
        >
          Micro Industry
        </button>
      </div>

      <div className="border p-6 rounded-lg bg-white shadow-md">
        {activeSection === "Individual House" && <IndividualHouse />}
        {activeSection === "Apartments" && (
          <div className="max-w-3/4">
            <h2 className="text-xl font-semibold mb-4">Apartments</h2>
            <p>This section will be updated soon.</p>
          </div>
        )}
        {activeSection === "Micro Industry" && (
          <div className="max-w-3/4">
            <h2 className="text-xl font-semibold mb-4">Micro Industry</h2>
            <p>This section will be updated soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserQuestionnaire;
