const express = require("express");
const router = express.Router();
const BudgetSchema = require("../models/budget_schema");

// Add New Budget Document
router.post("/add", (req, res) => {
  const budget = new BudgetSchema({
    title: req.body.title,
    budget: req.body.budget,
    color: req.body.color,
  });
  budget.save().then((data) => {
    if (!data) {
      res.status(400).send("Unable To Add New Budget Document");
    }
    res.json(data);
  })
  .catch((err)=>{
    res.send(err)
  });
});

// Fetch All Budget Documents
router.get("/fetch", (req, res) => {
    BudgetSchema.find().exec((err, data) => {
    if (err) {
      res.status(400).send("Unable To Fetch Budget Documents");
    }
    res.json(data);
  })
});

module.exports = router;