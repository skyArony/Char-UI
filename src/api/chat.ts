import { type MessageItemProps } from "../components/MessageItem.vue";
import type { SessionItemProps } from "../components/SessionItem.vue";

enum API {
  MessageList = "/chat/message-list",
  SessionList = "/chat/session-list",
}

const messageList: MessageItemProps[] = [
  {
    avatar: "/saber.jpg",
    message: "今天天气不错",
    direction: "left",
  },
  {
    avatar: "/joan.jpg",
    message: "出去走走吧",
    direction: "right",
  },
];
export const getMessageList = (): MessageItemProps[] => {
  console.log(`ToDo: ${API.MessageList} 替换为真实接口`);
  return messageList;
};

const sessionList: SessionItemProps[] = [
  {
    avatar: "/凉宫.jpg",
    name: "凉宫春日",
    message: "人类一点都不有趣",
    active: false,
  },
  {
    avatar: "/saber.jpg",
    name: "Saber",
    message: "今天天气不错",
    active: false,
  },
  {
    avatar: "/joan.jpg",
    name: "贞德",
    message: "我原本就不喜欢争斗，但也不是畏惧浴血的胆小鬼",
    active: false,
  },
  {
    avatar: "/lulu.jpg",
    name: "鲁路修",
    message: "光说漂亮话,世界是不会改变的",
    active: false,
  },
  {
    avatar: "/cc.jpg",
    name: "C.C.",
    message: "披萨到了吗",
    active: false,
  },
  {
    avatar: "/shirou.jpg",
    name: "卫宫士郎",
    message: "おい、その先は地獄だぞ！",
    active: false,
  },
];
export const getSessionList = (): SessionItemProps[] => {
  console.log(`ToDo: ${API.SessionList} 替换为真实接口`);
  return sessionList;
};
