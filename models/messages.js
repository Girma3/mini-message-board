import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./local-storage-database");

import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId();

const defaultMsg = [
  {
    id: uid.rnd(),
    text: "Hi there!",
    userName: "John",
    added: new Date(),
  },
  {
    id: uid.rnd(),
    text: "Hello World!",
    userName: "Charles",
    added: new Date(),
  },
];
//
const LOCAL_STORAGE_MSG_KEY = "messages";
let messages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MSG_KEY)) || [];

function save() {
  localStorage.setItem(LOCAL_STORAGE_MSG_KEY, JSON.stringify(messages));
}

function deleteMsg(msgId) {
  messages = messages.filter((msg) => msg.id !== msgId);
  save();
}

function addMsg(msg) {
  messages.push(msg);
  save();
}
if (messages.length === 0) {
  messages = [...defaultMsg];
  save();
}

export { messages, addMsg, deleteMsg };
