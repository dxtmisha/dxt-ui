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
    <D1Grid>
      <D1GridItem base="12">
        <div class="translate-key-creation-prefix-app__group">
          <D1Input
            v-model="prefix"
            class="translate-key-creation-prefix-app__input"
            :placeholder="translate['translate-prefix']"
          />
          <D1Button
            text
            icon="genetics"
          />
        </div>
      </D1GridItem>

      <D1GridItem base="12">
        <div class="translate-key-creation-prefix-app__description">
          <D1Textarea
            v-model="description"
            :placeholder="translate['translate-description']"
          />
        </div>
      </D1GridItem>
    </D1Grid>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.translate-key-creation-prefix-app {
  &__group {
    @include ui.flexX();
    column-gap: var(--d1-layout-gapX);
  }

  &__input {
    @include ui.flexDynamic();
  }
}
</style>
