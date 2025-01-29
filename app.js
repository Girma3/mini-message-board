import express from "express";
import { messageRouter } from "./routes/message.js";
import { notFound } from "./routes/404.js";
import { messages } from "./models/messages.js";
import { getTimeDifference } from "./models/messages.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/new", formRouter);

app.use(messageRouter);

// Set MIME type for JavaScript files
app.use((req, res, next) => {
  if (req.path.endsWith(".js")) {
    res.setHeader("Content-Type", "application/javascript");
  }
  next();
});
app.get("/api/messages", (req, res) => {
  //return json
  res.setHeader("Content-Type", "application/json");
  messages.forEach((user) => {
    user.fromCurrentTime = getTimeDifference(new Date(user.createdTime));
  });
  res.json(messages);
});
app.use("*", notFound);

app.listen(PORT, () => {
  console.log("server is running..");
});
