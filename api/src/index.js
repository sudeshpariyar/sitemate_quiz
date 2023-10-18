import express from "express";

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("This is sitemap quiz");
});

app.listen(port, () => {
  console.log("THis is the port ");
});
