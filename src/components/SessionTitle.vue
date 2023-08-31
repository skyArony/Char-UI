<script setup lang="ts">
interface Props {
  sessionTitle: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <h1>{{ props.sessionTitle }}</h1>
  </div>
</template>

<style scoped></style>
