import { Router } from "express";
import { messages } from "../models/messages.js";
import {
  addNewMsg,
  getMsgById,
  deleteMsgById,
} from "../controllers/msgController.js";
const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("index", { title: "Home", messages: messages });
});
messageRouter.get("/new", (req, res) => {
  res.render("form", { title: "new message" });
});

messageRouter.get("/:id", getMsgById);
messageRouter.delete("/:id", deleteMsgById);
messageRouter.post("/new", addNewMsg);

export { messageRouter };
