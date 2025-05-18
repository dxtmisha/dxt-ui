<script setup lang="ts">
</script>

<template>
  <div class="app">
    <div class="app__back">
      <h1>D1</h1>
      <RouterLink to="/" class="app__main">Main</RouterLink>
    </div>
    <RouterView/>
  </div>
</template>

<style lang="scss">
.app {
  padding: 4px 8px;

  &__back {
    padding: 16px 0;
  }
}
</style>
