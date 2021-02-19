// dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// sets up Express App
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(logger("dev"));
// Sets up Express to handle data parssing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static("public"));
// connecting to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));


// starts Express app
app.listen(PORT, () => {
  console.log(`App running on port: localhost:${PORT}!`);
});
