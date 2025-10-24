# Energy Management System (EMS)

[Visit the website](https://vidyutai.in/)

## Project Overview

This project is a full-stack web application developed as part of a project course under **Prof. Pallavi Bharadwaj** at IIT Gandhinagar (Aug 2024 - Nov 2024). The system aims to help users analyze and manage their household energy consumption, providing insights and potential savings.


---

## Key Features

* **Full-Stack Development**: Built a comprehensive web application analyzing energy consumption for over **25+ household appliances**.
* **Interactive Energy Auditing**: Features an interactive front-end allowing users to input detailed appliance data (power ratings, usage hours, quantities). Based on this, it generates a personalized energy audit and estimates potential savings. 
* **Backend & Database Management**: Implemented a robust backend using Node.js and Express.js, featuring a RESTful API. It connects to a MongoDB database using Mongoose schemas for efficient management of user profiles and appliance data.
* **Data Visualization**: Includes visualizations for power flow, energy consumption comparisons (conventional vs. optimized), cost breakdown, and carbon emissions.
* **Case Studies**: Presents different case studies, including customizing EMS based on user input, analyzing PV panel degradation, EMS for a community microgrid, and peak demand forecasting.

---

## Technologies Used 💻

* **Frontend**: React, Tailwind CSS, DaisyUI, Axios, Framer Motion, Lucide Icons, Headless UI, Material UI
* **Backend**: Node.js, Express.js
* **Database**: MongoDB, Mongoose
* **Deployment**: Vercel (likely, based on `vercel.json` files)

---

## Project Structure

* `/client`: Contains the React frontend application.
* `/server`: Contains the Node.js/Express.js backend application and MongoDB models.

---

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/naim195/Energy-Management-System.git](https://github.com/naim195/Energy-Management-System.git)
    cd Energy-Management-System
    ```

2.  **Set up the Backend:**
    * Navigate to the server directory: `cd server`
    * Install dependencies: `npm install`
    * Create a `.env` file based on `.env.example` (if provided) and add your MongoDB connection string (`DB_URL`) and any other required environment variables.
    * Start the server: `npm run dev` (or `node app.js`)

3.  **Set up the Frontend:**
    * Navigate to the client directory: `cd ../client`
    * Install dependencies: `npm install`
    * Create a `.env` file and add the backend URL if needed (e.g., `VITE_BACKEND_URL=http://localhost:3000`).
    * Start the client: `npm run dev`

4.  **Access the Application:**
    Open your browser and navigate to the address provided by the Vite development server (usually `http://localhost:5173`).

---

## Project Course Details

* **Institution**: IIT Gandhinagar
* **Professor**: Prof. Pallavi Bharadwaj
* **Duration**: Aug 2024 - Nov 2024
