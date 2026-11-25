<script setup lang="ts">
import { computed, defineComponent, h, ref } from 'vue'
import { setAreaValue } from '@dxtmisha/constructor'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const activeArea = ref<string | undefined>('header')
const dynamicDefaultArea = ref<string>('fallback')
const nestedArea = ref<string | undefined>('inner')
const isAreaMounted = ref<boolean>(true)
const isProviderMounted = ref<boolean>(true)

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

const onToggleDefaultArea = (): void => {
  dynamicDefaultArea.value = dynamicDefaultArea.value === 'fallback'
    ? 'secondary-fallback'
    : 'fallback'
}

const onToggleAreaMounted = (): void => {
  isAreaMounted.value = !isAreaMounted.value
}

const onToggleProviderMounted = (): void => {
  isProviderMounted.value = !isProviderMounted.value
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Area">
    <D1Section>
      <D1Group label="Dynamic Area Switching & Scoped Slots">
        <DemoFlex>
          <D1Button label="header" size="sm" @click="activeArea = 'header'"/>
          <D1Button label="sidebar" size="sm" @click="activeArea = 'sidebar'"/>
          <D1Button label="content" size="sm" @click="activeArea = 'content'"/>
          <D1Button label="unknown (fallback)" size="sm" outline @click="activeArea = 'unknown'"/>
          <D1Button label="undefined (areaDefault)" size="sm" outline @click="activeArea = undefined"/>
          <D1Button label="Switch areaDefault" size="sm" secondary @click="onToggleDefaultArea"/>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="activeArea" :value="activeArea"/>
          <DemoValue label="areaDefault" :value="dynamicDefaultArea"/>
        </DemoFlex>
        <DemoBox>
          <DemoAreaProvider :value="activeArea">
            <D1Area :area-default="dynamicDefaultArea">
              <template #header="slotProps">
                <span>Rendered slot: #header (scoped: {{ slotProps }})</span>
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
              <template #secondary-fallback>
                <span>Rendered slot: #secondary-fallback (updated areaDefault)</span>
              </template>
              <template #default="slotProps">
                <span>Rendered slot: #default (scoped: {{ slotProps }})</span>
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
        <DemoBox>
          <D1Area area-default="empty-no-slots"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Nested Providers & Override">
        <DemoFlex>
          <D1Button label="Use inner" size="sm" @click="nestedArea = 'inner'"/>
          <D1Button label="Clear inner (inherit outer)" size="sm" outline @click="nestedArea = undefined"/>
          <DemoValue label="nestedArea" :value="nestedArea"/>
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

      <D1Group label="Accessibility (Semantic Landmarks)">
        <DemoBox>
          <D1Area area-default="navigation">
            <template #navigation>
              <nav aria-label="Area landmark navigation" role="region" aria-live="polite">
                Accessible landmark slot rendered without extra wrapper nodes
              </nav>
            </template>
          </D1Area>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary, Prototype Guard & Edge Cases">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Area area-default="">
              <template #default>
                <span>Fallback when area-default is empty string ""</span>
              </template>
            </D1Area>
          </DemoBox>
          <DemoBox>
            <D1Area area-default="   ">
              <template #default>
                <span>Fallback when area-default is whitespace "   "</span>
              </template>
            </D1Area>
          </DemoBox>
          <DemoBox>
            <D1Area area-default="0">
              <template #0>
                <span>Matched slot #0 for area-default="0"</span>
              </template>
              <template #default>
                <span>Default fallback</span>
              </template>
            </D1Area>
          </DemoBox>
          <DemoBox>
            <D1Area area-default="toString">
              <template #default>
                <span>Safe #default fallback for Object.prototype key "toString"</span>
              </template>
            </D1Area>
          </DemoBox>
          <DemoBox>
            <D1Area area-default="constructor">
              <template #default>
                <span>Safe #default fallback for Object.prototype key "constructor"</span>
              </template>
            </D1Area>
          </DemoBox>
          <DemoBox>
            <D1Area area-default="__proto__">
              <template #default>
                <span>Safe #default fallback for "__proto__"</span>
              </template>
            </D1Area>
          </DemoBox>
          <DemoBox class="demo-area-page__narrow">
            <D1Area area-default="unicode">
              <template #unicode>
                <span>
                  SupercalifragilisticexpialidociousUnbrokenAreaTextWithoutSpaces
                  Привет / Học tiếng Việt / 🚀 &lt;img src=x onerror=alert(1)&gt;
                </span>
              </template>
            </D1Area>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="SSR & Lifecycle (Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isProviderMounted ? 'Unmount Provider' : 'Mount Provider'"
            size="sm"
            @click="onToggleProviderMounted"
          />
          <D1Button
            :label="isAreaMounted ? 'Unmount Area' : 'Mount Area'"
            size="sm"
            outline
            @click="onToggleAreaMounted"
          />
          <DemoValue label="Provider Mounted" :value="isProviderMounted"/>
          <DemoValue label="Area Mounted" :value="isAreaMounted"/>
        </DemoFlex>
        <DemoBox v-if="isAreaMounted">
          <DemoAreaProvider v-if="isProviderMounted" value="live">
            <D1Area area-default="standalone">
              <template #live>
                <span>Active injected slot: #live</span>
              </template>
              <template #standalone>
                <span>Provider unmounted fallback: #standalone</span>
              </template>
            </D1Area>
          </DemoAreaProvider>
          <D1Area v-else area-default="standalone">
            <template #standalone>
              <span>Provider unmounted fallback: #standalone</span>
            </template>
          </D1Area>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-area-page {
  &__narrow {
    max-width: 240px;
    overflow-wrap: anywhere;
  }
}
</style>
