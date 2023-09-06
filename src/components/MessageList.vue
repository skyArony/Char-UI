<script setup lang="ts">
import { getMessageList } from "../api/chat";
import { type MessageItemProps } from "./MessageItem.vue";

const sessionList = ref<MessageItemProps[]>([]);

onMounted(async () => {
  sessionList.value = getMessageList();
  console.log(sessionList);
});
</script>

<template>
  <ul class="infinite-list" style="overflow: auto">
    <MessageItem
      v-for="item in sessionList"
      :key="item.message"
      :avatar="item.avatar"
      :message="item.message"
      :direction="item.direction"
    />
  </ul>
</template>

<style scoped>
.infinite-list {
  --at-apply: h-full p-x-10px p-1rem;
}
</style>
