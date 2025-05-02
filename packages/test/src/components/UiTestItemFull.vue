<script setup lang="ts">
import { computed } from 'vue'
import UiTestLabel from './UiTestLabel.vue'

const props = withDefaults(
  defineProps<{
    label?: string
    isFlex?: boolean
    isPadding?: boolean
  }>(),
  {
    isFlex: true
  }
)

const classes = computed(() => ({
  'ui-test-item-full--flex': props.isFlex,
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

  width: 100%;
  background-color: white;

  &--flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--padding {
    padding: 8px 16px;
  }
}
</style>
