const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectDb = require("./db/connect-db");

//const _ = require("lodash");

const app = express();

const PORT = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.use("/", express.static("images"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
  
app.get((req, res) => {
    res.status(4040).send("404", { title: "404" });
  });

const start = async () => {
    try {
      await connectDb();
      app.listen(PORT, () => {
        console.log(`Server(admin) is running port ${PORT}...`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();