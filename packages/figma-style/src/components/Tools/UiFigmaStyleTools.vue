<script setup lang="ts">
import UiFigmaStyleToolsDownload from './UiFigmaStyleToolsDownload.vue'
</script>

<template>
  <div class="ui-figma-style-tools">
    <UiFigmaStyleToolsDownload/>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.ui-figma-style-tools {
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;

  @include ui.paddingY(ui.v('?layout.paddingY'));

  background-color: ui.v('?sys.palette.surface');
  @include ui.backgroundOpacity(ui.v('?sys.opacity.scrim'));
  backdrop-filter: ui.v('?sys.blur.md');
}
</style>
