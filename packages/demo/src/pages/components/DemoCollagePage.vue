<script setup lang="ts">
import { ref } from 'vue'
import type { CollageItemProps } from '@dxtmisha/constructor/CollageItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

interface CollageExposed {
  update: () => void
}

const makeTileSvg = (title: string, fill: string, width: number, height: number): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`
    + `<rect width="100%" height="100%" fill="${fill}"/>`
    + `<circle cx="${Math.round(width * 0.25)}" cy="${Math.round(height * 0.35)}" r="${Math.round(Math.min(width, height) * 0.16)}" fill="#ffffff" fill-opacity="0.22"/>`
    + `<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="32" font-weight="600">${title}</text>`
    + '</svg>'

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

const standardImages: CollageItemProps[] = [
  { image: makeTileSvg('Std 1', '#3b82f6', 600, 600), label: 'Standard 1', value: 'std-1' },
  { image: makeTileSvg('Std 2', '#10b981', 600, 600), label: 'Standard 2', value: 'std-2' },
  { image: makeTileSvg('Std 3', '#8b5cf6', 600, 600), label: 'Standard 3', value: 'std-3' },
  { image: makeTileSvg('Std 4', '#f59e0b', 600, 600), label: 'Standard 4', value: 'std-4' }
]

const quiltedImages: CollageItemProps[] = [
  { image: makeTileSvg('Large', '#3b82f6', 800, 800), span: 'large', label: 'Large (2x2)', value: 'q-1' },
  { image: makeTileSvg('Std A', '#10b981', 600, 600), span: 'standard', label: 'Standard', value: 'q-2' },
  { image: makeTileSvg('Tall', '#8b5cf6', 600, 1000), span: 'tall', label: 'Tall (1x2)', value: 'q-3' },
  { image: makeTileSvg('Std B', '#f59e0b', 600, 600), span: 'standard', label: 'Standard', value: 'q-4' },
  { image: makeTileSvg('Wide', '#ec4899', 1000, 500), span: 'wide', label: 'Wide (2x1)', value: 'q-5' }
]

const wovenImages: CollageItemProps[] = [
  { image: makeTileSvg('Woven 1', '#06b6d4', 600, 800), label: 'Woven 1', value: 'w-1' },
  { image: makeTileSvg('Woven 2', '#6366f1', 600, 800), label: 'Woven 2', value: 'w-2' },
  { image: makeTileSvg('Woven 3', '#ec4899', 600, 800), label: 'Woven 3', value: 'w-3' },
  { image: makeTileSvg('Woven 4', '#10b981', 600, 800), label: 'Woven 4', value: 'w-4' },
  { image: makeTileSvg('Woven 5', '#f59e0b', 600, 800), label: 'Woven 5', value: 'w-5' },
  { image: makeTileSvg('Woven 6', '#3b82f6', 600, 800), label: 'Woven 6', value: 'w-6' }
]

const masonryHorizontalImages: CollageItemProps[] = [
  { image: makeTileSvg('16:9', '#3b82f6', 960, 540), label: 'Landscape 16:9', value: 'mh-1' },
  { image: makeTileSvg('1:1', '#10b981', 600, 600), label: 'Square 1:1', value: 'mh-2' },
  { image: makeTileSvg('2:1', '#8b5cf6', 1000, 500), label: 'Panoramic 2:1', value: 'mh-3' },
  { image: makeTileSvg('3:4', '#f59e0b', 600, 800), label: 'Portrait 3:4', value: 'mh-4' },
  { image: makeTileSvg('4:3', '#ec4899', 800, 600), label: 'Standard 4:3', value: 'mh-5' }
]

const masonryVerticalImages: CollageItemProps[] = [
  { image: makeTileSvg('Tall', '#6366f1', 500, 900), label: 'Tall Pin', value: 'mv-1' },
  { image: makeTileSvg('Sq', '#10b981', 600, 600), label: 'Square', value: 'mv-2' },
  { image: makeTileSvg('Port', '#ec4899', 600, 800), label: 'Portrait', value: 'mv-3' },
  { image: makeTileSvg('Land', '#f59e0b', 800, 500), label: 'Landscape', value: 'mv-4' },
  { image: makeTileSvg('Tall 2', '#3b82f6', 540, 880), label: 'Tall Pin 2', value: 'mv-5' },
  { image: makeTileSvg('Std', '#06b6d4', 700, 550), label: 'Standard', value: 'mv-6' }
]

const customKeyImages = [
  { image: makeTileSvg('Zero', '#3b82f6', 600, 600), id: 0, title: '0' },
  { image: makeTileSvg('Uni', '#10b981', 600, 600), id: 'uni-1', title: 'Tiếng Việt / Кириллица / 🚀' },
  { image: makeTileSvg('XSS', '#ec4899', 600, 600), id: 'xss-1', title: '<img src=x onerror=alert(1)>' }
] as unknown as CollageItemProps[]

const selectedItems = ref<string[]>(['std-1', 'std-3'])
const controlEnabled = ref<boolean>(true)
const updateCount = ref<number>(0)
const collageRef = ref<CollageExposed>()
const { eventName, onEvent } = useDemoEvent()

const onManualUpdate = () => {
  collageRef.value?.update()
  updateCount.value += 1
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Collage">
    <D1Section>
      <D1Group label="Standard Variant">
        <D1Collage
          data-testid="demo-collage-standard"
          variant="standard"
          columns="4"
          :images="standardImages"
          :collage-item-attrs="{ collageBarPosition: 'bottom' }"
        />
      </D1Group>

      <D1Group label="Quilted Variant (Spans: Large, Tall, Wide, Standard)">
        <D1Collage
          data-testid="demo-collage-quilted"
          variant="quilted"
          columns="4"
          :images="quiltedImages"
          :collage-item-attrs="{ collageBarPosition: 'bottom' }"
        />
      </D1Group>

      <D1Group label="Woven Variant">
        <D1Collage
          data-testid="demo-collage-woven"
          variant="woven"
          columns="3"
          :images="wovenImages"
          :collage-item-attrs="{ collageBarPosition: 'bottom' }"
        />
      </D1Group>

      <D1Group label="Masonry Horizontal Variant">
        <D1Collage
          ref="collageRef"
          data-testid="demo-collage-masonry-horizontal"
          variant="masonryHorizontal"
          cell-size="160px"
          :images="masonryHorizontalImages"
          :collage-item-attrs="{ collageBarPosition: 'bottom' }"
        />
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-update-btn"
            size="sm"
            outline
            label="Trigger update()"
            @click="onManualUpdate"
          />
        </DemoFlex>
        <DemoValue data-testid="demo-collage-update-output" :value="`updates: ${updateCount}`" />
      </D1Group>

      <D1Group label="Masonry Vertical Variant">
        <D1Collage
          data-testid="demo-collage-masonry-vertical"
          variant="masonryVertical"
          columns="3"
          :images="masonryVerticalImages"
          :collage-item-attrs="{ collageBarPosition: 'bottom' }"
        />
      </D1Group>

      <D1Group label="Selection, Keyboard Control & v-model:selected">
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-toggle-control"
            size="sm"
            outline
            label="Toggle Control"
            @click="controlEnabled = !controlEnabled"
          />
          <D1Button
            data-testid="demo-collage-clear-selected"
            size="sm"
            outline
            label="Clear Selection"
            @click="selectedItems = []"
          />
        </DemoFlex>
        <D1Collage
          v-model:selected="selectedItems"
          data-testid="demo-collage-control"
          :control="controlEnabled"
          variant="standard"
          columns="4"
          :images="standardImages"
          :collage-item-attrs="{ collageBarPosition: 'bottom' }"
        />
        <DemoValue data-testid="demo-collage-selected-output" :value="selectedItems" />
      </D1Group>

      <D1Group label="Custom Keys (keyValue / keyLabel), Boundaries & Empty State">
        <D1Collage
          data-testid="demo-collage-custom-keys"
          variant="standard"
          columns="3"
          key-value="id"
          key-label="title"
          :images="customKeyImages"
          :collage-item-attrs="{ collageBarPosition: 'static' }"
        />
        <D1Collage
          data-testid="demo-collage-empty"
          variant="standard"
          columns="3"
          :images="[]"
        />
      </D1Group>

      <D1Group label="Default Slot & Click Events">
        <D1Collage
          data-testid="demo-collage-slot"
          variant="standard"
          columns="2"
        >
          <D1CollageItem
            :image="standardImages[0].image"
            collage-bar-position="bottom"
            label="Slotted Item 1"
          />
          <D1CollageItem
            :image="standardImages[1].image"
            collage-bar-position="bottom"
            label="Slotted Item 2"
          />
        </D1Collage>
        <D1Collage
          data-testid="demo-collage-events"
          variant="standard"
          columns="4"
          :images="standardImages"
          @click="(event, value) => onEvent('click', event, value)"
          @click-lite="(value) => onEvent('clickLite', value)"
        />
        <DemoValue data-testid="demo-collage-event-output" :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
