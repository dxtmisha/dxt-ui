<script setup lang="ts">
import DxtTestWikiPropItem from './DxtTestWikiPropItem.vue'
import { type WikiStorybookProp } from '@dxtmisha/wiki'

defineOptions({
  name: 'DxtTestWikiProps'
})

defineProps<{
  list: WikiStorybookProp[]
}>()
</script>

<template>
  <DxtTestWikiPropItem
    v-for="(item, key) of list"
    :key="key"
    :item="item"
  />
</template>

<style lang="scss"></style>
