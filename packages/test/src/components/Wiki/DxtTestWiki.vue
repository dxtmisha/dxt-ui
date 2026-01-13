<script setup lang="ts">
import { computed, provide } from 'vue'
import { type WikiStorybook } from '@dxtmisha/wiki'

import DxtTestBlock from '../DxtTestBlock.vue'
import DxtTestWikiDemo from './DxtTestWikiDemo.vue'
import DxtTestWikiPossibilities from './DxtTestWikiPossibilities.vue'
import DxtTestWikiTitle from './DxtTestWikiTitle.vue'
import DxtTestWikiPropItem from './DxtTestWikiPropItem.vue'

import type { TestWikiSlotRender } from '../../types/wikiTypes'

defineOptions({
  name: 'DxtTestWiki'
})

const props = defineProps<{
  design: string
  wiki: WikiStorybook
  component: any
}>()

defineSlots<{
  [K in string]?: TestWikiSlotRender['render']
}>()

const name = computed(() => `${props.design}${props.wiki.getName()}`)
const propsName = computed(() => `interface ${props.wiki.getName()}Props`)
const emitsName = computed(() => `type ${props.wiki.getName()}Emits`)
const exposeName = computed(() => `interface ${props.wiki.getName()}Expose`)
const slotsName = computed(() => `interface ${props.wiki.getName()}Slots`)

const description = computed(() => props.wiki.getDescription())
const possibilities = computed(() => props.wiki.getPossibilities())
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
    <DxtTestWikiPossibilities :possibilities="possibilities"/>

    <div>
      <DxtTestWikiDemo>
        <template v-if="('render' in $slots)" #render="binds">
          <slot name="render" v-bind="binds"/>
        </template>
      </DxtTestWikiDemo>
    </div>

    <DxtTestWikiTitle :type="emitsName" label="Emits"/>
    <DxtTestWikiTitle :type="exposeName" label="Expose"/>
    <DxtTestWikiTitle :type="slotsName" label="Slots"/>
    <DxtTestWikiTitle :type="propsName" label="Props"/>

    <DxtTestWikiPropItem
      v-for="(item, key) of list"
      :key="key"
      :item="item"
    >
      <template v-if="item.name in $slots" #[item.name]="slotProps">
        <slot :name="item.name" v-bind="slotProps"/>
      </template>
      <template v-else-if="('render' in $slots)" #render="binds">
        <slot name="render" v-bind="binds"/>
      </template>
    </DxtTestWikiPropItem>
  </DxtTestBlock>
</template>

<style lang="scss">
.dxt-test-wiki {
  padding: 8px;

  border: 4px solid oklch(92.8% 0.006 264.531);
  border-radius: 8px;
}
</style>
