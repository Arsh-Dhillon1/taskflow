const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, taskController.createTask);
router.get('/:projectId', protect, taskController.getTasks);
router.put('/:taskId', protect, taskController.updateTask);

module.exports = router;