<script setup lang="ts">
import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'
import { watchEffect } from 'vue'

const { selection } = useFigmaFrameSelection()

watchEffect(() => {
  console.log(selection.value)
})
</script>

<template>
  <div>@dxtmisha/figma-style</div>
  <D1Section>
    <D1Block label="Preview">
    </D1Block>
  </D1Section>
</template>

<style lang="scss"></style>
