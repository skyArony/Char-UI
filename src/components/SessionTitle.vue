<script setup lang="ts">
interface Props {
  sessionTitle: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex items-center p-1rem">
    <span class="text-2xl font-medium">{{ props.sessionTitle }}</span>
  </div>
</template>
