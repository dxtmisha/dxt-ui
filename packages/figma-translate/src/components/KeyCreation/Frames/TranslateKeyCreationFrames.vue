<script setup lang="ts">
import { useFigmaUiFrames } from '@dxtmisha/figma-ref'
import TranslateKeyCreationFramesList from './TranslateKeyCreationFramesList.vue'

defineOptions({
  name: 'TranslateKeyCreationFrames'
})

const { loading } = useFigmaUiFrames()
</script>

<template>
  <D1Skeleton
  :active="loading"
  class="translate-key-creation-frames"
  >
    <TranslateKeyCreationFramesList/>
  </D1Skeleton>
</template>

<style lang="scss">

</style>
