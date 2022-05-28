const pool = require("../db");

const getAllTasks = async (req, res, next) => {
  try {
    // throw new Error("Error al obtener las tareas");
    const result = await pool.query("SELECT * FROM task");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    // throw new Error("Error al obtener la tarea");
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "Task not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const postTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    // throw new Error("Error al crear la tarea");
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: "Error al crear la tarea" });
    res.status(500);
  }
};

const putTask = async (req, res, next) => {
  try {
    // throw new Error("Error al actualizar la tarea");
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await pool.query(
      "  UPDATE task SET title=$1, description=$2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Task not founded" });
    }
    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    // throw new Error("Error al eliminar la tarea")
    const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
};
