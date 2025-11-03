<script setup lang="ts">
// import { AiGoogleLite } from '@dxtmisha/scripts/ai'

/* new AiGoogleLite(
  '',
  'gemini-2.5-pro'
).generate('я же удалил свой ключ API, почему он работает?') */

import { FigmaMessage } from './classes/FigmaMessage'
import { computed, ref } from 'vue'
import type { UiFigmaMessageTexts } from './types/figmaTypes.ts'

const item = ref<UiFigmaMessageTexts>()
const screenshot = computed<string | undefined>(() => {
  if (
    item.value
    && item.value.screenshot
  ) {
    // const blob = new Blob([item.value.screenshot as any], { type: 'image/jpg' })
    // return URL.createObjectURL(blob)
  }

  return undefined
})

FigmaMessage.add(
  'texts',
  (message: UiFigmaMessageTexts) => {
    console.log('message', message)
    item.value = message
    return 'Hello from Figma Plugin UI!'
  }
)
</script>

<template>
  <div class="p-4">
    <h1>Figma Plugin UI !!!</h1>
    <img alt="screenshot" :src="screenshot">
  </div>
</template>

<style lang="scss"></style>
