import { ref } from "vue";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  // ===================== State =====================
  const selfAvatar = ref("");
  const keyword = ref("");

  return { selfAvatar, keyword };
});
