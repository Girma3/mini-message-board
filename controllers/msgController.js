import { messages, addMsg, deleteMsg, User } from "../models/messages.js";

async function getOneMsgById(msgId) {
  return messages.find((msg) => msgId === msg.id);
}

async function addNewMsg(req, res) {
  if (req.body.userName !== "") {
    const newUser = User();
    newUser.userName = req.body.userName;
    newUser.userMsg = req.body.userMsg;
    addMsg(newUser);
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
