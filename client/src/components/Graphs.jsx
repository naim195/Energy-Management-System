const Graphs = () => {
  return (
    <div className="container mx-auto p-4 max-w grid grid-cols-1 md:grid-cols-2 gap-8">
      

      {/* Power Flow GIF */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-800">
          Power Flow
        </h2>
        <div className="flex justify-center mb-6">
          <img
            id="gif3"
            src="/assets/load_animation_combined.gif"
            alt="Power Flow Animation"
          />
        </div>
        <div className="description text-gray-800 text-center max-w-3xl">
          <p className="text-sm">
            This animation provides insights into the power flow from each
            component in the system at different time intervals. It compares
            unoptimized (left) and optimized (right) power flows. Negative power
            flow indicates power being sold to the grid or used to charge the
            battery. The difference between the two plots is based on the cost
            associated with the power.
          </p>
        </div>
      </div>

      {/* Energy Consumption and Production Images */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
          Energy Consumption and Production
        </h2>
        <div className="flex gap-2">
          <div className="flex justify-center mb-6">
            <img
              id="pic2a"
              src="/assets/Total Energy Consumption and Generation Using Optimised EMS.png"
              alt="Total Energy Consumption"
            />
          </div>
          <div className="flex justify-center mb-6">
            <img
              id="pic2b"
              src="/assets/Total Energy Consumption and Generation Using Conventional EMS.png"
              alt="Total Energy Consumption"
            />
          </div>
        </div>
        <div className="description text-gray-800 text-center max-w-3xl mx-auto">
          <p className="text-sm">
            This image shows the total energy consumption and production of each
            component in the energy management system. It compares normal
            (unoptimized) operation with optimized operation. The optimization
            is done by the EMS device, which decides the power flow from each
            component depending on the associated cost. The difference between
            the two operations is the energy delivered to the grid, representing
            the profit made by the system.
          </p>
        </div>
      </div>

      {/* Cost Breakdown GIF */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 to-red-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-800">
          Cost Breakdown
        </h2>
        <div className="flex justify-center mb-6">
          <video src="/assets/1440_Grid_price.mp4" autoPlay loop />
        </div>
        <div className="description text-gray-800 text-center max-w-3xl mx-auto">
          <p className="text-sm">
            This animation shows the cost breakdown of different energy sources,
            comparing unoptimized (left) and optimized (right) scenarios. It
            provides insights into the most cost-effective options. Negative
            cost indicates power being sold to the grid or used to charge the
            battery.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-800">
          Carbon Emission Comparison
        </h2>
        <video src="/assets/all_CO2_Emissions.mp4" autoPlay loop />
      </div>
    </div>
  );
};

export default Graphs;
