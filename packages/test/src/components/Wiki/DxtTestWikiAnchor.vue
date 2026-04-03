<script setup lang="ts">
import { computed } from 'vue'
import { forEach } from '@dxtmisha/functional'
import { useWikiItemFocus } from '../../composables/useWikiItemFocus'

defineOptions({
  name: 'DxtTestWikiAnchor'
})

const props = defineProps<{
  list: ({ name: string })[]
}>()

const { setFocus } = useWikiItemFocus()

const anchorList = computed(() => {
  return forEach(
    props.list,
    item => item.name.replace(/AiWiki$/, '')
  ).sort()
})
</script>

<template>
  <div class="dxt-test-wiki-anchor">
    <a @click="setFocus('all')" href="#">All</a>
    <div
      v-for="item in anchorList"
      :key="item"
      class="dxt-test-wiki-anchor__item"
    >
      <a @click="setFocus(item)" :href="`#${item}`">{{ item }}</a>
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
