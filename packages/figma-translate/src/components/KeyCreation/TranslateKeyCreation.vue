<script setup lang="ts">
import { useTranslateRef } from '@dxtmisha/functional'

import TranslateKeyCreationFrames from './Frames/TranslateKeyCreationFrames.vue'

/** Translations / Переводы */
const translate = useTranslateRef([
  'translate-frames'
] as const)
</script>

<template>
    <div class="translate-keyCreation">
        #key-creation
        <D1Section>
          <D1Block :label="translate['translate-frames']">
            <TranslateKeyCreationFrames/>
          </D1Block>
        </D1Section>
    </div>
</template>

<style lang="scss"></style>
