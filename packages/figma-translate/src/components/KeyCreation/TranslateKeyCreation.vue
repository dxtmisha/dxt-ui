<script setup lang="ts">
import { useTranslateRef } from '@dxtmisha/functional'

import TranslateKeyCreationPrefixAdd from './Prefix/Add/TranslateKeyCreationPrefixAdd.vue'
import TranslateKeyCreationFrames from './Frames/TranslateKeyCreationFrames.vue'

/** Translations / Переводы */
const translate = useTranslateRef([
  'translate-frames',
  'translate-key_creation-prefix'
] as const)
</script>

<template>
  <div class="translate-keyCreation">
    <D1Section>
      <D1Block>
        <D1Group :label="translate['translate-key_creation-prefix']">
          <TranslateKeyCreationPrefixAdd/>
        </D1Group>
        <D1Group :label="translate['translate-frames']">
          <TranslateKeyCreationFrames/>
        </D1Group>
      </D1Block>
    </D1Section>
  </div>
</template>

<style lang="scss"></style>
