<script setup lang="ts">
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
</script>

<template>
  <div class="ui-player-lite"></div>
</template>

<style lang="scss">
.ui-player-lite {
  // Your styles here
}
</style>
