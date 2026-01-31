<script setup lang="ts">
defineOptions({
  name: 'DxtTestButton'
})

defineProps<{
  label?: string
}>()
</script>

<template>
  <button class="dxt-test-button">
    {{ label }}
    <slot/>
  </button>
</template>

<style lang="scss">
.dxt-test-button {
  padding: 0 16px;

  height: 32px;

  color: oklch(27.9% 0.041 260.031);
  background-color: oklch(92.9% 0.013 255.508);
  border-radius: 4px;

  &:hover {
    background-color: oklch(86.9% 0.022 252.894);
  }
}
</style>
