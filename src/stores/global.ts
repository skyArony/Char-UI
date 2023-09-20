import { ref } from "vue";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const selfAvatar = ref("");

  return { selfAvatar };
});
