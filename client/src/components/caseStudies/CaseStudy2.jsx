import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const CaseStudy2 = () => {
  const [installedPower, setInstalledPower] = useState(0);
  const [panelAge, setPanelAge] = useState(0);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Retrieve the plot data from localStorage when the component mounts
    const savedPlot = localStorage.getItem("solarPanelPlot");
    if (savedPlot) {
      setResponse({ plot_image: savedPlot });
    }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setOpen(false);

    try {
      const installedPowerFloat = parseFloat(installedPower);
      const panelAgeNumber = parseInt(panelAge);
      const res = await axios.post(
        "https://python-api-orcin.vercel.app/solar-panel-degradation",
        {
          installed_power: installedPowerFloat,
          panel_age: panelAgeNumber,
        },
      );

      // Save the plot image data to localStorage
      localStorage.setItem("solarPanelPlot", res.data.plot_image);

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
            Aging Aware PV Digital Twins
          </h2>

          <div>
            <label
              className="mb-2 w-full input input-bordered flex items-center gap-2"
              htmlFor="energy-usage"
            >
              Installed power:
              <input
                type="number"
                id="energy-usage"
                value={installedPower}
                onChange={(e) => setInstalledPower(e.target.value)}
                className="grow"
                required
                min={0}
              />{" "}
              W
            </label>
          </div>

          <div>
            <label
              className="mb-2 w-full input input-bordered flex items-center gap-2"
              htmlFor="panel-age"
            >
              Panel Age:
              <input
                type="number"
                id="panel-age"
                value={panelAge}
                onChange={(e) => setPanelAge(e.target.value)}
                className="grow"
                required
                min={0}
              />{" "}
              Years
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
        <div className="card bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold mb-6 text-center">
              Solar Panel Degradation Plot
            </h2>
            <img
              src={`data:image/png;base64,${response.plot_image}`}
              alt="Solar Panel Degradation Plot"
              className="w-full h-auto"
            />
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

export default CaseStudy2;
