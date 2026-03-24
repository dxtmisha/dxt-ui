<script setup lang="ts">
import { computed } from 'vue'

import { TranslateFramesEnabled } from '../../../classes/TranslateFramesEnabled'

import type { TranslateFrameItem } from '../../../types/TranslateTypes'

defineOptions({
  name: 'TranslateKeyCreationFramesList'
})

const props = defineProps<TranslateFrameItem>()

const isEnabled = computed(() => TranslateFramesEnabled.is(props.name))

const toggleEnabled = () => {
  TranslateFramesEnabled.set(props.name, !isEnabled.value)
}
</script>

<template>
  asd232
  <div class="translate-key-creation-frames-item">
    <div class="translate-key-creation-frames-item__image">
      <D1Icon :icon="image"/>
    </div>
    <div class="translate-key-creation-frames-item__name">
      {{ name }}
    </div>
    <div class="translate-key-creation-frames-item__enabled">
      <D1Checkbox
        :value="isEnabled"
        @change-lite="toggleEnabled"
      />
    </div>
  </div>
</template>

<style lang="scss">

</style>
