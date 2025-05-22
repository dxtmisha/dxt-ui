<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'C2TestContainer'
})

const props = defineProps<{
  label?: string
  description?: string
  isDark?: boolean
}>()

const classes = computed(() => ({
  'ui-test-container--dark': props.isDark
}))
</script>

<template>
  <div :class="classes" class="ui-test-container">
    <div v-if="label" class="ui-test-container__label">{{ label }}</div>
    <div v-if="description" class="ui-test-container__description">{{ description }}</div>
    <div class="ui-test-container__context">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
@use '@dxt-ui/styles' as ui;

.ui-test-container {
  $this: &;

  margin-bottom: 24px;
  padding: 16px;

  font-size: 16px;
  line-height: 1.08;
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;

  &__label {
    font-size: 18px;
    font-weight: bold;
  }

  &__description {
    font-size: 14px;
    color: #62748e;
  }

  &__context {
    @include ui.flexX;
    align-items: flex-start;
    gap: 16px;
    margin-top: 16px;
  }

  &--dark {
    background-color: #020617;
    border: 2px solid #1e293b;

    #{$this}__label {
      color: #f8fafc;
    }
  }
}
</style>
