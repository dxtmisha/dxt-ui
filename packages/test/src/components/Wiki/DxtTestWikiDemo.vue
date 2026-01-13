<script setup lang="ts">
import { computed, type ComputedRef, inject } from 'vue'
import { encodeAttribute, forEach } from '@dxtmisha/functional-basic'

import DxtTestWikiCode from './DxtTestWikiCode.vue'

import type { TestWikiSlotRender } from '../../types/wikiTypes'

defineOptions({
  name: 'DxtTestWikiDemo'
})

const props = defineProps<{
  args?: Record<string, any>
}>()

defineSlots<TestWikiSlotRender>()

const nameInject = inject<any>('name')
const componentInject = inject<any>('component')
const valuesInject = inject<ComputedRef<Record<string, any>>>('values')

const classDemo = {
  item: 'dxt-test-wiki-demo__item'
}
const argsFull = computed(() => ({
  ...valuesInject?.value,
  ...props.args
}))
const code = computed(() => {
  const props: string[] = forEach(argsFull.value, (value, prop) => {
    if (value === true) {
      return `&nbsp;&nbsp;${prop}<br/>`
    }

    return `&nbsp;&nbsp;${prop}="${encodeAttribute(value)}"<br/>`
  })

  return `
&lt;${nameInject.value}<br/>
${props.join('')}
/&gt;
  `.trim()
})
</script>

<template>
  <div v-if="componentInject" class="dxt-test-wiki-demo">
    <DxtTestWikiCode>
      <div v-html="code"/>
    </DxtTestWikiCode>
    <div class="dxt-test-wiki-demo__content">
      <slot name="render" :args="argsFull" :classDemo="classDemo">
        <div :class="classDemo.item">
          <component :is="componentInject" v-bind="argsFull"/>
        </div>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
@use "@dxtmisha/styles" as dxt;

.dxt-test-wiki-demo {
  @include dxt.flexInlineX;
  justify-content: flex-start;
  gap: 8px;
  padding: 4px;
  border: 2px solid oklch(96.7% 0.003 264.542);
  border-radius: 4px;

  &__content {
    @include dxt.flexX;
    justify-content: flex-start;
    gap: 8px;
    position: relative;
  }

  &__item {
    padding: 4px;
    background-color: oklch(96.7% 0.003 264.542);
    border-right: 4px;
  }
}
</style>
