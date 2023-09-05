<script setup lang="ts">
// 假数据
const mockData = Array.from({ length: 20 }, (_, i) => ({
  avatar: "/saber.jpg",
  name: "Saber",
  message: `你在吗？${i}`,
  active: i === 3,
}));
const mockDataRef = ref<typeof mockData>(mockData);

const select = (item: (typeof mockData)[0]): void => {
  mockDataRef.value.forEach((item) => (item.active = false));
  item.active = true;
};
</script>

<template>
  <ul class="infinite-list scroll-container" style="overflow: auto">
    <SessionItem
      v-for="item in mockDataRef"
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
  --at-apply: h-full p-x-10px;
  --at-apply: bg-dark-2;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
