<script setup lang="ts">
import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

import UiFigmaStyleSelectionItem from './UiFigmaStyleSelectionItem.vue'

const { selection } = useFigmaFrameSelection()
</script>

<template>
  <D1PageArea label="Preview">
    <D1Group>
      <template v-if="selection">
        <UiFigmaStyleSelectionItem
          v-for="item in selection"
          :key="item.id"
          v-bind="item"
        />
      </template>
    </D1Group>
  </D1PageArea>
</template>

<style lang="scss"></style>
