<script setup lang="ts">
import IconSearch from "~icons/ph/magnifying-glass-light";
import IconAdd from "~icons/clarity/plus-line";

const keyword = ref<string>("");
</script>

<template>
  <div class="content">
    <a-auto-complete class="flex-auto">
      <a-input v-model="keyword" placeholder="搜索" class="session-search">
        <template #prefix>
          <IconSearch class="icon-search" />
        </template>
      </a-input>
    </a-auto-complete>
    <a-button class="button-search">
      <template #icon>
        <IconAdd class="icon-add" />
      </template>
    </a-button>
  </div>
</template>

<style scoped>
.content {
  --at-apply: flex items-center p-1rem bg-dark-2;
}

.session-search:hover {
  border-color: rgb(52, 211, 153);
}

.button-search:hover {
  border-color: rgb(52, 211, 153);
}

.icon-add {
  --at-apply: text-base text-gray-4;
}

.icon-search {
  --at-apply: text-base text-gray-4;
}

.button-search {
  --at-apply: ml-0.5rem flex flex-none items-center justify-center border-dark
    bg-dark;
}
</style>

<style>
.session-search {
  --at-apply: bg-dark border-dark;
}

.session-search input {
  --at-apply: bg-dark placeholder-gray-4 text-gray-2 caret-blue;
}
</style>
