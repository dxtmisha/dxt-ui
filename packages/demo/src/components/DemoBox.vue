<script setup lang="ts">

</script>

<template>
  <div class="demo-box">
    <slot/>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-box {
  border: 1px solid;
  @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
  border-radius: ui.v('?sys.rounded.md');
  padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');
}
</style>
