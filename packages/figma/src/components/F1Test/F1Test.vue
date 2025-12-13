<script setup lang="ts">
import {
  F1TestDefaults,
  type F1TestEmits,
  type F1TestProps,
  type F1TestSlots
} from './types'

defineOptions({
  name: 'F1Test'
})

withDefaults(defineProps<F1TestProps>(), F1TestDefaults)
defineEmits<F1TestEmits>()
defineSlots<F1TestSlots>()
</script>

<template>
  <div class="f1-test">{{ value }}</div>
</template>

<style lang="scss">
.f1-test {
  color: red;
}
</style>
