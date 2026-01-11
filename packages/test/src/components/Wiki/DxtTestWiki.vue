<script setup lang="ts">
import { computed, provide } from 'vue'
import { type WikiStorybook } from '@dxtmisha/wiki'

import DxtTestBlock from '../DxtTestBlock.vue'
import DxtTestWikiDemo from './DxtTestWikiDemo.vue'
import DxtTestWikiProps from './DxtTestWikiProps.vue'
import DxtTestWikiTitle from './DxtTestWikiTitle.vue'
import type { TestWikiDemoClasses } from '../../types/wikiTypes.ts'

defineOptions({
  name: 'DxtTestWiki'
})

const props = defineProps<{
  design: string
  wiki: WikiStorybook
  component: any
}>()

defineSlots<{
  render(
    args: Record<string, any>,
    classDemo: TestWikiDemoClasses
  ): any
}>()

const name = computed(() => `${props.design}${props.wiki.getName()}`)
const propsName = computed(() => `interface ${props.wiki.getName()}Props`)
const emitsName = computed(() => `type ${props.wiki.getName()}Emits`)
const exposeName = computed(() => `interface ${props.wiki.getName()}Expose`)
const slotsName = computed(() => `interface ${props.wiki.getName()}Slots`)
const description = computed(() => props.wiki.getDescription())
const list = computed(() => props.wiki.getWikiObject())
const values = computed(() => props.wiki.getFilteredValues())

provide('name', name)
provide('component', props.component)
provide('values', values)
</script>

<template>
  <DxtTestBlock
    :title="name"
    :description="description"
    class="dxt-test-wiki"
  >
    <div>
      <DxtTestWikiDemo>
        <template v-if="('render' in $slots)" #render="{ args, classDemo }">
          <slot name="render" :args="args" :classDemo="classDemo"/>
        </template>
      </DxtTestWikiDemo>
    </div>
    <DxtTestWikiTitle :type="propsName" label="Props"/>
    <DxtTestWikiProps :list="list"/>
    <DxtTestWikiTitle :type="emitsName" label="Emits"/>
    <DxtTestWikiTitle :type="exposeName" label="Expose"/>
    <DxtTestWikiTitle :type="slotsName" label="Slots"/>
  </DxtTestBlock>
</template>

<style lang="scss">
.dxt-test-wiki {
  padding-top: 16px;
  border-top: 4px solid oklch(92.8% 0.006 264.531);
}
</style>
