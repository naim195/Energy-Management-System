import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Miscellaneous = ({ setTotalMiscEnergyConsumption }) => {
  const [inputValue, setInputValue] = useState("");
  const [miscellaneousItems, setMiscellaneousItems] = useState([]);

  // Handle the addition of a new miscellaneous item
  const addMiscellaneousItem = () => {
    if (inputValue.trim() === "") return; // Prevent adding empty items
    setMiscellaneousItems([
      ...miscellaneousItems,
      {
        name: inputValue,
        power: { low: 0, medium: 0, high: 0, other: 0 },
        used: { low: 0, medium: 0, high: 0, other: 0 },
        hours: { low: 0, medium: 0, high: 0, other: 0 },
      },
    ]);
    setInputValue(""); // Clear the input field after adding
  };

  // Update the power, used, or hours state for a specific item
  const updateItem = (index, category, type, value) => {
    const newItems = [...miscellaneousItems];
    newItems[index][category][type] = value;
    setMiscellaneousItems(newItems);
  };

  // Calculate total energy for a category across all items
  const calculateTotalEnergy = (power, used, hours) => {
    return power * used * hours;
  };

  // Calculate total energy consumption for all miscellaneous items
  const calculateTotalMiscEnergy = () => {
    return miscellaneousItems.reduce(
      (totals, item) => {
        Object.keys(totals).forEach((key) => {
          totals[key] += calculateTotalEnergy(
            item.power[key],
            item.used[key],
            item.hours[key],
          );
        });
        return totals;
      },
      { low: 0, medium: 0, high: 0, other: 0 },
    );
  };

  useEffect(() => {
    // Calculate and set total energy consumption when miscellaneousItems change
    const totalMiscEnergyConsumption = calculateTotalMiscEnergy();
    setTotalMiscEnergyConsumption(totalMiscEnergyConsumption);
  }, [miscellaneousItems, setTotalMiscEnergyConsumption]);

  return (
    <div>
      <div>
        {/* Input field for 'Miscellaneous' */}
        <label className="input input-bordered flex items-center gap-2">
          <span className="mr-2">Enter Appliance Name:</span>
          <input
            type="text"
            className="grow"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={addMiscellaneousItem}
          disabled={!inputValue.trim()}
        >
          Add Item
        </button>

        {/* Display tables for all miscellaneous items */}
        {miscellaneousItems.map((item, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <div className="overflow-x-auto mt-2">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Low Power</th>
                    <th>Medium Power</th>
                    <th>High Power</th>
                    <th>Other Power</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Power Rating (W)</th>
                    <td>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="input input-bordered w-full"
                          min={0}
                          value={item.power.low}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "power",
                              "low",
                              Number(e.target.value),
                            )
                          }
                        />
                        <span className="ml-2">W</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="input input-bordered w-full"
                          min={0}
                          value={item.power.medium}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "power",
                              "medium",
                              Number(e.target.value),
                            )
                          }
                        />
                        <span className="ml-2">W</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="input input-bordered w-full"
                          min={0}
                          value={item.power.high}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "power",
                              "high",
                              Number(e.target.value),
                            )
                          }
                        />
                        <span className="ml-2">W</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="input input-bordered w-full"
                          min={0}
                          value={item.power.other}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "power",
                              "other",
                              Number(e.target.value),
                            )
                          }
                        />
                        <span className="ml-2">W</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      {`${item.name}${item.name[item.name.length - 1] === "s" ? "" : "s"}`}{" "}
                      Used
                    </th>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.used.low}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "used",
                            "low",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.used.medium}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "used",
                            "medium",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.used.high}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "used",
                            "high",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.used.other}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "used",
                            "other",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Hours Used</th>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.hours.low}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "hours",
                            "low",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.hours.medium}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "hours",
                            "medium",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.hours.high}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "hours",
                            "high",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.hours.other}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "hours",
                            "other",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Total Energy Used (Wh)</th>
                    <td>
                      {calculateTotalEnergy(
                        item.power.low,
                        item.used.low,
                        item.hours.low,
                      )}{" "}
                      Wh
                    </td>
                    <td>
                      {calculateTotalEnergy(
                        item.power.medium,
                        item.used.medium,
                        item.hours.medium,
                      )}{" "}
                      Wh
                    </td>
                    <td>
                      {calculateTotalEnergy(
                        item.power.high,
                        item.used.high,
                        item.hours.high,
                      )}{" "}
                      Wh
                    </td>
                    <td>
                      {calculateTotalEnergy(
                        item.power.other,
                        item.used.other,
                        item.hours.other,
                      )}{" "}
                      Wh
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Miscellaneous;

Miscellaneous.propTypes = {
  setTotalMiscEnergyConsumption: PropTypes.func.isRequired, // Ensure that this function is passed from the parent
};
