<script setup lang="ts">
defineProps<{
  label: string
  name: string
}>()
</script>

<template>
  <div class="demo-link">
    <RouterLink :to="{ name }">{{ label }}</RouterLink>
  </div>
</template>

<style lang="scss">

</style>
