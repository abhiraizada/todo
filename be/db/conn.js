const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://<userid>:<password>@cluster0.kcoyy.mongodb.net/task?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("DB connected");
  } catch (error) {
    console.log(`Error in connecting db, Message: ${error}`);
  }
};

module.exports = connectDb;
