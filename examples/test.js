const options = {
  resources: [
    { path: "/api", resource: "./api" },
    { path: "/assets", resource: "./assets" }
  ]
};

const express = require("express");
const app = express();
const { serveStatic } = require("../index");

app.get("/api/v1/resource", (req, res) => {
  res.status(200).json({ msg: "API CALL !" });
});

serveStatic(options, app, express)
  .then(() => {
    app.listen(1337, () => {
      console.log("Server listening on port 1337 ... ");
    });
  })
  .catch(e => {
    console.error(e);
  });
