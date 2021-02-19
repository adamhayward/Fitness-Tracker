// creating/exporting schema model for a "Cardio" exercise
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Exercise = require("./Exercise.js")

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercise: [ExerciseSchema]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
