<script setup lang="ts">
import { computed } from 'vue'
import { forEach } from '@dxtmisha/functional'

defineOptions({
  name: 'DxtTestWikiAnchor'
})

const props = defineProps<{
  list: ({ name: string })[]
}>()

const anchorList = computed(() => {
  return forEach(
    props.list,
    item => item.name.replace(/AiWiki$/, '')
  ).sort()
})

console.log('props', props.list)
</script>

<template>
  <div class="dxt-test-wiki-anchor">
    <div
      v-for="item in anchorList"
      :key="item"
      class="dxt-test-wiki-anchor__item"
    >
      <a :href="`#${item}`">{{ item }}</a>
    </div>
  </div>
</template>

<style lang="scss">
.dxt-test-wiki-anchor {
  column-count: 6;
  column-gap: 8px;

  &__item {
    break-inside: avoid;
  }
}
</style>
