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
  <div class="ui-player-lite">
    <slot name="top"/>
    status: {{ status }}
    <button @click="$emit('status', 'play')">Go</button>
    <video :src="url" class="ui-player-lite__video"/>
    <slot/>
  </div>
</template>

<style lang="scss">
.ui-player-lite {
  &__video {
    width: 480px;
    height: 270px;
  }
}
</style>
