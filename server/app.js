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

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend says hi!!");
});

// POST route to handle form submission
app.post("/submit", async (req, res) => {
  try {
    const { name, email, appliances, misc, choices } = req.body;

    
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Update the existing user with the new values
      existingUser.name = name;
      existingUser.appliances = appliances;
      existingUser.misc = misc;
      existingUser.choices = choices;

      await existingUser.save();
      res.status(200).json({ message: "User data updated successfully!" });
    } else {
      // Create a new user
      const newUser = new User({
        name,
        email,
        appliances,
        misc,
        choices, 
      });

      await newUser.save();
      res.status(201).json({ message: "New user created and data submitted successfully!" });
    }
  } catch (error) {
    console.error("Error saving data", error);
    res.status(500).json({ message: "Failed to submit data" });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
