<script setup lang="ts">
import { ref } from 'vue'
import type { DummyExpose } from '@dxtmisha/constructor/Dummy'
import type { DummyProps } from '@dxtmisha/d1/Dummy'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const sizes: NonNullable<DummyProps['size']>[] = [
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

const palettes: NonNullable<DummyProps['palette']>[] = [
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

const dummyRef = ref<DummyExpose | null>(null)
const elementTag = ref<string>('Not inspected')

const inspectElement = () => {
  elementTag.value = dummyRef.value?.elementHtml?.tagName ?? 'Unavailable'
  onEvent('inspect', elementTag.value)
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Dummy" class="demo-dummy-page">
    <D1Section>
      <D1Group label="Basic & Default Slot">
        <DemoFlex>
          <D1Dummy />
          <D1Dummy>Slot content</D1Dummy>
          <D1Dummy size="lg">
            <span>Structured content</span>
          </D1Dummy>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex>
          <D1Dummy
            v-for="size in sizes"
            :key="size"
            :size="size"
          >
            {{ size }}
          </D1Dummy>
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes">
        <DemoFlex>
          <D1Dummy
            v-for="palette in palettes"
            :key="palette"
            :palette="palette"
            size="sm"
          >
            {{ palette }}
          </D1Dummy>
        </DemoFlex>
      </D1Group>

      <D1Group label="External Attrs, Events & Expose (elementHtml)">
        <DemoFlex>
          <D1Dummy
            ref="dummyRef"
            size="md"
            palette="blue"
            data-testid="demo-dummy-interactive"
            @click="onEvent('click')"
          >
            Click me
          </D1Dummy>
          <D1Button label="Inspect elementHtml" outline @click="inspectElement" />
        </DemoFlex>
        <DemoValue :value="elementTag" label="elementHtml Tag" />
        <DemoValue :value="eventName" label="Event" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
