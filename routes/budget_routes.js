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
      return res.status(400).json({
        errors: err,
      });
    }
    return res.json(data);
  });
});

// Fetch All Budget Documents
router.get("/fetch", (res) => {
    BudgetSchema.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        errors: err,
      });
    }
    return res.json(data);
  });
});

module.exports = router;