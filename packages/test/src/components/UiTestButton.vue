<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button class="ui-test-button">{{ label }}</button>
</template>

<style lang="scss">
.ui-test-button {
  padding: 0 16px;

  height: 40px;

  color: oklch(98.5% 0 0);
  background-color: oklch(58.8% 0.158 241.966);
  border-radius: 8px;
}
</style>
