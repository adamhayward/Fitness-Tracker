// creating/exporting schema model for a "Reistance" exercise
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
