<script setup lang="ts">
import UiFigmaStyleSelectionList from './components/Selection/UiFigmaStyleSelectionList.vue'
import UiFigmaStyleTools from './components/Tools/UiFigmaStyleTools.vue'
</script>

<template>
  <D1Container>
    <D1Page class="ui-figma-style">
      <UiFigmaStyleSelectionList/>
      <UiFigmaStyleTools/>
    </D1Page>
  </D1Container>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.ui-figma-style {
  @include ui.paddingX(ui.v('?sys.spacing.x'));
}
</style>
