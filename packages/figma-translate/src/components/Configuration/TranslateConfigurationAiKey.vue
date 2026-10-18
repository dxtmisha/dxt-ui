<script setup lang="ts">
import { useTranslateRef } from '@dxtmisha/functional'
import { useConfigurationAi } from '../../composables/useConfigurationAi'

defineOptions({
  name: 'TranslateConfigurationAiKey'
})

/** Translations / Переводы */
const translate = useTranslateRef([
  'translate-configuration-ai-key'
] as const)

const { key } = useConfigurationAi()
</script>

<template>
  <D1Group
    class="translate-configuration-ai-key"
    label="AI"
  >
    <D1Input
      v-model="key"
      :label="translate['translate-configuration-ai-key']"
    />
  </D1Group>
</template>

<style lang="scss"></style>
