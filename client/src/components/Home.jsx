import { useState, useEffect } from "react";
import {
  ArrowBigDown,
  ArrowBigUp,
  Battery,
  Zap,
  Gauge,
  Sun,
  Grid,
  DollarSign,
  Lightbulb,
} from "lucide-react";
import PropTypes from "prop-types";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-200 to-green-200 min-h-screen flex flex-col items-center justify-center p-5">
      <div
        className={`flex flex-col md:flex-row gap-8 items-center justify-center transform ${animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="card w-full max-w-full bg-white shadow-xl rounded-xl">
          <div className="card-body">
            <h1 className="text-5xl font-extrabold text-blue-800 mb-8 text-center">
              Energy Management System (EMS)
            </h1>

            <div className="flex flex-col gap-8 items-center">
              {/* Video animations */}
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">
                    Power Flow
                  </h2>
                  <div className="relative pt-[75%] rounded-lg overflow-hidden shadow-xl border-4 ">
                    <video
                      src="/assets/Home/2nd_tab_big.mp4"
                      className="object-cover w-full h-full absolute top-10 right-10 scale-110 transform origin-center"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">
                    Island Mode Power Flow
                  </h2>
                  <div className="relative pt-[75%] rounded-lg overflow-hidden shadow-xl border-4 ">
                    <video
                      src="/assets/Home/Island_Mode_EMS_controled_power_flow_animation.mp4"
                      className="object-cover w-full h-full absolute top-0 left-0 scale-110"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                </div>
              </div>

              {/* Main paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-full">
                This animation demonstrates the flow of power in an Energy
                Management System (EMS). All the components in the EMS are
                connected to the EMS device, which decides the power flow from
                each component depending on availability and the cost associated
                with it. If the cost associated with the power is high, then the
                power flow will be from other available sources with low cost.
                The charge and discharge of the battery is also shown in the
                animation. The battery is charged when the cost of the power is
                low and discharged when the cost of the power is high. We can
                see that there are also power flows from Renewable and Diesel to
                the grid, which indicates that the power is being sold to the
                grid and making a profit.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-10">
              <div className="flex-1">
                <div className="card bg-blue-50 p-6 rounded-xl shadow-inner">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">
                    Key Features:
                  </h2>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <FeatureItem
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <div className="card bg-blue-50 p-6 rounded-xl shadow-inner h-full">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">
                    Power Flow Dynamics
                  </h2>
                  <ul className="space-y-3">
                    {powerFlowItems.map((item, index) => (
                      <PowerFlowItem
                        key={index}
                        icon={item.icon}
                        text={item.text}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Energy Optimization Strategy
              </h3>
              <p className="text-gray-700">
                The EMS continuously analyzes and optimizes power distribution,
                prioritizing renewable sources and stored energy when
                economically advantageous. This intelligent management extends
                to selling excess power back to the grid, creating a dynamic and
                profitable energy ecosystem.
              </p>
            </div>

            <div className="flex justify-center items-center space-x-6 mt-6 text-gray-600">
              <div className="flex items-center">
                <ArrowBigDown className="text-green-500 mr-2" size={24} />
                <span>Low Cost</span>
              </div>
              <div className="flex items-center">
                <ArrowBigUp className="text-red-500 mr-2" size={24} />
                <span>High Cost</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon: Icon, title, description }) => (
  <li className="flex items-start space-x-3 hover:bg-blue-100 p-2 rounded-lg">
    <div className="flex-shrink-0">
      <Icon className="text-blue-500" size={24} />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </li>
);

const PowerFlowItem = ({ icon: Icon, text }) => (
  <li className="flex items-center space-x-3 text-gray-700">
    <Icon className="text-blue-600" size={20} />
    <span>{text}</span>
  </li>
);

const features = [
  {
    icon: Zap,
    title: "Smart Power Routing",
    description: "Optimizes power flow based on availability and cost",
  },
  {
    icon: Battery,
    title: "Dynamic Storage Management",
    description:
      "Charges during low-cost periods, discharges when costs are high",
  },
  {
    icon: Sun,
    title: "Renewable Integration",
    description: "Prioritizes clean energy sources for sustainability",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Minimizes energy costs through intelligent decision-making",
  },
];

const powerFlowItems = [
  { icon: Grid, text: "EMS to Grid: Excess power sold for profit" },
  { icon: Sun, text: "Renewables to EMS: Clean energy prioritized" },
  { icon: Battery, text: "Battery to EMS: Discharge during peak demand" },
  { icon: Gauge, text: "Diesel to EMS: Backup power during emergencies" },
  {
    icon: Lightbulb,
    text: "EMS to Load: Efficient power distribution to devices",
  },
  { icon: ArrowBigDown, text: "EMS to Storage: Energy stored for future use" },
];

PowerFlowItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

FeatureItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Home;
