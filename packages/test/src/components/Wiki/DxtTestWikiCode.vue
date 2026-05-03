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
  font-size: 12px;
  line-height: 16px;
}
</style>
