const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }, // Reference to the user
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now }
});
taskSchema.methods.toJSON = function () {
  const task = this.toObject();
  task.dueDate = task.dueDate ? task.dueDate.toLocaleDateString("en-GB") : null;
  task.createdAt = task.createdAt ? task.createdAt.toLocaleDateString("en-GB") : null;
  return task;
};
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
