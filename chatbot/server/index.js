const express = require("express");
const app = express();
const handles = require('./handles');

const port = 8081;

app.use((req, res, next) => {
  handles.serverHandle(req, res);
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});