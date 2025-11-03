<script setup lang="ts">
// import { AiGoogleLite } from '@dxtmisha/scripts/ai'

/* new AiGoogleLite(
  '',
  'gemini-2.5-pro'
).generate('я же удалил свой ключ API, почему он работает?') */

import { FigmaMessage } from './classes/FigmaMessage'

FigmaMessage.add(
  'texts',
  (message: any) => {
    console.log('message', message)
    return 'Hello from Figma Plugin UI!'
  }
)
</script>

<template>
  <div class="p-4">
    <h1>Figma Plugin UI !!!</h1>
  </div>
</template>

<style lang="scss"></style>
