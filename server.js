const express = require("express");

const app = express();
const PORT = 4000;

// Middleware to parse JSON (optional but useful)
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// ----- Products Routes -----
app.get("/products", (req, res) => {
  res.send("Here is the list of all products.");
});

app.post("/products", (req, res) => {
  res.send("A new product has been added.");
});

// ----- Categories Routes -----
app.get("/categories", (req, res) => {
  res.send("Here is the list of all categories.");
});

app.post("/categories", (req, res) => {
  res.send("A new category has been created.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
