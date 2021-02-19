const router = require("express").Router();
const db = require("../models");

router.post("/api/cardio", ({ body }, res) => {
  db.Cardio.create(body)
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/cardio", (req, res) => {
  db.Cardio.find({})
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;