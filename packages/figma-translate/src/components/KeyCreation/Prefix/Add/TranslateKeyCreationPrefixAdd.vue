<script setup lang="ts">
import { ref } from 'vue'
import { useTranslateRef } from '@dxtmisha/functional'

defineOptions({
  name: 'TranslateKeyCreationPrefixAdd'
})

/** Translations / Переводы */
const translate = useTranslateRef([
  'translate-prefix',
  'translate-description'
] as const)

const prefix = ref('')
const description = ref('')
</script>

<template>
  <div class="translate-key-creation-prefix-app">
    <div class="translate-key-creation-prefix-app__group">
      <D1Input
        v-model="prefix"
        class="translate-key-creation-prefix-app__input"
        :label="translate['translate-prefix']"
      />
      <D1Button
        text
        icon="genetics"
      />
    </div>
    <div class="translate-key-creation-prefix-app__description">
      <D1Textarea
        v-model="description"
        :label="translate['translate-description']"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.translate-key-creation-prefix-app {
  &__group {
    @include ui.flex();
    column-gap: var(--d1-layout-gapX);
  }

  &__input {
    @include ui.flexDynamic();
  }
}
</style>
