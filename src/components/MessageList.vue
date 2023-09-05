<script setup lang="ts">
import { type MessageProps } from "./MessageItem.vue";

// 构造 Fake Data
const mockData: MessageProps[] = Array.from({ length: 20 }, (_, i) => ({
  avatar: "/saber.jpg",
  message: `你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？你在吗？${i}`,
  direction: Math.random() > 0.5 ? "left" : "right",
}));
const mockDataRef = ref<MessageProps[]>(mockData);
</script>

<template>
  <ul class="infinite-list" style="overflow: auto">
    <MessageItem
      v-for="item in mockDataRef"
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
