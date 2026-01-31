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

  height: 40px;

  color: oklch(97% 0.014 254.604);
  background-color: oklch(62.3% 0.214 259.815);
  border-radius: 8px;
}
</style>
