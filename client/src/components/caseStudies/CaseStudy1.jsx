import { useContext, useState, useEffect } from "react";
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

  useEffect(() => {
    const savedResponse = localStorage.getItem("energyManagementResponse");
    if (savedResponse) {
      setResponse(JSON.parse(savedResponse));
    }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setOpen(false);

    try {
      const totalEnergyUsageNumber = parseFloat(totalEnergyUsageInput / 1000);

      const res = await axios.post(
        "https://python-api-orcin.vercel.app/solar-battery-calculation",
        {
          Total_energy_consumption: totalEnergyUsageNumber,
        },
      );

      localStorage.setItem(
        "energyManagementResponse",
        JSON.stringify(res.data),
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
    <div className="max-w-6xl mx-auto p-6 space-y-8">
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
                className="grow"
                required
              />{" "}
              Wh
            </label>
          </div>

          <div className="flex justify-center max-w-full">
            <button
              onClick={handleSubmit}
              className="btn bg-blue-300 text-lg max-w-2xl"
              disabled={loading}
            >
              {loading ? "Calculating..." : "Calculate"}
            </button>
          </div>
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
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Parameter</th>
                    <th className="px-4 py-2">Dual Mode (Rs)</th>
                    <th className="px-4 py-2">On-Grid (Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" px-4 py-2">Solar Panel Cost</td>
                    <td className=" px-4 py-2">
                      {response["Economic Analysis"]["Solar Panel Cost (Rs)"]}
                    </td>
                    <td className=" px-4 py-2">
                      {response["Economic Analysis"]["Solar Panel Cost (Rs)"]}
                    </td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">Battery Cost</td>
                    <td className=" px-4 py-2">
                      {response["Economic Analysis"]["Battery Cost (Rs)"]}
                    </td>
                    <td className=" px-4 py-2">0</td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">Inverter Cost</td>
                    <td className=" px-4 py-2">
                      {response["Economic Analysis"]["Inverter Cost (Rs)"]}
                    </td>
                    <td className=" px-4 py-2">
                      {response["Economic Analysis"]["Inverter Cost (Rs)"]}
                    </td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">DC-DC Converter Cost</td>
                    <td className=" px-4 py-2">
                      {
                        response["Economic Analysis"][
                          "DC-DC Converter Cost (Rs)"
                        ]
                      }
                    </td>
                    <td className=" px-4 py-2">0</td>
                  </tr>
                  <tr>
                    <td className=" px-4 py-2">Installation Cost</td>
                    <td className=" px-4 py-2">
                      {
                        response["Economic Analysis"][
                          "Installation Cost Dual Mode (Rs)"
                        ]
                      }
                    </td>
                    <td className=" px-4 py-2">
                      {
                        response["Economic Analysis"][
                          "Installation Cost On-Grid (Rs)"
                        ]
                      }
                    </td>
                  </tr>

                  <tr>
                    <td className=" px-4 py-2">Annual O&M Cost</td>
                    <td className=" px-4 py-2">
                      {
                        response["Economic Analysis"][
                          "Annual O&M Cost Dual Mode (Rs)"
                        ]
                      }
                    </td>
                    <td className=" px-4 py-2">
                      {
                        response["Economic Analysis"][
                          "Annual O&M Cost On-Grid (Rs)"
                        ]
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
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
              <div className="space-y-4 grid grid-cols-3 justify-center align-center gap-2">
                {[
                  {
                    key: "Daytime Outage Cost",
                  },
                  {
                    key: "Nighttime Outage Cost",
                  },
                  {
                    key: "On-Grid Daytime Outage Cost",
                  },
                ].map(({ key }) => (
                  <div
                    key={key}
                    className="space-y-2 flex flex-col justify-center align-center"
                  >
                    <h4 className="text-lg font-medium text-center">{key}</h4>
                    <img
                      src={`data:image/png;base64,${response["Plots"][key]}`}
                      alt={key}
                      className="w-full h-auto rounded-lg shadow-md"
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
                <p className="mb-2">
                  The simple payback period for the dual mode system is{" "}
                  {
                    response["Simple Payback Period"][
                      "Dual Mode System (years)"
                    ]
                  }{" "}
                  years
                </p>
                <p className="mb-2">
                  The simple payback period for the on-grid system is{" "}
                  {response["Simple Payback Period"]["On-Grid System (years)"]}{" "}
                  years
                </p>
                <div className="flex justify-center items-center">
                  <img
                    src={`data:image/png;base64,${response["Plots"]["Simple Payback Period Comparison"]}`}
                    alt="Simple Payback Period Comparison"
                    className="w-1/2 h-auto rounded-lg shadow-md"
                  />
                </div>
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
                <p className="mb-2">
                  The carbon emission for the dual mode system is{" "}
                  {response["Carbon Emission"]["Dual Mode System (Ton)"]} Ton
                </p>
                <p className="mb-2">
                  The carbon emission for the on-grid system is{" "}
                  {response["Carbon Emission"]["On-Grid System (Ton)"]} Ton
                </p>
                <div className="flex justify-center items-center">
                  <img
                    src={`data:image/png;base64,${response["Plots"]["Carbon Emission Comparison"]}`}
                    alt="Carbon Emission Comparison"
                    className="w-1/2 rounded-lg shadow-md"
                  />
                </div>
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
