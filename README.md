# Webux Static

This module uses express to serve static files

## Installation

### Linux

```bash
npm i --save @studiowebux/static
```

### Windows

```bash
npm i --save @studiowebux/static
```

### Mac

```bash
npm i --save @studiowebux/static
```

## Usage

Provide an array of path and local directory (Key/Value), the module will automatically serve those paths for external access.

### Configurations

> **Note** You must load the static resources after the API routes to avoid issues.

**config/static.js**

```
module.exports = {
  resources: [
    { path: "/api", resource: "./api" },
    { path: "/assets", resource: "./assets" }
  ]
};
```

### Function

| Key     | Description                                       | Mandatory |
| ------- | ------------------------------------------------- | --------- |
| options | (Default: {}) The resources to expose             | Yes       |
| app     | (Default: None) The express application           | Yes       |
| express | (Default: None) The express object                | Yes       |
| log     | (Default: Console) If a custom logger is required | No        |

_serveStatic_ function returns a Promise,

```javascript
serveStatic(options, app, express, log);
```

### Example

For examples, check the /examples directory

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

SEE LICENSE IN license.txt
