<script setup lang="ts">
import { ref } from 'vue'
import type { ConstrExpose } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { CollageItemExpose } from '@dxtmisha/constructor/CollageItem'
import type { ImageEventData } from '@dxtmisha/constructor/Image'
import type { CollageItemProps } from '@dxtmisha/d1/D1CollageItem'
import { image1, image2 } from '@dxtmisha/wiki/media'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

interface SpanShowcaseItem {
  span: NonNullable<CollageItemProps['span']>
  image: string
  position: NonNullable<CollageItemProps['collageBarPosition']>
  title: string
  description: string
  button?: string
  icon?: string
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

const spanShowcaseItems: readonly SpanShowcaseItem[] = [
  {
    span: 'standard',
    image: sampleLandscape,
    position: 'static',
    title: 'Standard (1x1)',
    description: 'Static caption bar below image',
    button: 'Open'
  },
  {
    span: 'wide',
    image: sampleWide,
    position: 'bottom',
    title: 'Wide (2x1)',
    description: 'Bottom overlay bar',
    button: 'View'
  },
  {
    span: 'tall',
    image: samplePortrait,
    position: 'top',
    title: 'Tall (1x2)',
    description: 'Top overlay bar',
    icon: 'bookmark'
  },
  {
    span: 'large',
    image: sampleWarm,
    position: 'bottom',
    title: 'Large (2x2)',
    description: 'Two columns by two rows'
  },
  {
    span: 'banner',
    image: sampleRose,
    position: 'bottom',
    title: 'Banner (3x1)',
    description: 'Full three-column banner span'
  },
  {
    span: 'huge',
    image: image1,
    position: 'bottom',
    title: 'Huge (3x2)',
    description: 'Full three-column by two-row showcase'
  }
]

const imageSizes: readonly NonNullable<CollageItemProps['size']>[] = [
  'auto',
  'contain',
  'cover'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No click events emitted yet')
const loadSummary = ref<string>('Waiting for @load event')

const isSelected = ref<boolean>(true)
const isFocused = ref<boolean>(true)
const isCompact = ref<boolean>(true)
const isItemMounted = ref<boolean>(true)

const loadCount = ref<number>(0)
const itemReference = ref<ConstrExpose<HTMLElement, CollageItemExpose>>()
const exposeSummary = ref<string>('Click button to inspect expose API')

const handleClickEvent = (
  event: MouseEvent,
  payload: EventClickValue
): void => {
  onEvent('click', event, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleClickLiteEvent = (payload: EventClickValue): void => {
  onEvent('clickLite', payload)
  eventPayload.value = JSON.stringify(payload)
}

const onImageLoad = (eventData: ImageEventData): void => {
  loadCount.value += 1
  const loadedImage = eventData.image
  if (loadedImage && typeof loadedImage === 'object' && 'width' in loadedImage && 'height' in loadedImage) {
    loadSummary.value = `type=${String(eventData.type)}, size=${loadedImage.width}x${loadedImage.height}`
  } else {
    loadSummary.value = `type=${String(eventData.type)}`
  }
}

const onInspectExpose = (): void => {
  const value = itemReference.value?.getValue?.()
  const detail = itemReference.value?.getDetail?.()
  const width = itemReference.value?.getWidth?.()
  const height = itemReference.value?.getHeight?.()
  const element = itemReference.value?.elementHtml
  const tagName = element instanceof HTMLElement ? element.tagName.toLowerCase() : 'undefined'

  exposeSummary.value = `value=${String(value)}, detail=${JSON.stringify(detail)}, w=${String(width)}, h=${String(height)}, tag=${tagName}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CollageItem">
    <D1Section class="demo-collage-item-page">
      <D1Group label="Bento Spans & Bar Positions">
        <div class="demo-collage-item-page__grid" data-testid="demo-collage-item-spans">
          <D1CollageItem
            v-for="item in spanShowcaseItems"
            :key="item.span"
            :data-testid="`demo-collage-item-${item.span}`"
            :image="item.image"
            :span="item.span"
            :collage-bar-position="item.position"
            :label="item.title"
            :description="item.description"
            :collage-bar-attrs="item.button || item.icon ? { button: item.button, icon: item.icon } : undefined"
          />
        </div>
      </D1Group>

      <D1Group label="Image Display Control (size, image object, imageAttrs, coordinator, x, y)">
        <div class="demo-collage-item-page__row" data-testid="demo-collage-item-display">
          <D1CollageItem
            v-for="sizeMode in imageSizes"
            :key="sizeMode"
            :data-testid="`demo-collage-item-${sizeMode}`"
            :image="sampleWide"
            :size="sizeMode"
            collage-bar-position="static"
            :label="`size: ${sizeMode}`"
          />
          <D1CollageItem
            data-testid="demo-collage-item-image-object"
            :image="{ value: image2, alt: 'Object image configuration' }"
            :image-attrs="{ objectWidth: 800, objectHeight: 600 }"
            size="cover"
            collage-bar-position="static"
            label="image object + imageAttrs"
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
          <D1Button
            data-testid="demo-collage-item-toggle-focus"
            size="sm"
            outline
            label="Toggle Focus"
            @click="isFocused = !isFocused"
          />
          <D1Button
            data-testid="demo-collage-item-toggle-compact"
            size="sm"
            outline
            label="Toggle Compact"
            @click="isCompact = !isCompact"
          />
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="States" :value="{ isSelected, isFocused, isCompact }"/>
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
            data-testid="demo-collage-item-icon-object"
            :image="sampleLandscape"
            selected
            :icon-check="{ icon: 'verified' }"
            collage-bar-position="bottom"
            label="Object iconCheck"
          />
          <D1CollageItem
            data-testid="demo-collage-item-icon-null"
            :image="sampleWarm"
            selected
            :icon-check="null"
            collage-bar-position="bottom"
            label="Null iconCheck"
          />
          <D1CollageItem
            data-testid="demo-collage-item-focus"
            :image="sampleRose"
            :focus="isFocused"
            href="#collage-item-anchor"
            collage-bar-position="bottom"
            label="Focused Link Card"
          />
          <D1CollageItem
            data-testid="demo-collage-item-compact"
            :image="samplePortrait"
            :compact="isCompact"
            tag="div"
            collage-bar-position="bottom"
            label="Compact + div Tag"
          />
          <D1CollageItem
            data-testid="demo-collage-item-router"
            :image="image1"
            :to="{ name: 'component-collage-item' }"
            collage-bar-position="bottom"
            label="Router Navigation (to)"
          />
        </div>
      </D1Group>

      <D1Group label="Slots (#barTrailing & #barBody)">
        <div class="demo-collage-item-page__row" data-testid="demo-collage-item-slots">
          <D1CollageItem
            data-testid="demo-collage-item-slot-named"
            :image="sampleLandscape"
            collage-bar-position="bottom"
            label="Custom Bar Title"
            description="Custom Bar Description"
          >
            <template #barTrailing>
              <D1Badge label="HD" overlap="static"/>
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
        <div class="demo-collage-item-page__row">
          <div class="demo-collage-item-page__single">
            <D1CollageItem
              ref="itemReference"
              data-testid="demo-collage-item-event"
              :image="sampleLandscape"
              value="collage-item-42"
              :detail="{ category: 'bento', priority: 1 }"
              collage-bar-position="bottom"
              label="Interactive Item"
              description="Click card to emit click, clickLite, and load"
              @click="handleClickEvent"
              @click-lite="handleClickLiteEvent"
              @load="onImageLoad"
            />
          </div>
          <div class="demo-collage-item-page__single">
            <D1CollageItem
              data-testid="demo-collage-item-index"
              :image="sampleWarm"
              index="item-index-7"
              collage-bar-position="bottom"
              label="Index Fallback Item"
              description="Uses index when value is omitted"
              @click-lite="handleClickLiteEvent"
            />
          </div>
        </div>
        <DemoValue data-testid="demo-collage-item-event-output" label="Last Event" :value="eventName"/>
        <DemoValue data-testid="demo-collage-item-event-payload" label="Event Payload" :value="eventPayload"/>
        <DemoValue data-testid="demo-collage-item-expose-output" label="Expose & Load" :value="`loads=${loadCount} (${loadSummary}) | ${exposeSummary}`"/>
      </D1Group>

      <D1Group label="Accessibility (A11y)">
        <div class="demo-collage-item-page__single">
          <D1CollageItem
            data-testid="demo-collage-item-a11y"
            :image="image1"
            :image-attrs="{ alt: 'Scenic mountain lake view' }"
            href="#accessible-collage-item"
            label="Accessible Photo Card"
            label-id="demo-collage-item-a11y-label"
            description="Includes alt text, labelId, descriptionId, and aria-describedby."
            description-id="demo-collage-item-a11y-desc"
            aria-labelledby="demo-collage-item-a11y-label"
            aria-describedby="demo-collage-item-a11y-desc"
            collage-bar-position="bottom"
          />
        </div>
      </D1Group>

      <D1Group label="Boundaries & Edge Cases">
        <div class="demo-collage-item-page__row" data-testid="demo-collage-item-boundaries">
          <D1CollageItem
            data-testid="demo-collage-item-empty"
            image=""
            label=""
            description=""
            collage-bar-position="static"
          />
          <D1CollageItem
            data-testid="demo-collage-item-whitespace"
            image="   "
            label="   "
            description="   "
            collage-bar-position="static"
          />
          <D1CollageItem
            data-testid="demo-collage-item-zero"
            :image="sampleWarm"
            collage-bar-position="static"
            :label="0"
            :description="0"
          />
          <D1CollageItem
            data-testid="demo-collage-item-numbers"
            :image="samplePortrait"
            collage-bar-position="static"
            :label="-5"
            :description="12.5"
          />
          <D1CollageItem
            data-testid="demo-collage-item-unicode"
            :image="sampleRose"
            collage-bar-position="static"
            label="Tiếng Việt / Кириллица / 🚀"
            description="<img src=x onerror=alert(1)>"
          />
          <DemoBox class="demo-collage-item-page__narrow">
            <D1CollageItem
              data-testid="demo-collage-item-unbroken"
              :image="sampleLandscape"
              collage-bar-position="static"
              label="SupercalifragilisticexpialidociousCollageItemUnbrokenTitleToken1234567890"
              description="UnbrokenDescriptionWithoutSpacesABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            />
          </DemoBox>
        </div>
      </D1Group>

      <D1Group label="SSR & Lifecycle (Mount / Unmount)">
        <DemoFlex align="center">
          <D1Button
            data-testid="demo-collage-item-lifecycle-toggle"
            size="sm"
            outline
            :label="isItemMounted ? 'Unmount CollageItem' : 'Mount CollageItem'"
            @click="isItemMounted = !isItemMounted"
          />
          <DemoValue label="Mounted" :value="isItemMounted"/>
        </DemoFlex>
        <div v-if="isItemMounted" class="demo-collage-item-page__single">
          <D1CollageItem
            data-testid="demo-collage-item-lifecycle"
            :image="sampleLandscape"
            collage-bar-position="bottom"
            label="Lifecycle Mounted Item"
            description="Toggled via v-if mount/unmount control."
          />
        </div>
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
    grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
    grid-auto-rows: 220px;
    gap: 12px;
  }

  &__single {
    max-width: 100%;
    width: min(320px, 100%);
    height: 220px;
  }

  &__narrow {
    max-width: 240px;
    width: 100%;
    height: 220px;
    overflow: hidden;
    overflow-wrap: anywhere;
  }
}
</style>
