const router = require("express").Router();
const db = require('../models')

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((workout) => {
        res.status(201).json(workout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", (req, res) => {

    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

});

module.exports = router;