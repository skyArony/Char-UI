<template>
  <div class="modal">
    <div class="title">新的聊天</div>
    <div class="body">
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
      <CharacterItem />
    </div>
  </div>
</template>

<style scoped>
.modal {
  --at-apply: bg-dark-3 border-solid border-1 border-gray-6 rounded-2xl;
  --at-apply: p-t-1rem p-l-28px p-b-4rem shadow-xs shadow-gray-500 p-r-20px;
}

.title {
  --at-apply: font-bold text-gray-1 font-size-1.1em m-b-1rem;
}

.body {
  --at-apply: grid gap-0.5rem h-full overflow-y-auto overflow-x-hidden;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: min-content;
}
</style>
