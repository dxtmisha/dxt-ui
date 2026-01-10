<script setup lang="ts">
import { computed } from 'vue'
import { type WikiStorybook } from '@dxtmisha/wiki'

import DxtTestBlock from './DxtTestBlock.vue'
import DxtTestWikiProps from './DxtTestWikiProps.vue'

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
    <DxtTestWikiProps :list="list"/>
  </DxtTestBlock>
</template>

<style lang="scss">
.dxt-test-wiki {

}
</style>
