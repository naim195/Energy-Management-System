const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  appliances: {
    type: Map,
    of: {
      low: { rating: Number, number: Number, hoursUsed: Number, total: Number },
      medium: {
        rating: Number,
        number: Number,
        hoursUsed: Number,
        total: Number,
      },
      high: {
        rating: Number,
        number: Number,
        hoursUsed: Number,
        total: Number,
      },
      other: {
        rating: Number,
        number: Number,
        hoursUsed: Number,
        total: Number,
      },
    },
  },
  misc: [
    {
      name: String,
      low: { rating: Number, number: Number, hoursUsed: Number, total: Number },
      medium: {
        rating: Number,
        number: Number,
        hoursUsed: Number,
        total: Number,
      },
      high: {
        rating: Number,
        number: Number,
        hoursUsed: Number,
        total: Number,
      },
      other: {
        rating: Number,
        number: Number,
        hoursUsed: Number,
        total: Number,
      },
    },
  ],
  choices: {
    energySource: String,
    dieselUse: String,
    energyGoal: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
