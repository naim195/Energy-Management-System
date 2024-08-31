const CaseStudy3 = () => {
  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-primary">
        Energy Management System for Community Microgrid
      </h1>

      {/* Section 1: Village Details */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl text-primary">Village Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <ul className="list-disc list-inside space-y-2">
              <li>Village name — Katkenva, Motihari, Bihar</li>
              <li>Population — 2686 people, 512 Households</li>
              <li>Daily energy consumption — 13.01 kWh per household</li>
              <li>Daily Solar insolation available — 5.02 kWh</li>
            </ul>
            <div className="flex justify-center">
              <img
                src="/assets/CaseStudy3/village.jpg"
                alt="Village"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Technical Ratings */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl text-primary">
            Technical Ratings
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Solar panel rating — 1719.28 kW",
              "Battery storage energy — 5526.24 kWh",
              "Battery nominal voltage — 12 V",
              "Battery capacity — 460.52 kAh",
              "Inverter rating — 2149.10 kVA",
              "DC-DC converter — 2149.10 kW",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="badge badge-primary mr-3">{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 3: Economic Analysis */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl text-primary">
            Economic Analysis
          </h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Section</th>
                  <th className="text">Total Price ON-Grid (₹)</th>
                  <th className="text">Total Price Dual-Mode (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PV</td>
                  <td className="text">51,574,854.70</td>
                  <td className="text">51,574,854.70</td>
                </tr>
                <tr>
                  <td>Battery</td>
                  <td className="text">0</td>
                  <td className="text">46,052,029.94</td>
                </tr>
                <tr>
                  <td>Inverter</td>
                  <td className="text">17,192,774.21</td>
                  <td className="text">17,192,774.21</td>
                </tr>
                <tr>
                  <td>DC-DC converter</td>
                  <td className="text">0</td>
                  <td className="text">2,865,799.53</td>
                </tr>
                <tr>
                  <td>Installation (10%)</td>
                  <td className="text">5,157,485.47</td>
                  <td className="text">9,762,688.46</td>
                </tr>
                <tr>
                  <td>Annual interest rate</td>
                  <td className="text">10%</td>
                  <td className="text">10%</td>
                </tr>
                <tr>
                  <td>Annual O&M of PV and Battery (3%)</td>
                  <td className="text">1,547,245.64</td>
                  <td className="text">2,928,806.54</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 4: Cost of Energy and Grid Outage Effect */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl text-primary">
            Cost of Energy and Grid Outage Effect
          </h2>
          <p className="mb-4">
            The Cost of Energy is the average cost to produce one unit of
            electricity from this system.
          </p>
          <p className="mb-6">
            The installed Solar system is connected to the grid. When an outage
            happens, energy generation will be stopped. The amount of energy
            loss is related to grid outage time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="/assets/CaseStudy3/Cost of Energy Generation for Different DaytimeOutage Scenarios.png"
              alt="Daytime Outage Scenarios"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/assets/CaseStudy3/Cost of Energy Generation for Different NighttimeOutage Scenarios.png"
              alt="Nighttime Outage Scenarios"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/assets/CaseStudy3/Cost of Energy Generation for On-Grid in Different DaytimeOutage Scenarios.png"
              alt="On-Grid Daytime Outage Scenarios"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Section 5: Simple Payback Period */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="card-title text-2xl text-primary">
                Simple Payback Period
              </h2>
              <p>
                Simple payback period is the time it takes for an investment to
                generate an amount of money equal to the initial investment
                cost.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/CaseStudy3/Simple Payback Period Comparison.png"
                alt="Payback Period Comparison"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Environment Effect */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="card-title text-2xl text-primary">
                Environment Effect
              </h2>
              <p>
                Using renewable resources to generate energy will reduce fossil
                fuel burning for energy generation, ultimately saving carbon
                emissions.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/CaseStudy3/Carbon Emmission Comparison.png"
                alt="Carbon Emission Comparison"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy3;
