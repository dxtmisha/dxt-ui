<script setup lang="ts">
import {
  D1DemoDefaults,
  type D1DemoEmits,
  type D1DemoProps,
  type D1DemoSlots
} from './types'

defineOptions({
  name: 'D1Demo'
})

withDefaults(defineProps<D1DemoProps>(), D1DemoDefaults)
defineEmits<D1DemoEmits>()
defineSlots<D1DemoSlots>()
</script>

<template>
  <div class="d1-demo">
    <div>Sum:</div>
    <div>
      <slot name="top"/>
    </div>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
    <div @click="$emit('click')">x + y: {{ Number(x) + Number(y) }}</div>
  </div>
</template>

<style lang="scss">
.d1-demo {
  // Your styles here
}
</style>
