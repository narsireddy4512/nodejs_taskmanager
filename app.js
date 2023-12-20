const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./db/connection");
const notFound = require("./middleware/noRouteFound");
require("dotenv").config();

// middleware

app.use(express.json());

// database connection
const port = 3000;
const start = async () => {
  try {
    await connectDb(process.env.mongo_URI);
    app.listen(port, console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

// routes
app.get("/hello", (req, res) => {
  res.send("Hello Buddy!..");
});

app.use("/api/v1/tasks", tasks);

app.use(notFound);

// app.listen(port, console.log(`Server listening on port ${port}`));
