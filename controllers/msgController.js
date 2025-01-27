import { messages, addMsg, deleteMsg } from "../models/messages.js";
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();
async function getOneMsgById(msgId) {
  return messages.find((msg) => msgId === msg.id);
}

async function addNewMsg(req, res) {
  if (req.body.userName !== "") {
    const newMessage = {
      id: uid.rnd(),
      userName: req.body.userName,
      text: req.body.userMsg,
      added: new Date(),
    };
    addMsg(newMessage);
    res.redirect("/"); //redirect to home page
  }
}
async function getMsgById(req, res) {
  const msgId = req.params.id;
  const message = await getOneMsgById(msgId);
  if (message) {
    res.render("detail-page", {
      title: "Message",
      message: message,
    });
  } else {
    res.render("404", { title: "message not found!" });
  }
}
async function deleteMsgById(req, res) {
  const msgId = req.params.id;
  deleteMsg(msgId);
  res.json({ redirect: "/" });
}

export { getMsgById, addNewMsg, deleteMsgById };
