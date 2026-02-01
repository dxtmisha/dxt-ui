<script setup lang="ts">
import { computed } from 'vue'

import DxtTestWikiCode from './DxtTestWikiCode.vue'
import DxtTestWikiDemo from './DxtTestWikiDemo.vue'

import type { WikiStorybookProp } from '@dxtmisha/wiki'
import type { TestWikiSlotRender } from '../../types/wikiTypes'

defineOptions({
  name: 'DxtTestWikiPropItem'
})

const props = defineProps<{
  item: WikiStorybookProp
}>()

defineSlots<TestWikiSlotRender>()

const name = computed(() => props.item.getName())
const defaultValue = computed(() => props.item.getDefaultValue())
const description = computed(() => props.item.getDescription())
const type = computed(() => props.item.getType())
const options = computed(() => props.item.getOptions())

const isDemo = computed(() => props.item.isDemo())
const demo = computed(() => props.item.getDemo())
const demoOptions = computed(() => props.item.getDemoOptions())
</script>

<template>
  <div class="dxt-test-wiki-prop-item">
    <div class="dxt-test-wiki-prop-item__tilte">
      <span class="dxt-test-wiki-prop-item__name">{{ name }}:</span>
      <DxtTestWikiCode :code="type"/>
    </div>
    <div class="dxt-test-wiki-prop-item__description">{{ description }}</div>
    <div
      v-if="defaultValue !== undefined"
      class="dxt-test-wiki-prop-item__description"
    >
      default value: {{ defaultValue }}
    </div>
    <div class="dxt-test-wiki-prop-item__demo">
      <template v-if="isDemo">
        <template v-if="options">
          <DxtTestWikiDemo
            v-for="option in options"
            :key="option"
            :args="{[name]: option, ...demoOptions}"
          >
            <template v-if="('render' in $slots)" #render="binds">
              <slot name="render" v-bind="binds"/>
            </template>
          </DxtTestWikiDemo>
        </template>
        <DxtTestWikiDemo
          v-else-if="demo"
          :args="{[name]: demo, ...demoOptions}"
        >
          <template v-if="('render' in $slots)" #render="binds">
            <slot name="render" v-bind="binds"/>
          </template>
        </DxtTestWikiDemo>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
@use "@dxtmisha/styles" as dxt;

.dxt-test-wiki-prop-item {
  @include dxt.flexStretchY;
  gap: 4px;

  padding: 4px;
  border: 1px solid oklch(92.8% 0.006 264.531);

  &__tilte {
    @include dxt.flexX;
    gap: 4px;
  }

  &__name {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  &__description {
    font-size: 12px;
    line-height: 16px;
    color: oklch(27.8% 0.033 256.848);
  }

  &__demo {
    @include dxt.flexX;
    flex-wrap: wrap;
    gap: 4px;
  }
}
</style>
