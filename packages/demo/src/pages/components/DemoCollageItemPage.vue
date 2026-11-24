<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

interface CollageItemExposed {
  getValue?: () => unknown
  getWidth?: () => number | undefined
  getHeight?: () => number | undefined
}

const makeSampleSvg = (label: string, background: string, width = 600, height = 400): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`
    + `<rect width="100%" height="100%" fill="${background}"/>`
    + `<circle cx="${width * 0.25}" cy="${height * 0.35}" r="${Math.min(width, height) * 0.18}" fill="#ffffff" fill-opacity="0.25"/>`
    + `<rect x="${width * 0.55}" y="${height * 0.25}" width="${width * 0.3}" height="${height * 0.5}" rx="16" fill="#ffffff" fill-opacity="0.18"/>`
    + `<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="36" font-weight="600">${label}</text>`
    + '</svg>'

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

const sampleLandscape = makeSampleSvg('Landscape 600x400', '#3b82f6', 600, 400)
const samplePortrait = makeSampleSvg('Portrait 400x600', '#10b981', 400, 600)
const sampleWide = makeSampleSvg('Wide 800x400', '#8b5cf6', 800, 400)
const sampleWarm = makeSampleSvg('Warm 600x400', '#f59e0b', 600, 400)
const sampleRose = makeSampleSvg('Rose 600x400', '#ec4899', 600, 400)

const { eventName, onEvent } = useDemoEvent()

const isSelected = ref<boolean>(true)
const loadCount = ref<number>(0)
const itemRef = ref<CollageItemExposed>()
const exposeSummary = ref<string>('')

const onImageLoad = () => {
  loadCount.value += 1
}

const onInspectExpose = () => {
  const value = itemRef.value?.getValue?.()
  const width = itemRef.value?.getWidth?.()
  const height = itemRef.value?.getHeight?.()
  exposeSummary.value = `value=${String(value)}, w=${String(width)}, h=${String(height)}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CollageItem">
    <D1Section>
      <D1Group label="Bento Spans & Bar Positions">
        <div class="demo-collage-item-page__grid" data-testid="demo-collage-item-spans">
          <D1CollageItem
            data-testid="demo-collage-item-standard"
            :image="sampleLandscape"
            span="standard"
            collage-bar-position="static"
            label="Standard (1x1)"
            description="Static caption bar below image"
            :collage-bar-attrs="{ button: 'Open' }"
          />
          <D1CollageItem
            data-testid="demo-collage-item-wide"
            :image="sampleWide"
            span="wide"
            collage-bar-position="bottom"
            label="Wide (2x1)"
            description="Bottom overlay bar"
            :collage-bar-attrs="{ button: 'View' }"
          />
          <D1CollageItem
            data-testid="demo-collage-item-tall"
            :image="samplePortrait"
            span="tall"
            collage-bar-position="top"
            label="Tall (1x2)"
            description="Top overlay bar"
            :collage-bar-attrs="{ icon: 'bookmark' }"
          />
          <D1CollageItem
            data-testid="demo-collage-item-large"
            :image="sampleWarm"
            span="large"
            collage-bar-position="bottom"
            label="Large (2x2)"
            description="Two columns by two rows"
          />
          <D1CollageItem
            data-testid="demo-collage-item-banner"
            :image="sampleRose"
            span="banner"
            collage-bar-position="bottom"
            label="Banner (3x1)"
            description="Full three-column banner span"
          />
          <D1CollageItem
            data-testid="demo-collage-item-huge"
            :image="sampleLandscape"
            span="huge"
            collage-bar-position="bottom"
            label="Huge (3x2)"
            description="Full three-column by two-row showcase"
          />
        </div>
      </D1Group>

      <D1Group label="Image Display Control (size, coordinator, x, y)">
        <div class="demo-collage-item-page__row" data-testid="demo-collage-item-display">
          <D1CollageItem
            data-testid="demo-collage-item-cover"
            :image="sampleWide"
            size="cover"
            collage-bar-position="static"
            label="size: cover"
          />
          <D1CollageItem
            data-testid="demo-collage-item-contain"
            :image="sampleWide"
            size="contain"
            collage-bar-position="static"
            label="size: contain"
          />
          <D1CollageItem
            data-testid="demo-collage-item-coordinator"
            :image="sampleWide"
            :coordinator="[20, 10, 20, 10]"
            collage-bar-position="static"
            label="coordinator"
          />
          <D1CollageItem
            data-testid="demo-collage-item-offset"
            :image="sampleWide"
            x="25%"
            y="-10%"
            collage-bar-position="static"
            label="x / y offset"
          />
        </div>
      </D1Group>

      <D1Group label="States, Selection, Compact & Semantic Tags">
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-item-toggle-selected"
            size="sm"
            outline
            label="Toggle Selected"
            @click="isSelected = !isSelected"
          />
        </DemoFlex>
        <div class="demo-collage-item-page__row" data-testid="demo-collage-item-states">
          <D1CollageItem
            data-testid="demo-collage-item-selected"
            :image="sampleLandscape"
            :selected="isSelected"
            collage-bar-position="bottom"
            label="Selectable Card"
            @click="isSelected = !isSelected"
          />
          <D1CollageItem
            data-testid="demo-collage-item-custom-icon"
            :image="sampleWarm"
            selected
            icon-check="star"
            collage-bar-position="top"
            label="Custom Check + Top Bar"
          />
          <D1CollageItem
            data-testid="demo-collage-item-focus"
            :image="sampleRose"
            focus
            href="#collage-item-anchor"
            collage-bar-position="bottom"
            label="Focused Link Card"
          />
          <D1CollageItem
            data-testid="demo-collage-item-compact"
            :image="samplePortrait"
            compact
            tag="div"
            collage-bar-position="bottom"
            label="Compact + div Tag"
          />
        </div>
      </D1Group>

      <D1Group label="Slots & Boundaries">
        <div class="demo-collage-item-page__row" data-testid="demo-collage-item-slots">
          <D1CollageItem
            data-testid="demo-collage-item-slot-named"
            :image="sampleLandscape"
            collage-bar-position="bottom"
            label="Custom Bar Title"
            description="Custom Bar Description"
          >
            <template #barTrailing>
              <D1Badge label="HD" overlap="static" />
            </template>
          </D1CollageItem>
          <D1CollageItem
            data-testid="demo-collage-item-slot-body"
            :image="sampleWide"
            collage-bar-position="static"
          >
            <template #barBody>
              <div>Custom Bar Body Slot</div>
            </template>
          </D1CollageItem>
          <D1CollageItem
            data-testid="demo-collage-item-zero"
            :image="sampleWarm"
            collage-bar-position="static"
            :label="0"
            :description="0"
          />
          <D1CollageItem
            data-testid="demo-collage-item-unicode"
            :image="sampleRose"
            collage-bar-position="static"
            label="Tiếng Việt / Кириллица / 🚀"
            description="<img src=x onerror=alert(1)>"
          />
        </div>
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-item-inspect"
            size="sm"
            outline
            label="Inspect Expose"
            @click="onInspectExpose"
          />
        </DemoFlex>
        <div class="demo-collage-item-page__single">
          <D1CollageItem
            ref="itemRef"
            data-testid="demo-collage-item-event"
            :image="sampleLandscape"
            value="collage-item-42"
            collage-bar-position="bottom"
            label="Interactive Item"
            description="Click card to emit click and clickLite"
            @click="(event, value) => onEvent('click', event, value)"
            @click-lite="(value) => onEvent('clickLite', value)"
            @load="onImageLoad"
          />
        </div>
        <DemoValue data-testid="demo-collage-item-event-output" :value="eventName" />
        <DemoValue data-testid="demo-collage-item-expose-output" :value="`loads=${loadCount} | ${exposeSummary}`" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-collage-item-page {
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 160px;
    gap: 12px;
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-auto-rows: 220px;
    gap: 12px;
  }

  &__single {
    max-width: 320px;
    height: 220px;
  }
}
</style>
