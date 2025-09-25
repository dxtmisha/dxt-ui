<script setup lang="ts">
import { toArray } from '@dxt-ui/functional'
import {
  UiPlayerLiteDefaults,
  type UiPlayerLiteEmits,
  type UiPlayerLiteProps,
  type UiPlayerLiteSlots
} from './types'

defineOptions({
  name: 'UiPlayerLite'
})

withDefaults(defineProps<UiPlayerLiteProps>(), UiPlayerLiteDefaults)
defineEmits<UiPlayerLiteEmits>()
defineSlots<UiPlayerLiteSlots>()

const array = toArray('test')
</script>

<template>
  <div class="ui-player-lite">{{ array }}</div>
</template>

<style lang="scss">
.ui-player-lite {
  // Your styles here
}
</style>
