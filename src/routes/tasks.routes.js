const { Router } = require("express");
const {
  getAllTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
} = require("../controllers/tasks.controllers");

const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", postTask);
router.put("/tasks/:id", putTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
