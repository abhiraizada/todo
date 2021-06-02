const express = require("express");
const app = express();
const connectDb = require("./db/conn");
const Todo = require("./model/TodoSchema.js");

//Connecting to DB
connectDb();

const PORT = 4000 || process.env.PORT;
app.use(express.json());

app.use("/api", require("./routes/taskRoutes"));

//Display 404 for Rest for the Routes
app.get("*", (req, res) => {
  res.status(400).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
