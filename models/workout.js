const mongoose = require("mongoose");
const Exercise = require("./exercise");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: true
  },
  exercises: {
    type: [Exercise],
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;