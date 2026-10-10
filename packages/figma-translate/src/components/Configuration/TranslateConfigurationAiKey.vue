<script setup lang="ts">
import { useConfigurationAi } from '../../composables/useConfigurationAi'

defineOptions({
  name: 'TranslateConfigurationAiKey'
})

const { key } = useConfigurationAi()
</script>

<template>
  <div class="translate-configuration-ai-key">
    <D1Input
      v-model="key"
    />
  </div>
</template>

<style lang="scss"></style>
