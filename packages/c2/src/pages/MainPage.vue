<script setup lang="ts">

</script>

<template>
  <div class="app-page-main">
    <RouterLink to="/button">Button</RouterLink>
    <RouterLink to="/icon">Icon</RouterLink>
    <RouterLink to="/image">Image</RouterLink>
    <RouterLink to="/progress">Progress</RouterLink>
    <RouterLink to="/ripple">Ripple</RouterLink>
    <RouterLink to="/skeleton">Skeleton</RouterLink>
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
