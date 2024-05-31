const express = require("express");
const cors = require("cors");
const app = express();

const corOption = {
  origin: "https://localhost:8080",
};


app.use(cors(corOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
const redisRouter = require("./Src/Routes/redisRouter.js");

app.use('/api/redisCache', redisRouter);

//Testing API
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

module.exports = app;