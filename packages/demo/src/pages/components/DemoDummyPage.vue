<script setup lang="ts">
import { ref } from 'vue'
import type { DummyExpose } from '@dxtmisha/constructor/Dummy'
import type { DummyProps } from '@dxtmisha/d1/D1Dummy'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

type DummyExposeTarget = DummyExpose & {
  elementHtml?: HTMLDivElement
}

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const sizeList: NonNullable<DummyProps['size']>[] = [
  'x',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl'
]

const paletteList: NonNullable<DummyProps['palette']>[] = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'black',
  'white'
]

const dynamicSizeIndex = ref<number>(3)
const dynamicPaletteIndex = ref<number>(10)
const showDynamicSlot = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const dummyTarget = ref<DummyExposeTarget | null>(null)
const elementInspection = ref<string>('Not inspected')

const currentDynamicSize = (): NonNullable<DummyProps['size']> => {
  return sizeList[dynamicSizeIndex.value % sizeList.length] ?? 'md'
}

const currentDynamicPalette = (): NonNullable<DummyProps['palette']> => {
  return paletteList[dynamicPaletteIndex.value % paletteList.length] ?? 'blue'
}

const trackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const cycleDynamicSize = (): void => {
  dynamicSizeIndex.value = (dynamicSizeIndex.value + 1) % sizeList.length
}

const cycleDynamicPalette = (): void => {
  dynamicPaletteIndex.value = (dynamicPaletteIndex.value + 1) % paletteList.length
}

const inspectElement = (): void => {
  const htmlElement = dummyTarget.value?.elementHtml
  elementInspection.value = htmlElement
    ? `${htmlElement.tagName} (${htmlElement.className})`
    : 'Unavailable'
  trackEvent('inspect', { elementInspection: elementInspection.value })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Dummy" class="demo-dummy-page">
    <D1Section>
      <D1Group label="Basic & Default Slot">
        <DemoFlex>
          <D1Dummy/>
          <D1Dummy>Slot content</D1Dummy>
          <D1Dummy size="lg">
            <span>Structured HTML content</span>
          </D1Dummy>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes (All 10)">
        <DemoFlex>
          <D1Dummy
            v-for="sizeName in sizeList"
            :key="sizeName"
            :size="sizeName"
          >
            {{ sizeName }}
          </D1Dummy>
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <DemoFlex>
          <D1Dummy
            v-for="paletteName in paletteList"
            :key="paletteName"
            :palette="paletteName"
            size="sm"
          >
            {{ paletteName }}
          </D1Dummy>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive Controls & Dynamic Props">
        <DemoFlex align="center">
          <D1Button label="Cycle Size" size="sm" outline @click="cycleDynamicSize"/>
          <D1Button label="Cycle Palette" size="sm" outline @click="cycleDynamicPalette"/>
          <D1Button label="Toggle Slot" size="sm" outline @click="showDynamicSlot = !showDynamicSlot"/>
        </DemoFlex>
        <D1Dummy
          :size="currentDynamicSize()"
          :palette="currentDynamicPalette()"
        >
          <template v-if="showDynamicSlot">
            {{ `Size: ${currentDynamicSize()}, Palette: ${currentDynamicPalette()}` }}
          </template>
        </D1Dummy>
        <DemoValue
          label="Dynamic Props"
          :value="{
            size: currentDynamicSize(),
            palette: currentDynamicPalette(),
            showSlot: showDynamicSlot
          }"
        />
      </D1Group>

      <D1Group label="External Attrs, Events & Expose (elementHtml)">
        <DemoFlex align="center">
          <D1Dummy
            ref="dummyTarget"
            size="md"
            palette="blue"
            data-testid="demo-dummy-interactive"
            @click="trackEvent('click', { source: 'demo-dummy-interactive' })"
          >
            Click me
          </D1Dummy>
          <D1Button label="Inspect elementHtml" size="sm" outline @click="inspectElement"/>
        </DemoFlex>
        <DemoValue label="elementHtml" :value="elementInspection"/>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (Role, Label & Keyboard)">
        <DemoFlex>
          <D1Dummy
            size="sm"
            palette="indigo"
            role="region"
            aria-label="Accessible placeholder container"
            tabindex="0"
            @keydown.enter="trackEvent('keydown-enter', { key: 'Enter' })"
            @keydown.space.prevent="trackEvent('keydown-space', { key: 'Space' })"
          >
            Focusable ARIA region
          </D1Dummy>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <D1Dummy size="sm">{{ '' }}</D1Dummy>
          <D1Dummy size="sm">   </D1Dummy>
          <D1Dummy size="sm">{{ 0 }}</D1Dummy>
          <D1Dummy size="sm">A</D1Dummy>
          <D1Dummy size="sm">Tiếng Việt / Кириллица / 🚀 &amp; &lt;&gt;</D1Dummy>
          <D1Dummy size="sm">&lt;img src=x onerror=alert(1)&gt;</D1Dummy>
          <D1Dummy size="md">
            Very long multi-sentence placeholder content designed to verify wrapping and vertical spacing inside a standard D1Dummy container.
          </D1Dummy>
          <DemoBox class="demo-dummy-page__narrow" size="sm">
            <D1Dummy size="sm" class="demo-dummy-page__unbroken">
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </D1Dummy>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1Dummy
          v-if="isLifecycleMounted"
          size="sm"
          palette="emerald"
        >
          Mounted Dummy
        </D1Dummy>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-dummy-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
  }

  &__unbroken {
    max-width: 100%;
    overflow-wrap: anywhere;
  }
}
</style>
