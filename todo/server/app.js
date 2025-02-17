require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const DB = require("./config/dbConnection");
const cors = require("cors");

// const authRoutes = require("./v1/routes/authRoutes");
const taskRoutes = require("./v1/routes/taskRoutes");

DB();
app.use(cors());
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
