<script setup lang="ts">
import DxtTestWikiCode from './DxtTestWikiCode.vue'

defineOptions({
  name: 'DxtTestWikiTitle'
})

defineProps<{
  label: string
  type?: string
}>()
</script>

<template>
  <h4 class="dxt-test-wiki-title">
    {{ label }}
    <DxtTestWikiCode v-if="type" :code="type"/>
  </h4>
</template>

<style lang="scss">
@use "@dxtmisha/styles" as dxt;

.dxt-test-wiki-title {
  @include dxt.flexX;
  gap: 8px;

  margin: 0;
  padding: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
</style>
