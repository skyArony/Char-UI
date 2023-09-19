import { defineStore } from "pinia";
import { ref } from "vue";
import type { MessageItem } from "../components/MessageItem.vue";

export const useActiveSessionStore = defineStore("activeSession", () => {
  // ===================== State =====================
  const sessionKey = ref("");
  const sessionTitle = ref("");
  const messageList = ref<MessageItem[]>([]);

  return { sessionKey, sessionTitle, messageList };
});
