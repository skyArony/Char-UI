<script setup lang="ts">
import { getSessionList } from "../api/chat";
import { type SessionItemProps } from "./SessionItem.vue";

const sessionList = ref<SessionItemProps[]>([]);

onMounted(async () => {
  sessionList.value = getSessionList();
  console.log(sessionList);
});

const select = (item: SessionItemProps[][0]): void => {
  sessionList.value.forEach((item) => (item.active = false));
  item.active = true;
};
</script>

<template>
  <ul class="infinite-list scroll-container" style="overflow: auto">
    <SessionItem
      v-for="item in sessionList"
      :key="item.name"
      :avatar="item.avatar"
      :name="item.name"
      :message="item.message"
      :active="item.active"
      @click="select(item)"
    />
  </ul>
</template>

<style scoped>
.infinite-list {
  --at-apply: h-full p-x-10px p-b-1rem;
  --at-apply: bg-dark-2;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
