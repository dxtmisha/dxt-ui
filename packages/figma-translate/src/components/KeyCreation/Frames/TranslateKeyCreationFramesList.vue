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
    <div
      v-for="frame in frames"
      :key="frame.id"
      class="translate-key-creation-frames-list__item"
    >
      {{ frame.name }}
    </div>
  </div>
</template>

<style lang="scss">

</style>
