import { defineStore } from "pinia";
import { ref } from "vue";
import type { SessionProps } from "../components/SessionItem.vue";

export const useSessionListStore = defineStore("sessionList", () => {
  // ===================== State =====================
  const sessionList = ref<SessionProps[]>([]);

  return { sessionList };
});
