import { useContext, useState } from "react";
import EnergyContext from "../../EnergyContext";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";

const CaseStudy1 = () => {
  const { totalEnergyUsage } = useContext(EnergyContext);
  const [totalEnergyUsageInput, setTotalEnergyUsageInput] =
    useState(totalEnergyUsage);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setOpen(false);

    try {
      const totalEnergyUsageNumber = parseFloat(totalEnergyUsageInput);

      const res = await axios.post(
        "https://python-api-orcin.vercel.app/solar-battery-calculation",
        {
          Total_energy_consumption: totalEnergyUsageNumber,
        },
      );
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-6 text-center">
            Customize your Energy Management System
          </h2>

          <div>
            <label
              className="mb-2 w-full input input-bordered flex items-center gap-2"
              htmlFor="energy-usage"
            >
              Your total energy usage is:
              <input
                type="number"
                id="energy-usage"
                value={totalEnergyUsageInput}
                onChange={(e) => setTotalEnergyUsageInput(e.target.value)}
                className=""
                required
              />{" "}
              Wh
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </div>
      </div>

      {response && (
        <div className="space-y-8">
          {/* Technical Analysis Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Technical Analysis
              </h3>
              <ul className="list-disc pl-6">
                {Object.entries(response["Technical Analysis"]).map(
                  ([key, value]) => (
                    <li key={key}>
                      {key}: {value}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Economic Analysis Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Economic Analysis
              </h3>
              <ul className="list-disc pl-6">
                {Object.entries(response["Economic Analysis"]).map(
                  ([key, value]) => (
                    <li key={key}>
                      {key}: {value}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Capital Cost & Annual Generation Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Capital Cost & Annual Generation
              </h3>
              <ul className="list-disc pl-6">
                {Object.entries(
                  response["Capital Cost & Annual Generation"],
                ).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cost of Energy and Grid Outage Effect Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Cost of Energy and Grid Outage Effect
              </h3>
              <p className="mb-4">
                The Cost of Energy is the average cost to produce one unit of
                electricity from this system. The installed Solar system is
                connected to the grid. When a grid outage happens, the energy
                generation will be stopped, and the amount of energy loss is
                related to grid outage time.
              </p>
              <div className="space-y-4">
                {[
                  "Daytime Outage Cost",
                  "Nighttime Outage Cost",
                  "On-Grid Daytime Outage Cost",
                ].map((key) => (
                  <div key={key} className="space-y-2">
                    <h4 className="text-lg font-medium">{key}</h4>
                    <img
                      src={`data:image/png;base64,${response["Plots"][key]}`}
                      alt={key}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Simple Payback Period Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Simple Payback Period
              </h3>
              <p className="mb-4">
                Simple payback period is the time it takes for an investment to
                generate an amount of money equal to the initial investment
                cost.
              </p>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">
                  Simple Payback Period Comparison
                </h4>
                <img
                  src={`data:image/png;base64,${response["Plots"]["Simple Payback Period Comparison"]}`}
                  alt="Simple Payback Period Comparison"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Environment Effect Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Environment Effect
              </h3>
              <p className="mb-4">
                Using renewable resources to generate energy will reduce fossil
                fuel burning for energy generation, ultimately saving carbon
                emissions.
              </p>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">
                  Carbon Emission Comparison
                </h4>
                <img
                  src={`data:image/png;base64,${response["Plots"]["Carbon Emission Comparison"]}`}
                  alt="Carbon Emission Comparison"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CaseStudy1;
