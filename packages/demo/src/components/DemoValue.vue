<script setup lang="ts">
defineProps<{
  value?: any
}>()
</script>

<template>
  <div class="demo-value d1-font--bodyMedium">Value: {{ value }}</div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-value {
  color: ui.v('?sys.palette.onSurface');
  @include ui.colorOpacity(ui.v('?sys.opacity.surface.medium'));
}
</style>
