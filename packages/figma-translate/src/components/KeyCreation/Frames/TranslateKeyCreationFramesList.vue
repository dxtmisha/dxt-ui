<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { TranslateFramesDisplay } from '../../../classes/TranslateFramesDisplay'

import TranslateKeyCreationFramesItem from './TranslateKeyCreationFramesItem.vue'

defineOptions({
  name: 'TranslateKeyCreationFramesList'
})

const frames = computed(() => TranslateFramesDisplay.get())
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

<style lang="scss">

</style>
