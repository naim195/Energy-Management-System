const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const mongoURL = process.env.DB_URL;

// Connect to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use(
  cors({
    origin: "https://smart-ems.vercel.app",
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("BAckend says hi!!");
});

// POST route to handle form submission
app.post("/submit", async (req, res) => {
  try {
    const { name, email, appliances, misc, totalEnergyConsumption } = req.body;

    const newUser = new User({
      name,
      email,
      appliances,
      misc,
      totalEnergyConsumption,
    });

    await newUser.save();

    res.status(201).json({ message: "Data submitted successfully!" });
  } catch (error) {
    console.error("Error saving data", error);
    res.status(500).json({ message: "Failed to submit data" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
