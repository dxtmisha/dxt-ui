<script setup lang="ts">

</script>

<template>
  <div class="demo-flex">
    <slot/>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-flex {
  display: flex;
  flex-wrap: wrap;
  column-gap: ui.v('?layout.gapX');
  row-gap: ui.v('?layout.gapY');
}
</style>
