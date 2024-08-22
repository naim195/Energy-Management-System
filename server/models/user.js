const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applianceNames = [
  "LED bulbs",
  "LED Tubes",
  "Celling Fans",
  "Movable Fans",
  "Lamps",
  "Computer/Laptops",
  "Televisions",
  "Audio Outputs",
  "Air Purifiers",
  "Air cooler",
  "Air Conditioners",
  "Iron",
  "Hair Dryer",
  "Vacuum Cleaner",
  "Refrigerator",
  "Blender/ Mixers",
  "Water Purifiers",
  "Electric Kettle",
  "Induction Cooker",
  "Toaster",
  "Microwave Oven",
  "Dish Washer",
  "Washing Machines",
  "Dryers",
  "Water Heater (Geyser)",
  "Room Heater",
  "Water Pump",
  "Miscellaneous",
];

// Appliance Schema
const appliancesSchema = new Schema({
  appliances: {
    type: [
      {
        name: String,
        power: {
          low: {
            rating: {
              type: Number,
              default: 0,
            },
            quantity: {
              type: Number,
              default: 0,
            },
            numberOfHoursUsed: {
              type: Number,
              default: 0,
            }
          },
          medium: {
            rating: {
              type: Number,
              default: 0,
            },
            quantity: {
              type: Number,
              default: 0,
            },
            numberOfHoursUsed: {
              type: Number,
              default: 0,
            }
          },
          high: {
            rating: {
              type: Number,
              default: 0,
            },
            quantity: {
              type: Number,
              default: 0,
            },
            numberOfHoursUsed: {
              type: Number,
              default: 0,
            }
          },
          other: {
            rating: {
              type: Number,
              default: 0,
            },
            quantity: {
              type: Number,
              default: 0,
            },
            numberOfHoursUsed: {
              type: Number,
              default: 0,
            }
          }
        },
      },
    ],
    default: applianceNames.map((name) => ({
      name,
      power: {
        low: {
          rating: 0,
          quantity: 0,
          numberOfHoursUsed: 0,
        },
        medium: {
          rating: 0,
          quantity: 0,
          numberOfHoursUsed: 0,
        },
        high: {
          rating: 0,
          quantity: 0,
          numberOfHoursUsed: 0,
        },
        other: {
          rating: 0,
          quantity: 0,
          numberOfHoursUsed: 0,
        }
      }
    })), // Predefine appliances
  },
});

// User Schema
const userSchema = new Schema({
  name: String,
  email: String,
  appliances: appliancesSchema,
});

module.exports = mongoose.model("User", userSchema);
