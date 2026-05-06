<script setup lang="ts">
import UiFigmaStyleSelectionList from './components/Selection/UiFigmaStyleSelectionList.vue'
</script>

<template>
  <D1Container>
    <div class="ui-figma-style">
      <UiFigmaStyleSelectionList/>
    </div>
  </D1Container>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.ui-figma-style {
  @include ui.paddingX(ui.v('?sys.spacing.x'));
}
</style>
