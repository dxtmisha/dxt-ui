<script setup lang="ts">
defineOptions({
  name: 'C2TestTitle'
})

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="ui-test-title">{{ title }}</div>
</template>

<style lang="scss">
.ui-test-title {
  padding: 4px 0 8px;

  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
}
</style>
