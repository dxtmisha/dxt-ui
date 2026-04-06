<script setup lang="ts">
import { computed, provide } from 'vue'
import { replaceComponentName } from '@dxtmisha/functional-basic'
import { type WikiStorybook } from '@dxtmisha/wiki'
import { useWikiItemFocus } from '../../composables/useWikiItemFocus'

import DxtTestBlock from '../DxtTestBlock.vue'
import DxtTestWikiDemo from './DxtTestWikiDemo.vue'
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

const { focus } = useWikiItemFocus()

const name = computed(() => `${props.design}${props.wiki.getName()}`)
const propsName = computed(() => `type ${props.wiki.getName()}Props`)
const emitsName = computed(() => `type ${props.wiki.getName()}Emits`)
const exposeName = computed(() => `interface ${props.wiki.getName()}Expose`)
const slotsName = computed(() => `interface ${props.wiki.getName()}Slots`)

const list = computed(() => props.wiki.getWikiObject())
const values = computed(() => props.wiki.getFilteredValues())

const aiRender = computed(
  () => replaceComponentName(
    props.wiki.getAiRender(),
    props.wiki.getName(),
    name.value
  )
)
const aiDescription = computed(
  () => replaceComponentName(
    props.wiki.getAiDescription(),
    props.wiki.getName(),
    name.value
  )
)

/**
 * Show wiki if not hidden and focus is all or component name/
 * Показывает wiki, если он не скрыт, а фокус установлен на "all" или имя компонента
 */
const aiShow = computed(() =>
  !props.wiki.getAiHide()
  && (
    focus.value === 'all'
    || focus.value === name.value
  )
)

provide('name', name)
provide('component', props.component)
provide('values', values)
</script>

<template>
  <DxtTestBlock
    v-if="aiShow"
    :title="name"
    :anchor="name"
    class="dxt-test-wiki"
  >
    <template v-if="aiRender">
      <DxtTestWikiTitle label="Demo"/>
      <pre class="dxt-test-wiki__pre">{{ aiRender }}</pre>
    </template>

    <template v-if="aiDescription">
      <DxtTestWikiTitle label="Description"/>
      <div class="dxt-test-wiki__pre">{{ aiDescription }}</div>
    </template>

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

    <div class="dxt-test-wiki__description">
      Enumeration of some properties
    </div>

    <div class="dxt-test-wiki__props">
      <DxtTestWikiPropItem
        v-for="(item, key) of list"
        :key="key"
        :item="item"
        class="dxt-test-wiki__props__item"
      >
        <template v-if="item.name in $slots" #[item.name]="slotProps">
          <slot :name="item.name" v-bind="slotProps"/>
        </template>
        <template v-else-if="('render' in $slots)" #render="binds">
          <slot name="render" v-bind="binds"/>
        </template>
      </DxtTestWikiPropItem>
    </div>
  </DxtTestBlock>
</template>

<style lang="scss">
.dxt-test-wiki {
  padding: 8px;

  border: 4px solid oklch(92.8% 0.006 264.531);
  border-radius: 8px;

  &__pre {
    margin: 0;
    padding: 0;

    font-size: 12px;
    line-height: 16px;
  }

  &__description {
    padding-top: 8px;

    font-size: 12px;
    font-style: italic;
    opacity: 0.6;
  }

  &__props {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid oklch(92.8% 0.006 264.531);

    &__item {
      flex: 1;
      flex-basis: 72%;
    }
  }
}
</style>
