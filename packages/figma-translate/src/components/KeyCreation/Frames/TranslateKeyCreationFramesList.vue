<script setup lang="ts">
import { computed } from 'vue'
import { TranslateFramesDisplay } from '../../../classes/TranslateFramesDisplay'

defineOptions({
  name: 'TranslateKeyCreationFramesList'
})

const frames = computed(() => TranslateFramesDisplay.get())
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
