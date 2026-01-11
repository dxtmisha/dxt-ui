<script setup lang="ts">
defineOptions({
  name: 'DxtTestBlock'
})

defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="dxt-test-block">
    <h3 class="dxt-test-block__title">{{ title }}</h3>
    <div v-if="description" class="dxt-test-block__description">{{ description }}</div>
    <slot/>
  </div>
</template>

<style lang="scss">
@use "@dxtmisha/styles" as dxt;

.dxt-test-block {
  @include dxt.flexStretchY;
  gap: 8px;

  &__title {
    margin: 0;
    padding: 0;

    font-size: 20px;
    line-height: 28px;
  }

  &__description {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
