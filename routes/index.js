import { Router } from "express";
import messages from "../models/messages.js";

const indexRoute = Router();

indexRoute.get("/", (req, res) => {
  res.render("index", { title: "Home", messages: messages });
});
export { indexRoute };
