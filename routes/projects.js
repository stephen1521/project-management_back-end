const express = require("express");
const router = express.Router();
const projectController = require('../controllers/projectsController');

router.get('/all', projectController.getAllProjects);
router.post('/createProject', projectController.createProject);
router.post('/createTask/:id', projectController.createTask);
router.post('/updateProject/:id', projectController.updateProject);
router.post('/updateTask/:projectId/:taskId', projectController.updateTask);


module.exports = router;