<script setup lang="ts">
defineOptions({
  name: 'DxtTestWikiCode'
})

defineProps<{
  code?: string
}>()
</script>

<template>
  <code class="dxt-test-wiki-code">
    {{ code }}
    <slot/>
  </code>
</template>

<style lang="scss">
.dxt-test-wiki-code {
  padding: 4px;
  font-size: 12px;
  line-height: 16px;
  color: oklch(21% 0.034 264.665);
  background-color: oklch(92.8% 0.006 264.531);
  border-radius: 4px;
}
</style>
