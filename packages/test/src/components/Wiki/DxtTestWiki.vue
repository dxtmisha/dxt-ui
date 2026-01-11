<script setup lang="ts">
import { computed } from 'vue'
import { type WikiStorybook } from '@dxtmisha/wiki'

import DxtTestBlock from '../DxtTestBlock.vue'
import DxtTestWikiProps from './DxtTestWikiProps.vue'
import DxtTestWikiTitle from './DxtTestWikiTitle.vue'

defineOptions({
  name: 'DxtTestWiki'
})

const props = defineProps<{
  design: string
  wiki: WikiStorybook
}>()

const name = computed(() => `${props.design}${props.wiki.getName()}`)
const description = computed(() => props.wiki.getDescription())
const list = computed(() => props.wiki.getWikiObject())
</script>

<template>
  <DxtTestBlock
    :title="name"
    :description="description"
    class="dxt-test-wiki"
  >
    <DxtTestWikiTitle label="Props"/>
    <DxtTestWikiProps :list="list"/>
  </DxtTestBlock>
</template>

<style lang="scss">
.dxt-test-wiki {
  padding-top: 16px;
  border-top: 4px solid oklch(92.8% 0.006 264.531);
}
</style>
