<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { CollageExpose } from '@dxtmisha/constructor/Collage'
import type { CollageProps } from '@dxtmisha/d1/D1Collage'
import type { CollageItemProps } from '@dxtmisha/d1/D1CollageItem'
import type { ListSelectedList } from '@dxtmisha/functional'
import { image1, image2 } from '@dxtmisha/wiki/media'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const makeTileSvg = (title: string, fill: string, width: number, height: number): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`
    + `<rect width="100%" height="100%" fill="${fill}"/>`
    + `<circle cx="${Math.round(width * 0.25)}" cy="${Math.round(height * 0.35)}" r="${Math.round(Math.min(width, height) * 0.16)}" fill="#ffffff" fill-opacity="0.22"/>`
    + `<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="32" font-weight="600">${title}</text>`
    + '</svg>'

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

const columnOptions: readonly NonNullable<CollageProps['columns']>[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12'
]

const standardImages: CollageItemProps[] = [
  { image: image1, label: 'Standard 1', value: 'std-1', detail: { slot: 1 } },
  { image: image2, label: 'Standard 2', value: 'std-2', detail: { slot: 2 } },
  { image: makeTileSvg('Std 3', '#8b5cf6', 600, 600), label: 'Standard 3', value: 'std-3', detail: { slot: 3 } },
  { image: makeTileSvg('Std 4', '#f59e0b', 600, 600), label: 'Standard 4', value: 'std-4', detail: { slot: 4 } }
]

const quiltedImages: CollageItemProps[] = [
  { image: makeTileSvg('Huge', '#0ea5e9', 900, 900), span: 'huge', label: 'Huge', value: 'q-huge' },
  { image: makeTileSvg('Large', '#3b82f6', 800, 800), span: 'large', label: 'Large (2x2)', value: 'q-1' },
  { image: makeTileSvg('Std A', '#10b981', 600, 600), span: 'standard', label: 'Standard', value: 'q-2' },
  { image: makeTileSvg('Tall', '#8b5cf6', 600, 1000), span: 'tall', label: 'Tall (1x2)', value: 'q-3' },
  { image: makeTileSvg('Wide', '#ec4899', 1000, 500), span: 'wide', label: 'Wide (2x1)', value: 'q-5' },
  { image: makeTileSvg('Banner', '#f97316', 1200, 400), span: 'banner', label: 'Banner', value: 'q-banner' }
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
  { image: makeTileSvg('Empty', '#64748b', 600, 600), id: 'empty-title', title: '' },
  { image: makeTileSvg('Space', '#475569', 600, 600), id: 'space-title', title: '   ' },
  { image: makeTileSvg('Neg', '#0d9488', 600, 600), id: 'neg-1', title: '-12.5' },
  { image: makeTileSvg('Uni', '#10b981', 600, 600), id: 'uni-1', title: 'Tiếng Việt / Кириллица / 🚀' },
  { image: makeTileSvg('XSS', '#ec4899', 600, 600), id: 'xss-1', title: '<img src=x onerror=alert(1)>' }
] as unknown as CollageItemProps[]

const narrowBoxImages: CollageItemProps[] = [
  {
    image: makeTileSvg('Narrow', '#6366f1', 400, 400),
    label: 'SuperLongUnbrokenCollageLabelWithoutAnySpaces1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    value: 'narrow-1'
  }
]

const selectedItems = ref<ListSelectedList>(['std-1', 'std-3'])
const controlEnabled = ref<boolean>(true)
const selectedColumnCount = ref<NonNullable<CollageProps['columns']>>('4')
const updateCount = ref<number>(0)
const isLifecycleMounted = ref<boolean>(true)
const collageRef = ref<CollageExpose | null>(null)
const exposeReadout = ref<string>('No expose action executed yet')

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const recordEvent = (name: string, ...args: unknown[]): void => {
  onEvent(name, ...args)
  try {
    const serialized = args.map((argument) => {
      if (typeof Event !== 'undefined' && argument instanceof Event) {
        return argument.type
      }
      return argument
    })
    eventPayload.value = serialized.length > 0 ? JSON.stringify(serialized) : 'no payload'
  } catch {
    eventPayload.value = name
  }
}

const onManualUpdate = (): void => {
  collageRef.value?.update()
  updateCount.value += 1
  exposeReadout.value = `update() called (${updateCount.value})`
}

const onReadExposeValue = (): void => {
  const value = collageRef.value?.getValue?.()
  const detail = collageRef.value?.getDetail?.()
  exposeReadout.value = `getValue(): ${JSON.stringify(value)} | getDetail(): ${JSON.stringify(detail)}`
}

const onCollageClick = (mouseEvent: MouseEvent, clickValue: EventClickValue): void => {
  recordEvent('click', { eventType: mouseEvent.type, value: clickValue })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Collage">
    <D1Section>
      <D1Group label="Standard Variant & Media Sources">
        <D1Collage
          data-testid="demo-collage-standard"
          variant="standard"
          columns="4"
          :cell-size="60"
          :images="standardImages"
          :collage-item-attrs="{ collageBarAttrs: { position: 'bottom' } }"
        />
      </D1Group>

      <D1Group label="Quilted Variant (All Spans: Standard, Large, Tall, Wide, Huge, Banner)">
        <D1Collage
          data-testid="demo-collage-quilted"
          variant="quilted"
          columns="4"
          :cell-size="60"
          :images="quiltedImages"
          :collage-item-attrs="{ collageBarAttrs: { position: 'bottom' } }"
        />
      </D1Group>

      <D1Group label="Woven Variant">
        <D1Collage
          data-testid="demo-collage-woven"
          variant="woven"
          columns="3"
          :cell-size="80"
          :images="wovenImages"
          :collage-item-attrs="{ collageBarAttrs: { position: 'bottom' } }"
        />
      </D1Group>

      <D1Group label="Masonry Horizontal Variant & Expose API">
        <D1Collage
          ref="collageRef"
          data-testid="demo-collage-masonry-horizontal"
          variant="masonryHorizontal"
          cell-size="160px"
          :images="masonryHorizontalImages"
          :collage-item-attrs="{ collageBarAttrs: { position: 'bottom' } }"
          @click="onCollageClick"
        />
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-update-btn"
            size="sm"
            outline
            label="Trigger update()"
            @click="onManualUpdate"
          />
          <D1Button
            data-testid="demo-collage-expose-read-btn"
            size="sm"
            outline
            label="Read getValue() & getDetail()"
            @click="onReadExposeValue"
          />
        </DemoFlex>
        <DemoValue data-testid="demo-collage-update-output" label="Updates" :value="updateCount"/>
        <DemoValue data-testid="demo-collage-expose-output" label="Expose Output" :value="exposeReadout"/>
      </D1Group>

      <D1Group label="Masonry Vertical Variant">
        <D1Collage
          data-testid="demo-collage-masonry-vertical"
          variant="masonryVertical"
          columns="3"
          :cell-size="80"
          :images="masonryVerticalImages"
          :collage-item-attrs="{ collageBarAttrs: { position: 'bottom' } }"
        />
      </D1Group>

      <D1Group label="Columns (1 to 12) & Cell Sizes (Number vs String)">
        <DemoFlex>
          <D1Button
            v-for="columnCount in columnOptions"
            :key="columnCount"
            size="sm"
            :primary="selectedColumnCount === columnCount"
            :outline="selectedColumnCount !== columnCount"
            :label="`Cols ${columnCount}`"
            @click="selectedColumnCount = columnCount"
          />
        </DemoFlex>
        <D1Collage
          data-testid="demo-collage-columns-dynamic"
          variant="standard"
          :columns="selectedColumnCount"
          :cell-size="18"
          :images="wovenImages"
        />
        <DemoValue data-testid="demo-collage-columns-value" label="Columns" :value="selectedColumnCount"/>
      </D1Group>

      <D1Group label="CollageBar Positions & Item Modifiers">
        <D1Collage
          data-testid="demo-collage-bar-positions"
          variant="standard"
          columns="3"
          :cell-size="80"
        >
          <D1CollageItem
            :image="image1"
            label="Top Bar"
            description="Top overlay bar"
            :collage-bar-attrs="{ position: 'top', icon: 'star' }"
          />
          <D1CollageItem
            :image="image2"
            label="Bottom Bar"
            description="Bottom overlay bar"
            selected
            focus
            :collage-bar-attrs="{ position: 'bottom', button: 'View' }"
          />
          <D1CollageItem
            :image="standardImages[2].image"
            label="Static Bar"
            description="Static figcaption"
            compact
            tag="div"
            :collage-bar-attrs="{ position: 'static' }"
          />
        </D1Collage>
      </D1Group>

      <D1Group label="Selection, Keyboard Control & v-model:selected">
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-toggle-control"
            size="sm"
            outline
            :label="`Control: ${controlEnabled ? 'ON' : 'OFF'}`"
            @click="controlEnabled = !controlEnabled"
          />
          <D1Button
            data-testid="demo-collage-select-all"
            size="sm"
            outline
            label="Select std-1 & std-2"
            @click="selectedItems = ['std-1', 'std-2']"
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
          :cell-size="60"
          aria-label="Selectable collage gallery"
          :images="standardImages"
          :collage-item-attrs="{ collageBarAttrs: { position: 'bottom' } }"
          @update:selected="(value) => recordEvent('update:selected', value)"
          @update:model-selected="(value) => recordEvent('update:modelSelected', value)"
        />
        <DemoValue data-testid="demo-collage-selected-output" label="Selected" :value="selectedItems"/>
      </D1Group>

      <D1Group label="Default Slot, Events & Payload">
        <D1Collage
          data-testid="demo-collage-slot"
          variant="standard"
          columns="2"
          :cell-size="100"
        >
          <D1CollageItem
            :image="standardImages[0].image"
            label="Slotted Item 1"
            :collage-bar-attrs="{ position: 'bottom' }"
          >
            <template #barBody>
              <span>Custom #barBody</span>
            </template>
            <template #barTrailing>
              <span>#barTrailing</span>
            </template>
          </D1CollageItem>
          <D1CollageItem
            :image="standardImages[1].image"
            label="Slotted Item 2"
            :collage-bar-attrs="{ position: 'bottom' }"
          />
        </D1Collage>
        <D1Collage
          data-testid="demo-collage-events"
          variant="standard"
          columns="4"
          :cell-size="60"
          :images="standardImages"
          @click="onCollageClick"
          @click-lite="(value) => recordEvent('clickLite', value)"
        />
        <DemoValue data-testid="demo-collage-event-output" label="Event Name" :value="eventName"/>
        <DemoValue data-testid="demo-collage-event-payload" label="Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Custom Keys (keyValue / keyLabel), Boundaries & Empty State">
        <D1Collage
          data-testid="demo-collage-custom-keys"
          variant="standard"
          columns="3"
          :cell-size="80"
          key-value="id"
          key-label="title"
          :images="customKeyImages"
          :collage-item-attrs="{ collageBarAttrs: { position: 'static' } }"
        />
        <D1Collage
          data-testid="demo-collage-empty"
          variant="standard"
          columns="3"
          :cell-size="0"
          :images="[]"
        />
        <DemoBox class="demo-collage-page__narrow-box" data-testid="demo-collage-narrow">
          <D1Collage
            variant="standard"
            columns="1"
            cell-size="   "
            :images="narrowBoxImages"
            :collage-item-attrs="{ collageBarAttrs: { position: 'static' } }"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-toggle-mount"
            size="sm"
            outline
            :label="isLifecycleMounted ? 'Unmount Collage' : 'Mount Collage'"
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1Collage
          v-if="isLifecycleMounted"
          data-testid="demo-collage-lifecycle"
          variant="masonryVertical"
          columns="2"
          :cell-size="90"
          :images="masonryVerticalImages"
        />
        <DemoValue data-testid="demo-collage-mounted" label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-collage-page {
  &__narrow-box {
    width: 100%;
    max-width: 240px;
    overflow-wrap: anywhere;
  }
}
</style>
