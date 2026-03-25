const express = require("express");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
  origin: "https://finance-traker-app.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Routes
app.use("/api/v2/expense", expenseRoutes);

module.exports = app;
