const router = require("express").Router();
const Todo = require("../model/TodoSchema.js");

//Get :api/tasks All tasks
router.get("/tasks", async (req, res) => {
  try {
    const allTodoTasks = await Todo.find();
    res.status(200).json(allTodoTasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

//Post api/addtask
router.post("/addtask", async (req, res) => {
  try {
    const { description } = req.body;
    console.log("inside");
    console.log(req.body);
    const newTask = new Todo(req.body);
    await newTask.save();
    res.status(200).json("Task added successfully");
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//Put api/edittask/:id
router.put("/edittask/:id", async (req, res) => {
  try {
    const { description } = req.body;
    const task = await Todo.findById(req.params.id);
    task.description = description;
    await task.save();
    res.status(200).json("Task Edited successfully");
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

//Delete api/deletetask/:id
router.delete("/deletetask/:id", async (req, res) => {
  try {
    const task = await Todo.findById(req.params.id);

    if (!task) {
      res.status(404).json({ msg: "Task does not exist" });
    }

    await task.remove();
    res.json({ msg: "Task Removed" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
