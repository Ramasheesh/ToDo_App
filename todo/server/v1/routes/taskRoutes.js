const express = require("express");
const Task = require("../controllers/taskController");
// const { authenticate } = require("../../middlewares/authMiddleware");

const router = express.Router();

// Middleware to protect routes
// router.use(authenticate);

// Create a new task
router.post("/create", Task.createTask);

// Get all tasks for a user
router.get("/", Task.getTasks);

// Update a task
router.put("/update/:id", Task.updateTask);

// Delete a task
router.delete("/delete/:id", Task.deleteTask);

module.exports = router;
