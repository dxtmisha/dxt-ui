<script setup lang="ts">
import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

import UiFigmaStyleSelectionItem from './UiFigmaStyleSelectionItem.vue'

const { selection } = useFigmaFrameSelection()
</script>

<template>
  <D1PageArea label="Preview">
    <D1Group>
      <template v-if="selection && selection.length > 0">
        <UiFigmaStyleSelectionItem
          v-for="item in selection"
          :key="item.id"
          v-bind="item"
        />
      </template>
      <div
        v-else
        class="ui-figma-style-selection-list__empty"
      >
        Select one or more elements in Figma to start processing.
      </div>
    </D1Group>
  </D1PageArea>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.ui-figma-style-selection-list {
  &__empty {
  }
}
</style>
