<script setup lang="ts">
import { computed } from 'vue'
import UiTestLabel from './UiTestLabel.vue'

const props = defineProps<{
  label?: string
  isPadding?: boolean
}>()

const classes = computed(() => ({
  'ui-test-item-full--padding': props.isPadding
}))
</script>

<template>
  <div :class="classes" class="ui-test-item-full">
    <UiTestLabel v-if="label" :label="label"/>
    <slot/>
  </div>
</template>

<style lang="scss">
@use '@dxt-ui/styles' as ui;

.ui-test-item-full {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: white;

  &--padding {
    padding: 8px 16px;
  }
}
</style>
