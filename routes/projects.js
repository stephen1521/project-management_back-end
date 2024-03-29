const express = require("express");
const router = express.Router();
const projectController = require('../controllers/projectsController');

router.get('/all', projectController.getAllProjects);
router.post('/createProject/:id', projectController.createProject);
router.post('/createTask/:projectId/:userId', projectController.createTask);
router.post('/updateProject/:id', projectController.updateProject);
router.put('/updateTask/:projectId/:taskId', projectController.updateTask);
router.get('/userProjects/:id', projectController.getUserProjects);
router.get('/allTasks/:id', projectController.getAllTasks);
router.delete('/deleteTask/:projectId/:taskId', projectController.deleteTask);

module.exports = router;