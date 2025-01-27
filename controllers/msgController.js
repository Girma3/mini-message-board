import messages from "../models/messages.js";
async function getOneMsgById(msgId) {
  return messages.find((msg) => msgId === msg.id);
}
async function getMsgById(req, res) {
  const msgId = Number(req.params.id);
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
async function delMsgById(req, res) {
  const msgId = Number(req.params.id);
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

export { getMsgById };
