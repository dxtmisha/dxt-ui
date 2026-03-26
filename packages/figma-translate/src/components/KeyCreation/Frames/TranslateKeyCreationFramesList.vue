<script setup lang="ts">
import { watchEffect } from 'vue'
import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

import TranslateKeyCreationFramesItem from './TranslateKeyCreationFramesItem.vue'

defineOptions({
  name: 'TranslateKeyCreationFramesList'
})

const { frames } = useFigmaUiFrames()

watchEffect(() => {
  console.log('frames', frames.value)
})
</script>

<template>
  <div class="translate-key-creation-frames-list">
    <TranslateKeyCreationFramesItem
      v-for="frame in frames"
      :key="frame.id"
      v-bind="frame"
    />
  </div>
</template>

<style lang="scss"></style>
