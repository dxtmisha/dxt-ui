<script setup lang="ts">
import { ElementScreenshot } from '@dxtmisha/functional-basic'

import DxtTestButton from './DxtTestButton.vue'

defineOptions({
  name: 'DxtTestScreenshot'
})

const props = defineProps<{
  element: HTMLElement
}>()

const onClick = () => {
  const screenshot = new ElementScreenshot(props.element)
  screenshot.download()
}
</script>

<template>
  <div>
    <DxtTestButton label="Screenshot" @click="onClick"/>
  </div>
</template>

<style lang="scss">

</style>
