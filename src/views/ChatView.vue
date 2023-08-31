<script setup lang="ts"></script>

<template>
  <div class="chat-view">
    <div class="chat-window">
      <div class="bg-amber" />
      <SessionTitle session-title="ABC" class="session-title bg-blue" />
      <div class="session-list bg-red" />
      <div class="bg-green" />
      <div class="bg-gray" />
    </div>
  </div>
</template>

<style scoped>
.chat-view {
  --at-apply: bg-cyan-300 --at-apply: w-full min-h-screen --at-apply: flex
    justify-center items-center;
}

.chat-window {
  --at-apply: bg-red-300 --at-apply: w-full h-full min-w-840px min-h-540px
    max-w-80% max-h-85% m-y-3rem --at-apply: shadow-md rounded-xl display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 60px auto 170px;
}

.session-list {
  grid-row-start: span 2;
}
</style>
