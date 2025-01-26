import { Router } from "express";
import messages from "../models/messages.js";
const newMessage = Router();

newMessage.post("/new", (req, res) => {
  console.log(req.body);
  res.render("form", { title: "new messages" });
});
export { newMessage };
