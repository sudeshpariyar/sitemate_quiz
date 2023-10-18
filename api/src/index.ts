import express, { Express } from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const app: Express = express();
app.use(bodyParser.json());

const port = 4000;

import issueRouter from "./router/issue";
import { AppDataSource } from "./db";

app.get("/", (req, res) => {
  res.send("This is sitemap quiz");
});

app.use("/issues", issueRouter);

AppDataSource.initialize()
  .then(() => {
    console.log("database connected");
    app.listen(port, () => {
      console.log("This is the port ");
    });
  })
  .catch((err) => {
    console.log("error connecting DB: " + err);
  });
