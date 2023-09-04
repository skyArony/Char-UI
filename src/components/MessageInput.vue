<script setup lang="ts">
const message = ref<string>("");

const sendMessage = (): void => {
  console.log(message.value);
  message.value = "";
};
</script>

<template>
  <div class="border-0 border-t-.5 border-gray-7 border-solid p-.5rem p-t-1rem">
    <a-textarea
      v-model="message"
      :bordered="false"
      class="max-h-full font-size-1em tracking-wide text-white subpixel-antialiased min-h-full! resize-none!"
      @keyup.enter="sendMessage"
    />
  </div>
</template>

<style scoped></style>
