import { ref } from "vue";
import { defineStore } from "pinia";
import type { MessageItem } from "../components/MessageItem.vue";

export const useActiveSessionStore = defineStore("activeSession", () => {
  // ===================== State =====================
  const sessionKey = ref("");
  const sessionTitle = ref("");
  const messageList = ref<MessageItem[]>([]);

  // ===================== Action =====================
  function addMessage(message: MessageItem): void {
    if (sessionTitle.value === "") {
      return;
    }
    messageList.value.push(message);
  }

  return { sessionKey, sessionTitle, messageList, addMessage };
});
