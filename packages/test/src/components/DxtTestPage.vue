<script setup lang="ts">
defineOptions({
  name: 'DxtTestPage'
})

defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <main class="dxt-test-page">
    <h1 class="dxt-test-page__title">{{ title }}</h1>
    <div v-if="description" class="dxt-test-page__description">{{ description }}</div>
    <slot/>
  </main>
</template>

<style lang="scss">
@use "@dxtmisha/styles" as dxt;

.dxt-test-page {
  @include dxt.flexStretchY;
  gap: 16px;
  padding: 16px 8px;

  max-width: 1980px;

  &__title {
    margin: 0;
    padding: 0;

    font-size: 28px;
    line-height: 36px;
  }

  &__description {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
