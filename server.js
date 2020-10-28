const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const budget = require("./routes/budget_routes");

let url = 'mongodb://localhost:27017/budget_db';

mongoose
  .connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.use("/budget", budget);

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});