// creating/exporting schema model for a "Reistance" exercise
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema to be referenced 
const ExerciseSchema = new Schema({
  type: {
    type: String,
    required: "Type is required",
  },
  name: {
    type: String,
    required: "Type is required",
  },
  durration: {
      type:Number,
      durration: Number,
  },
  distance: Number,
  weight: Number,
  sets: Number,
  reps: Number,
});

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercise: [ExerciseSchema]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

