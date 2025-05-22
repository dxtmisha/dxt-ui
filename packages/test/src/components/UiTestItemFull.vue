<script setup lang="ts">
import { computed } from 'vue'
import UiTestLabel from './UiTestLabel.vue'

const props = withDefaults(
  defineProps<{
    label?: string
    isFlex?: boolean
    isPadding?: boolean
    background?: boolean
    inverse?: boolean
  }>(),
  {
    isFlex: true,
    background: true
  }
)

const classes = computed(() => ({
  'ui-test-item-full--flex': props.isFlex,
  'ui-test-item-full--padding': props.isPadding,
  'ui-test-item-full--background': props.background,
  'ui-test-item-full--inverse': props.inverse
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

  width: 100%;

  border-radius: 4px;

  &--flex {
    display: flex;
    gap: 4px;
  }

  &--flexCenter {
    align-items: center;
    justify-content: center;
  }

  &--padding {
    padding: 8px 16px;
  }

  &--background {
    background-color: white;
  }

  &--inverse {
    background-color: oklch(26.9% 0 0);
  }
}
</style>
