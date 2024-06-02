import { BACKEND_URL } from "@repo/common/config";
import express from "express";

const app = express();
console.log("Hey Backend", BACKEND_URL);
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3000);
