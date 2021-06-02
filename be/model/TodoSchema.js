const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //   status: {
  //     type: String,
  //     required: true,
  //   },
});

const Todo = new mongoose.model("Todo", todoSchema);
module.exports = Todo;
