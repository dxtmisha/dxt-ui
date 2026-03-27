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
  <D1Cell
    :icon="image"
    :label="name"
  >
    <template #trailing>
      <D1Checkbox
        :value="isEnabled"
        @change-lite="toggleEnabled"
      />
    </template>
  </D1Cell>
</template>

<style lang="scss">

</style>
