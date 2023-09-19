import { defineStore } from "pinia";
import { ref } from "vue";
import type { SessionItem } from "../components/SessionItem.vue";

export const useSessionListStore = defineStore("sessionList", () => {
  // ===================== State =====================
  const sessionList = ref<SessionItem[]>([]);

  return { sessionList };
});
