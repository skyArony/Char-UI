<script setup lang="ts">
export interface SessionProps {
  avatar: string;
  name: string;
  message: string;
  active: boolean;
}

const props = defineProps<SessionProps>();
</script>

<template>
  <div class="session" :class="{ active: props.active }">
    <el-avatar :size="56" :src="props.avatar" class="avatar" />
    <span
      class="flex items-center p-t-4px text-base tracking-wide text-white subpixel-antialiased text-shadow-md"
    >
      {{ props.name }}
    </span>
    <span
      class="flex items-center p-b-4px text-sm text-gray-1 subpixel-antialiased text-shadow-md"
    >
      {{ props.message }}
    </span>
  </div>
</template>

<style scoped>
.session {
  --at-apply: w-full p-10px rounded-lg;
  display: grid;
  grid-template-columns: 64px auto;
  grid-template-rows: 28px 28px;
}

.session.active {
  background-image: linear-gradient(
    to right top,
    rgb(52, 211, 153),
    rgb(59, 130, 246)
  );
}

.avatar {
  grid-row-start: span 2;
  --at-apply: shadow-md;
}
</style>
