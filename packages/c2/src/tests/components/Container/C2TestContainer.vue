<script setup lang="ts">
defineOptions({
  name: 'C2TestContainer'
})

defineProps<{
  label?: string
  description?: string
}>()
</script>

<template>
  <div class="c2-test-container">
    <div v-if="label" class="c2-test-container__label">{{ label }}</div>
    <div v-if="description" class="c2-test-container__description">{{ description }}</div>
    <div class="c2-test-container__context">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
@use '@dxt-ui/styles' as ui;

.c2-test-container {
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
    gap: 16px;
    margin-top: 16px;
  }
}
</style>
