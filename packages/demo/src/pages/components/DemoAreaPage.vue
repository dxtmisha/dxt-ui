<script setup lang="ts">
import { computed, defineComponent, h, ref } from 'vue'
import { setAreaValue } from '@dxtmisha/constructor'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const activeArea = ref<string | undefined>('header')
const nestedArea = ref<string | undefined>('inner')

const DemoAreaProvider = defineComponent({
  name: 'DemoAreaProvider',
  props: {
    value: {
      type: String,
      default: undefined
    }
  },
  setup(props, { slots }) {
    setAreaValue(computed(() => props.value))
    return () => h('div', slots.default?.())
  }
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Area">
    <D1Section>
      <D1Group label="Dynamic Area Switching">
        <DemoFlex>
          <D1Button label="header" size="sm" @click="activeArea = 'header'"/>
          <D1Button label="sidebar" size="sm" @click="activeArea = 'sidebar'"/>
          <D1Button label="content" size="sm" @click="activeArea = 'content'"/>
          <D1Button label="unknown (fallback)" size="sm" outline @click="activeArea = 'unknown'"/>
          <D1Button label="undefined (areaDefault)" size="sm" outline @click="activeArea = undefined"/>
        </DemoFlex>
        <DemoValue label="activeArea" :value="activeArea"/>
        <DemoBox>
          <DemoAreaProvider :value="activeArea">
            <D1Area area-default="fallback">
              <template #header>
                <span>Rendered slot: #header</span>
              </template>
              <template #sidebar>
                <span>Rendered slot: #sidebar</span>
              </template>
              <template #content>
                <span>Rendered slot: #content</span>
              </template>
              <template #fallback>
                <span>Rendered slot: #fallback (from areaDefault)</span>
              </template>
              <template #default>
                <span>Rendered slot: #default (when area does not match any named slot)</span>
              </template>
            </D1Area>
          </DemoAreaProvider>
        </DemoBox>
      </D1Group>

      <D1Group label="Default Prop Without Provider (SSR & Standalone)">
        <DemoBox>
          <D1Area area-default="summary">
            <template #summary>
              <span>Standalone area resolved via area-default="summary"</span>
            </template>
            <template #default>
              <span>Default fallback content</span>
            </template>
          </D1Area>
        </DemoBox>
        <DemoBox>
          <D1Area area-default="nonexistent">
            <template #default>
              <span>Fallback to #default slot when areaDefault has no matching named slot</span>
            </template>
          </D1Area>
        </DemoBox>
      </D1Group>

      <D1Group label="Nested Providers & Override">
        <DemoFlex>
          <D1Button label="Use inner" size="sm" @click="nestedArea = 'inner'"/>
          <D1Button label="Clear inner (inherit outer)" size="sm" outline @click="nestedArea = undefined"/>
        </DemoFlex>
        <DemoBox>
          <DemoAreaProvider value="outer">
            <DemoAreaProvider :value="nestedArea">
              <D1Area>
                <template #inner>
                  <span>Resolved from inner provider: #inner</span>
                </template>
                <template #outer>
                  <span>Inherited from outer provider: #outer</span>
                </template>
                <template #default>
                  <span>Default fallback</span>
                </template>
              </D1Area>
            </DemoAreaProvider>
          </DemoAreaProvider>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Prototype Key Guard">
        <DemoBox>
          <D1Area area-default="toString">
            <template #default>
              <span>Safe #default fallback when areaDefault is Object.prototype key "toString"</span>
            </template>
          </D1Area>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
