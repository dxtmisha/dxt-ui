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
  compact?: boolean
}>()

defineSlots<TestWikiSlotRender>()

const nameInject = inject<any>('name')
const componentInject = inject<any>('component')
const valuesInject = inject<ComputedRef<Record<string, any>>>('values')

const classDemo = {
  item: 'dxt-test-wiki-demo__item'
}
const argsStatus = computed(() => {
  if (props.compact) {
    return { ...props.args }
  }

  return {
    ...valuesInject?.value,
    ...props.args
  }
})
const argsFull = computed(() => ({
  ...valuesInject?.value,
  ...props.args
}))
const code = computed(() => {
  const br: string = props.compact ? '' : '<br/>'
  const nbsp: string = props.compact ? ' ' : '&nbsp;&nbsp;'
  const propsCode: string[] = forEach(argsStatus.value, (value, prop) => {
    if (value === true) {
      return `${nbsp}${prop}${br}`
    }

    if (value === false) {
      return `${nbsp}${prop}="false"${br}`
    }

    const valueString = typeof value === 'object'
      ? JSON.stringify(value)
      : String(value)

    return `${nbsp}${prop}="${encodeAttribute(valueString)}"${br}`
  })

  return `
&lt;${nameInject.value}${br}
${propsCode.join('')}
/&gt;
  `.trim()
})
</script>

<template>
  <div
    v-if="componentInject"
    :class="{ 'dxt-test-wiki-demo--compact': compact }"
    class="dxt-test-wiki-demo"
  >
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
  width: 100%;
  border: 1px solid oklch(86.9% 0.022 252.894);
  background-color: oklch(96.9% 0.016 293.756);

  &__content {
    flex: 1;
    position: relative;
  }

  &--compact {
    flex-grow: 1;
    width: min-content;
  }
}
</style>
