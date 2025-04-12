<script setup lang="ts">

</script>

<template>
  <div class="app-page-main">
    <RouterLink to="/image">Image</RouterLink>
  </div>
</template>

<style lang="scss">
@use '@dxt-ui/styles' as ui;

.app-page-main {
  @include ui.flexY;
  align-items: stretch;
  gap: 8px;
}
</style>
