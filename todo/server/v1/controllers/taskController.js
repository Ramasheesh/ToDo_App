const Task = require("../../models/taskModel");

// Create a new task
const createTask = async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;

  try {
    const task = await Task.create({
      // user: req.user.id,
      title,
      description,
      status,
      priority,
      dueDate,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    // console.log('tasks: ', tasks);

    res.json(tasks);
  } catch (error) {
    // console.log('error: ', error);
    res.status(400).json({ error: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  const taskId= req.params.id; 
  const update = req.body;
  try {
    const task = await Task.findByIdAndUpdate(taskId,
        { ...update},//or write update only
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params.id;
  // const { id } = req.body;
  try {
    const task = await Task.findOneAndDelete(id);
    // console.log("task: ", task);
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
