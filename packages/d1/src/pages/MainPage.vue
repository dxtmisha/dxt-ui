<script setup lang="ts">

</script>

<template>
  <div class="app-page-main">
    <h2>Styles overview</h2>
    <RouterLink to="/fonts">Fonts</RouterLink>
    <h4>Reference tokens</h4>
    <RouterLink to="/colors">ref:Colors</RouterLink>
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
