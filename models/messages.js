import { LocalStorage } from "node-localstorage";
import { format, formatDistanceToNow, parseISO } from "date-fns";

const localStorage = new LocalStorage("./local-storage-database");

import ShortUniqueId from "short-unique-id";
let uid = new ShortUniqueId();
function formatCurrentTime(date) {
  return format(date, "HH:mm aa");
}

function getTimeDifference(createdTime) {
  return formatDistanceToNow(createdTime, { addSuffix: true });
}
function User(userName, userMsg) {
  const createdTime = new Date().toISOString();
  const currentDate = parseISO(createdTime);
  const formattedDate = format(currentDate, "EEE, MMM d-yyyy");
  const added = formatCurrentTime(new Date(createdTime));
  const fromCurrentTime = getTimeDifference(new Date(createdTime));
  return {
    id: uid.rnd(),
    userMsg: userMsg,
    userName: userName,
    createdTime: createdTime,
    added: added,
    fromCurrentTime: fromCurrentTime,
    formattedDate: formattedDate,
  };
}

const userOne = User("King G", "Happy Coding, Every body 💪");
const userTwo = User(
  "Fredrick  Nietzsche",
  "To live is to suffer, to survive is to find some meaning in the suffering."
);

const defaultMsg = [userOne, userTwo];

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

export {
  messages,
  addMsg,
  deleteMsg,
  formatCurrentTime,
  getTimeDifference,
  User,
};
