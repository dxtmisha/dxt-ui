<script setup lang="ts">
import {
  UiDemoDefaults,
  type UiDemoEmits,
  type UiDemoProps,
  type UiDemoSlots
} from './types'

defineOptions({
  name: 'UiDemo'
})

withDefaults(defineProps<UiDemoProps>(), UiDemoDefaults)
defineEmits<UiDemoEmits>()
defineSlots<UiDemoSlots>()
</script>

<template>
  <div class="ui-demo"></div>
</template>

<style lang="scss">
.ui-demo {
  color: red;
}
</style>
