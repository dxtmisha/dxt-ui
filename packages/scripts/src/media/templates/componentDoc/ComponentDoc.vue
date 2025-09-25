<script setup lang="ts">
import {
  ComponentDocDefaults,
  type ComponentDocEmits,
  type ComponentDocProps,
  type ComponentDocSlots
} from './types'

defineOptions({
  name: 'ComponentDoc'
})

withDefaults(defineProps<ComponentDocProps>(), ComponentDocDefaults)
defineEmits<ComponentDocEmits>()
defineSlots<ComponentDocSlots>()
</script>

<template>
  <div class="component-doc"></div>
</template>

<style lang="scss">
.component-doc {
  // Your styles here
}
</style>
