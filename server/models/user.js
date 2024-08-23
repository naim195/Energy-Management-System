const mongoose = require("mongoose");

const energySchema = new mongoose.Schema({
  low: Number,
  medium: Number,
  high: Number,
  other: Number,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  appliances: {
    type: Map,
    of: energySchema,
    required: true,
  },
  misc: energySchema,
  totalEnergyConsumption: energySchema,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
