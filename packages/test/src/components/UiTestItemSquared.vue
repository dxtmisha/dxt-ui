<script setup lang="ts">
import { computed } from 'vue'
import UiTestLabel from './UiTestLabel.vue'

const props = defineProps<{
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>()

const classes = computed(() => ({
  [`ui-test-item-squared--size--${props.size}`]: props.size
}))
</script>

<template>
  <div :class="classes" class="ui-test-item-squared">
    <UiTestLabel v-if="label" :label="label"/>
    <slot/>
  </div>
</template>

<style lang="scss">
@use '@dxt-ui/styles' as ui;

.ui-test-item-squared {
  --ui-test-item-squared-size: 256px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  @include ui.squared(var(--ui-test-item-squared-size));
  background-color: white;

  &--size {
    &--xs {
      --ui-test-item-squared-size: 40px;
    }

    &--sm {
      --ui-test-item-squared-size: 64px;
    }

    &--md {
      --ui-test-item-squared-size: 128px;
    }

    &--lg {
      --ui-test-item-squared-size: 256px;
    }

    &--xl {
      --ui-test-item-squared-size: 384px;
    }
  }
}
</style>
