<script setup lang="ts">
import { useTranslateRef } from '@dxtmisha/functional'
import { useConfigurationStorage } from '../../composables/useConfigurationStorage'

defineOptions({
  name: 'TranslateConfigurationStorage'
})

/** Translations / Переводы */
const translate = useTranslateRef([
  'translate-configuration-storage',
  'translate-configuration-storage-document',
  'translate-configuration-storage-document_description',
  'translate-configuration-storage-local',
  'translate-configuration-storage-local_description'
] as const)

const {
  inDocument,
  inLocal
} = useConfigurationStorage()
</script>

<template>
  <div class="translate-configuration-storage">
    <D1Group :label="translate['translate-configuration-storage']">
      <D1Checkbox
        v-model="inDocument"
        :label="translate['translate-configuration-storage-document']"
        :description="translate['translate-configuration-storage-document_description']"
      />
      <D1Checkbox
        v-model="inLocal"
        :label="translate['translate-configuration-storage-local']"
        :description="translate['translate-configuration-storage-local_description']"
      />
    </D1Group>
  </div>
</template>

<style lang="scss"></style>
