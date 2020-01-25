const express = require("express");
const app = express();
const { serveStatic } = require("../index");
const path = require("path");

const options = {
  resources: [
    { path: "/api", resource: path.join(__dirname, "api") },
    { path: "/assets", resource: path.join(__dirname, "assets") }
  ]
};

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

// http://127.0.0.1:1337/api/api.html
// http://127.0.0.1:1337/assets
// http://127.0.0.1:1337/api/v1/resource
