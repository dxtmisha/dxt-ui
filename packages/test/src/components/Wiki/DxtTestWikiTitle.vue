<script setup lang="ts">
defineOptions({
  name: 'DxtTestWikiTitle'
})

defineProps<{
  label: string
}>()
</script>

<template>
  <h4 class="dxt-test-wiki-title">{{ label }}</h4>
</template>

<style lang="scss">
.dxt-test-wiki-title {
  margin: 0;
  padding: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
</style>
