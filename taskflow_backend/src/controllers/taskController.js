const taskService = require('../services/taskService');

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(
      req.body,
      req.user._id
    );
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getProjectTasks(
      req.params.projectId,
      req.user._id
    );
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(
      req.params.taskId,
      req.body,
      req.user._id
    );
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask
};