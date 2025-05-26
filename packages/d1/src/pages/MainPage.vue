<script setup lang="ts">

</script>

<template>
  <div class="app-page-main">
    <h2>Styles overview</h2>
    <RouterLink to="/classes/backgrounds">Backgrounds</RouterLink>
    <RouterLink to="/classes/borders">Borders</RouterLink>
    <RouterLink to="/classes/colors">Colors</RouterLink>
    <RouterLink to="/classes/fonts">Fonts</RouterLink>
    <h4>Reference tokens</h4>
    <RouterLink to="/ref/colors">ref:Colors</RouterLink>
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
