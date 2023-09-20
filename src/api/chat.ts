import { type MessageItem } from "../components/MessageItem.vue";
import type { SessionProps } from "../components/SessionItem.vue";

enum API {
  MessageList = "/chat/message-list",
  SessionList = "/chat/session-list",
}

const messageList: MessageItem[] = [
  {
    id: 1,
    avatar: "/saber.jpg",
    message: "今天天气不错",
    time: new Date(),
    isFromMe: true,
  },
  {
    id: 2,
    avatar: "/joan.jpg",
    message: "出去走走吧",
    time: new Date("+1s"),
    isFromMe: false,
  },
];
export const getMessageList = (): MessageItem[] => {
  console.log(`ToDo: ${API.MessageList} 替换为真实接口`);
  return messageList;
};

const sessionList: SessionProps[] = [
  {
    id: "a-x-d-x",
    avatar: "/凉宫.jpg",
    name: "凉宫春日",
    messageList: [
      {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/u/499270?v=4",
        message: "今天天气不错",
        time: new Date(),
        isFromMe: true,
      },
      {
        id: 2,
        avatar: "/凉宫.jpg",
        message: "人类一点都不有趣",
        time: new Date("+1s"),
        isFromMe: false,
      },
    ],
  },
  {
    id: "a-x-d-2",
    avatar: "/saber.jpg",
    name: "Saber",
    messageList: [
      {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/u/499270?v=4",
        message: "今天天气不错",
        time: new Date(),
        isFromMe: true,
      },
      {
        id: 2,
        avatar: "/saber.jpg",
        message: "今天天气不错",
        time: new Date("+1s"),
        isFromMe: false,
      },
    ],
  },
  {
    id: "a-x-d-3",
    avatar: "/joan.jpg",
    name: "贞德",
    messageList: [
      {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/u/499270?v=4",
        message: "今天天气不错",
        time: new Date(),
        isFromMe: true,
      },
      {
        id: 2,
        avatar: "/joan.jpg",
        message: "我原本就不喜欢争斗，但也不是畏惧浴血的胆小鬼",
        time: new Date("+1s"),
        isFromMe: false,
      },
    ],
  },
  {
    id: "a-x-d-4",
    avatar: "/lulu.jpg",
    name: "鲁路修",
    messageList: [
      {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/u/499270?v=4",
        message: "今天天气不错",
        time: new Date(),
        isFromMe: true,
      },
      {
        id: 2,
        avatar: "/lulu.jpg",
        message: "光说漂亮话,世界是不会改变的",
        time: new Date("+1s"),
        isFromMe: false,
      },
    ],
  },
  {
    id: "a-x-d-5",
    avatar: "/cc.jpg",
    name: "C.C.",
    messageList: [
      {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/u/499270?v=4",
        message: "今天天气不错",
        time: new Date(),
        isFromMe: true,
      },
      {
        id: 2,
        avatar: "/cc.jpg",
        message: "披萨到了吗",
        time: new Date("+1s"),
        isFromMe: false,
      },
    ],
  },
  {
    id: "a-x-d-6",
    avatar: "/shirou.jpg",
    name: "卫宫士郎",
    messageList: [
      {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/u/499270?v=4",
        message: "今天天气不错",
        time: new Date(),
        isFromMe: true,
      },
      {
        id: 2,
        avatar: "/shirou.jpg",
        message: "おい、その先は地獄だぞ！",
        time: new Date("+1s"),
        isFromMe: false,
      },
    ],
  },
];
export const getSessionList = (): SessionProps[] => {
  console.log(`ToDo: ${API.SessionList} 替换为真实接口`);
  return sessionList;
};
