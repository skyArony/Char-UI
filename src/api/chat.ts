import { type MessageItemProps } from "../components/MessageItem.vue";

enum API {
  MessageList = "/chat/message-list",
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
