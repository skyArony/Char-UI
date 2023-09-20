<script setup lang="ts">
import { getSessionList } from "../api/chat";
import { useSessionListStore } from "../stores/sessionList";
import { useGlobalStore } from "../stores/global";

const globalStore = useGlobalStore();
globalStore.selfAvatar = "https://avatars.githubusercontent.com/u/499270?v=4";

// 获取会话列表
const sessionListStore = useSessionListStore();
sessionListStore.sessionList = getSessionList();
</script>

<template>
  <div class="chat-view">
    <div class="chat-window">
      <SessionManage />
      <SessionTitle class="session-title" />
      <SessionList class="session-list" />
      <MessageList />
      <MessageInput />
    </div>
  </div>
</template>

<style scoped>
.chat-view {
  --at-apply: bg-white;
  --at-apply: w-full min-h-screen;
  --at-apply: flex justify-center items-center;
}

.chat-window {
  --at-apply: bg-dark;
  --at-apply: w-full h-full min-w-840px min-h-540px max-w-60% max-h-85% m-y-3rem;
  --at-apply: rounded-xl overflow-hidden;
  display: grid;
  grid-template-columns: 270px auto;
  grid-template-rows: 60px auto 190px;
  box-shadow:
    0 1px 2px -2px rgb(0 0 0 / 16%),
    0 3px 6px 0 rgb(0 0 0 / 12%),
    0 5px 12px 4px rgb(0 0 0 / 9%);
}

.session-list {
  grid-row-start: span 2;
}
</style>
