import { useState } from "react";
import PropTypes from "prop-types";

const Miscellaneous = ({ miscellaneousItems, setMiscellaneousItems }) => {
  const [inputValue, setInputValue] = useState("");

  // Handle the addition of a new miscellaneous item
  const addMiscellaneousItem = () => {
    if (inputValue.trim() === "") return; // Prevent adding empty items
    setMiscellaneousItems([
      ...miscellaneousItems,
      {
        name: inputValue,
        low: {
          rating: 0,
          number: 0,
          hoursUsed: 0,
          total: 0,
        },
        medium: {
          rating: 0,
          number: 0,
          hoursUsed: 0,
          total: 0,
        },
        high: {
          rating: 0,
          number: 0,
          hoursUsed: 0,
          total: 0,
        },
        other: {
          rating: 0,
          number: 0,
          hoursUsed: 0,
          total: 0,
        },
      },
    ]);
    setInputValue(""); // Clear the input field after adding
  };

  // Calculate total energy for a category
  const calculateTotalEnergy = (rating, number, hoursUsed) => {
    return rating * number * hoursUsed;
  };

  // Update the power, used, or hours state for a specific item
  const updateItem = (index, category, type, value) => {
    const newItems = [...miscellaneousItems];
    newItems[index][category][type] = value;

    // Update the total energy for this category
    newItems[index][category].total = calculateTotalEnergy(
      newItems[index][category].rating,
      newItems[index][category].number,
      newItems[index][category].hoursUsed,
    );

    setMiscellaneousItems(newItems);
  };

  return (
    <div className="p-4 bg-base-100 rounded-lg shadow-md">
      <div className="mb-4">
        {/* Input field for 'Miscellaneous' */}
        <div className="flex flex-col items-center">
          <label className="flex items-center gap-2 mb-2 w-full">
            <span className="mr-2">Enter Appliance Name:</span>
            <input
              type="text"
              className="input input-bordered w-full"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button
            type="button"
            className="btn btn-primary w-1/2 mt-2"
            onClick={addMiscellaneousItem}
            disabled={!inputValue.trim()}
          >
            Add Item
          </button>
        </div>

        {/* Display tables for all miscellaneous items */}
        {miscellaneousItems.map((item, index) => (
          <div key={index} className="mt-6">
            <h3 className="text-lg font-semibold text-primary mb-2">
              {item.name}
            </h3>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr className="text-primary-content">
                    <th></th>
                    <th>Low Power</th>
                    <th>Medium Power</th>
                    <th>High Power</th>
                    <th>Other Power</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover">
                    <th>Power Rating (W)</th>
                    <td>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="input input-bordered w-full"
                          min={0}
                          value={item.low.rating}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "low",
                              "rating",
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
                          value={item.medium.rating}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "medium",
                              "rating",
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
                          value={item.high.rating}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "high",
                              "rating",
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
                          value={item.other.rating}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "other",
                              "rating",
                              Number(e.target.value),
                            )
                          }
                        />
                        <span className="ml-2">W</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>
                      {`${item.name}${
                        item.name[item.name.length - 1] === "s" ? "" : "s"
                      }`}{" "}
                      Used
                    </th>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.low.number}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "low",
                            "number",
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
                        value={item.medium.number}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "medium",
                            "number",
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
                        value={item.high.number}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "high",
                            "number",
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
                        value={item.other.number}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "other",
                            "number",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>Hours Used</th>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        min={0}
                        value={item.low.hoursUsed}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "low",
                            "hoursUsed",
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
                        value={item.medium.hoursUsed}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "medium",
                            "hoursUsed",
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
                        value={item.high.hoursUsed}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "high",
                            "hoursUsed",
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
                        value={item.other.hoursUsed}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "other",
                            "hoursUsed",
                            Number(e.target.value),
                          )
                        }
                      />
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>Total Energy Used (Wh)</th>
                    <td>{item.low.total.toFixed(2)} Wh</td>
                    <td>{item.medium.total.toFixed(2)} Wh</td>
                    <td>{item.high.total.toFixed(2)} Wh</td>
                    <td>{item.other.total.toFixed(2)} Wh</td>
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
  miscellaneousItems: PropTypes.array,
  setMiscellaneousItems: PropTypes.func.isRequired, // Ensure that this function is passed from the parent
};
