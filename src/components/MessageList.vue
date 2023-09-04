<script setup lang="ts"></script>

<template>
  <ul class="infinite-list" style="overflow: auto">
    <MessageItem>来自对方的消息</MessageItem>
    <MessageItem direction="right">自己的消息</MessageItem>
  </ul>
</template>

<style scoped>
.infinite-list {
  --at-apply: h-full p-x-10px p-1rem;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
