# Webux Static

This module uses express to serve static files

## Installation

```bash
npm i --save @studiowebux/static
```

## Usage

How it works,  
You have to provide an array of path and local directory, the module will automatically serve those paths to external access.

### The options

```
module.exports = {
  resources: [
    { path: "/api", resource: "./api" },
    { path: "/assets", resource: "./assets" }
  ]
};
```

### Example

**Note** You must load this module at the end to avoid issues with the API routes.

```
const express = require("express");
const app = express();
const { serveStatic } = require("@studiowebux/static");

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
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

SEE LICENSE IN license.txt
