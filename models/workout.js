const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseTracking = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter a type of Excercise!"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter the name of your excercise!" 
          },
          duration: {
            type: Number,
            trim: true,
            required: "Enter how long you worked out!"
          },
          weight: {
            type: Number,
            default: 0
          },
          sets: {
              type: Number,
              default:0
          },
          reps: {
              type: Number,
              default:0
          },
          distance: {
              type: Number,
              default:0
          }
        }
        ],
});
const Workout = mongoose.model("Workout", excerciseTracking);

module.exports = Workout;