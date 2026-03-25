require("dotenv").config();

const app = require("./app");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// DB Connection
connectDB();

// PORT
const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  server.close(() => {
    console.log("Server stopped");
    process.exit(0);
  });
});