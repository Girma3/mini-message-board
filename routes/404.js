import { Router } from "express";
const notFound = Router();

notFound.get("*", (req, res) => {
  res.render("404", { title: "page not found" });
});
export { notFound };
