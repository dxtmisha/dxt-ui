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
          <D1Block :label="translate['translate-key_creation-prefix']">
            <TranslateKeyCreationPrefixAdd/>
          </D1Block>
          <D1Block :label="translate['translate-frames']">
            <TranslateKeyCreationFrames/>
          </D1Block>
        </D1Section>
    </div>
</template>

<style lang="scss"></style>
