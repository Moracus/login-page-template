const express = require("express");
import userRoute from "./routes/user.route.js";
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/authDemo")
  .then(() => {
    console.log("db connection open");
  })
  .catch((err) => {
    console.log("err db connection");
    console.log(err);
  });
app.get("/", (req, res) => {
  res.json({ message: "hello, world" });
});
app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
