<script setup lang="ts">
defineOptions({
  name: 'DxtTestBlock'
})

const props = defineProps<{
  title?: string
  description?: string
  anchor?: string
}>()

const onClick = () => {
  if (props.anchor) {
    location.hash = props.anchor
  }
}
</script>

<template>
  <div :id="anchor" class="dxt-test-block">
    <h3
      class="dxt-test-block__title"
      :class="{ 'dxt-test-block__title--link': anchor }"
      @click="onClick"
    >
      {{ title }}
    </h3>
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

    &--link {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__description {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
