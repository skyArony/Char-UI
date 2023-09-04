<script setup lang="ts">
const message = ref<string>("");

const sendMessage = (): void => {
  console.log(message.value);
  message.value = "";
};
</script>

<template>
  <div class="border-0 border-t-.5 border-gray-1 border-solid p-t-1rem">
    <!-- <el-input
      v-model="message"
      type="textarea"
      resize="none"
      class="h-full max-h-full overflow-y-auto"
      @keyup.enter="sendMessage"
    /> -->
    <!-- <a-textarea
      v-model="message"
      :bordered="false"
      class="max-h-full text-base text-white min-h-full!"
    /> -->
    <a-textarea
      v-model="message"
      class="max-h-full text-base text-white min-h-full!"
    />
  </div>
</template>
