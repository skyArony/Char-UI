<script setup lang="ts">
interface Props {
  sessionTitle: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex items-center border-0 border-b-.5 border-gray-7 border-solid p-1rem"
  >
    <span class="text-2xl font-medium text-gray-2">{{
      props.sessionTitle
    }}</span>
  </div>
</template>
