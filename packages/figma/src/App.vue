<script setup lang="ts">
// import { AiGoogleLite } from '@dxtmisha/scripts/ai'

/* new AiGoogleLite(
  '',
  'gemini-2.5-pro'
).generate('я же удалил свой ключ API, почему он работает?') */

import { FigmaMessage } from './classes/FigmaMessage'
import { ref } from 'vue'
import type { UiFigmaMessageTexts } from './types/figmaTypes.ts'
import { ensureMaxSize } from './functions/ensureMaxSize.ts'
import { computedAsync } from '@dxtmisha/functional'
import { FigmaAiText } from './classes/FigmaAiText.ts'
import { AiGoogleLite } from '@dxtmisha/scripts/ai'
import { FIGMA_AI_KEY, FIGMA_AI_MODEL } from '../ai.config.ts'

const item = ref<UiFigmaMessageTexts>()
const screenshots = computedAsync<string[]>(async () => {
  const blobs: string[] = []

  if (
    item.value
    && item.value.screenshot
  ) {
    for (const screenshot of item.value.screenshot) {
      blobs.push(
        await ensureMaxSize(screenshot)
      )
    }
  }

  return blobs
})

FigmaMessage.add(
  'texts',
  (message: UiFigmaMessageTexts) => {
    new FigmaAiText(
      new AiGoogleLite(FIGMA_AI_KEY, FIGMA_AI_MODEL),
      message
    ).make()
    console.log('message', message)
    item.value = message
    return 'Hello from Figma Plugin UI!'
  }
)
</script>

<template>
  <div class="p-4">
    <h1>Figma Plugin UI !!!</h1>
    <img
      v-for="screenshot in screenshots"
      :key="screenshot"
      :src="screenshot"
      alt="screenshot"
    >
  </div>
</template>

<style lang="scss"></style>
