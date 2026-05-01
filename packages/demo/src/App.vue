<script setup lang="ts">
</script>

<template>
  <D1Container class="demo-app">
    <RouterView/>
  </D1Container>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-app {
  @include ui.paddingY(ui.v('?layout.marginY'));
}
</style>
