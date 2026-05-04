<script setup lang="ts">
import {
  DemoTestFigmaLayoutDefaults,
  type DemoTestFigmaLayoutEmits,
  type DemoTestFigmaLayoutProps,
  type DemoTestFigmaLayoutSlots
} from './types'

defineOptions({
  name: 'DemoTestFigmaLayout'
})

withDefaults(defineProps<DemoTestFigmaLayoutProps>(), DemoTestFigmaLayoutDefaults)
defineEmits<DemoTestFigmaLayoutEmits>()
defineSlots<DemoTestFigmaLayoutSlots>()
</script>

<template>
  <div class="demo-test-figma-layout"></div>
</template>

<style lang="scss">
.demo-test-figma-layout {
  // Your styles here
}
</style>
