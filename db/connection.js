const mongoose = require("mongoose");

const coonectDb = (url) => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to the Database..."))
    .catch((err) => console.error("Error connecting to the database:", err));
};

module.exports = coonectDb;
