const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
app.set("port", port);

app.listen(port, () => console.log(`App started on port ${port}.`));

app.get("/", (req, res, next) => {
  res.set({ "Access-Control-Allow-Origin": "*" });

  return res.send("Hello World xxx");
});
