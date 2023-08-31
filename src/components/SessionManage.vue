<script setup lang="ts">
import IconAccessibility from "~icons/carbon/accessibility";

const keyword = ref<string>("");
</script>

<template>
  <div class="flex items-center p-1rem">
    <el-input
      v-model="keyword"
      placeholder="搜索"
      :prefix-icon="IconAccessibility"
    />
  </div>
</template>
