require("dotenv").config();
const express = require("express");

const app = express();

const db = require("./db");

app.get("/clientes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(db.selectCustomer(id));
});

app.get("/clientes", (req, res) => {
  res.json(db.selectCustomers());
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(process.env.PORT, () => {
  console.log("App is running!");
});
