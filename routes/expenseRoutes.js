const express = require('express');
const expenseController = require('../controllers/expenseController');

const router = express.Router();

router
.get("/",expenseController.getAllExpense)
.post("/",expenseController.createExpense);

router
.put("/:id",expenseController.updateExpense)
.delete("/:id",expenseController.deleteExpense);

module.exports = router;