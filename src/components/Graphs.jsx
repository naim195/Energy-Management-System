const Graphs = () => {
    return (
      <div className="container mx-auto p-4 max-w-6xl">
        {/* Energy Consumption and Production Images */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-center">Energy Consumption and Production</h2>
          <div className="flex justify-center mb-6">
            <img
              id="pic2a"
              src="src/assets/Total_energy_consumption.png"
              alt="Total Energy Consumption"
              className="w-3/4 h-auto rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="description text-gray-800 text-center max-w-3xl mx-auto">
            <p className="text-sm">
              This image shows the total energy consumption and production of each component in the energy management system. It compares normal (unoptimized) operation with optimized operation. The optimization is done by the EMS device, which decides the power flow from each component depending on the associated cost. The difference between the two operations is the energy delivered to the grid, representing the profit made by the system.
            </p>
          </div>
        </div>
  
        {/* Power Flow GIF */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-center">Power Flow Animation</h2>
          <div className="flex justify-center mb-6">
            <img
              id="gif3"
              src="src/assets/load_animation_combined.gif"
              alt="Power Flow Animation"
              className="w-5/6 h-auto rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="description text-gray-800 text-center max-w-3xl mx-auto">
            <p className="text-sm">
              This animation provides insights into the power flow from each component in the system at different time intervals. It compares unoptimized (left) and optimized (right) power flows. Negative power flow indicates power being sold to the grid or used to charge the battery. The difference between the two plots is based on the cost associated with the power.
            </p>
          </div>
        </div>
  
        {/* Cost Breakdown GIF */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-center">Cost Breakdown Animation</h2>
          <div className="flex justify-center mb-6">
            <img
              id="gif4"
              src="src/assets/cost_animation_combined.gif"
              alt="Cost Breakdown Animation"
              className="w-5/6 h-auto rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="description text-gray-800 text-center max-w-3xl mx-auto">
            <p className="text-sm">
              This animation shows the cost breakdown of different energy sources, comparing unoptimized (left) and optimized (right) scenarios. It provides insights into the most cost-effective options. Negative cost indicates power being sold to the grid or used to charge the battery.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Graphs;